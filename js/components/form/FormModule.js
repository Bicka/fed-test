import Toast from "../Toast";
import FormChapter from "./FormChapter";
/**
 * Clasa pentru initializarea formularului
 */
export default class FormModule{

    constructor(formDataInit, closeWindow)
    {
        this.options = formDataInit;
        this.chapters = new Array();
        this.closeWindow = closeWindow;
        this.#initChapter();
       
    }
    /**
     * 
     * @returns Retunreaza codul HTML al formularului
     */
    init(){
        let btnSave = `<button class="btn-primary" id="window-form-save">SAVE</buton>`;
        $(`#window-open .window-footer`).prepend(btnSave);
        return `<form id="window-from" class="form-div">
            ${this.chapters.map((item)=> {return item.init()}).join('')}
        </form>`;
    }
    /**
     *  Initializarea uni Chapter de formular
     */
    #initChapter(){
        let count = 0;
        
        this.options.chapters.map((item) =>{
            this.chapters.push(new FormChapter(count,item));
            count++;
        });
    }
    /**
     * Initializeaza trigarurile elementelor HTML afisate la initializare
     */
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
    /**
     * Trimiterea formularului si afisarea notificarii.
     * Dupa trimitere aceasta poate inchide si fereastra daca variabila closeWindow este true.
     */
    #formSubmit(){
        Toast.show({type: "success", text:"Successfully saved the report"});
        if(this.options.closeWindow) this.closeWindow();
    }

    

}