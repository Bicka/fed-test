import Toast from "../Toast";
import FormChapter from "./FormChapter";

export default class FormModule{

    constructor(formDataInit, closeWindow)
    {
        this.options = formDataInit;
        this.chapters = new Array();
        this.closeWindow = closeWindow;
        this.#initChapter();
       
    }
    init(){
        let btnSave = `<button class="btn-primary" id="window-form-save">SAVE</buton>`;
        $(`#window-open .window-footer`).prepend(btnSave);
        return `<form id="window-from" class="form-div">
            ${this.chapters.map((item)=> {return item.init()}).join('')}
        </form>`;
    }

    #initChapter(){
        let count = 0;
        
        this.options.chapters.map((item) =>{
            this.chapters.push(new FormChapter(count,item));
            count++;
        });
    }
    initTriggers(){
        this.chapters.forEach(item=>item.initTriggers());
        $(`#window-form-save`).on('click',()=>{
            $(`#window-from`).trigger("submit");
        });
        $(`#window-from`).on('submit',(e)=>{
            e.preventDefault();
            this.#formSubmit();
        });
    }
    #formSubmit(){
        Toast.show({type: "success", text:"Successfully saved the report"});
        if(this.options.closeWindow) this.closeWindow();
    }

    

}