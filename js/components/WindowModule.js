import BlockClick from "./BlockClick";
import FormModule from "./form/FormModule";
import {formData} from "../core/config"
export default class WindowModule{
    constructor(type, url)
    {
        this.type = type;
        $.when(this.getData(url)).done((data) => {
            this.title = data.title;
            switch(type)
            {
                case 'form':
                    this.activeType = new FormModule(data, this.closeWindow);
                    break;
                default:
                    throw 'Type not supported';
            }
            this.#init();
        }).fail(()=>{
            this.title = formData.title;
            switch(type)
            {
                case 'form':
                    this.activeType = new FormModule(formData, this.closeWindow);
                    break;
                default:
                    throw 'Type not supported';
            }
            this.#init();
        })
        
    }
    #init()
    {
        let newWindow = 
        `<div class="window-div" id="window-open">
            <div class="window-header">
                <div class="window-title"><span>${this.title}</span></div>
                <div class="window-options">
                    <button id="window-close-btn"><img src="assets/svg/window/close.svg"/></buton>
                </div>
            </div>
            <div class="window-body" id="window-body">
                
            </div>
            <div class="window-footer">
                
                <button class="btn-secondary" id="window-close-btn-footer">CLOSE</buton>
            </div>
        </div>`;
        BlockClick.show();
        $(`body`).append(newWindow);
        this.#initOptionButtons();
        this.#initActiveType();
    }

    #initOptionButtons(){
        $(`#window-close-btn`).on('click',()=>this.closeWindow());
        $(`#window-close-btn-footer`).on('click',()=>this.closeWindow())
    }
    #initActiveType(){
        if(this.activeType)
        { 
            $(`#window-body`).html(this.activeType.init());
            this.activeType.initTriggers();
        }
    }
    closeWindow(){
        $(`#window-open`).remove();
        BlockClick.hide();
        this.activeType = null;
        window.App.currentWindow = null;

    }
    getData(url)
    {
        return $.ajax({
            headers: { "Accept": "application/json"},
            url: url,
            method: "GET",
            cache: "no-chache",
            error: (e) =>{
                console.log(e)
            }
        })
    }



}