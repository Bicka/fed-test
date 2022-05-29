import Input from "./Input";
/**
 * Clasa pentru initializarea capitolelor pentru formulare
 */
export default class FormChapter{
    constructor(index,data){
        this.index = index;
        this.title = data.title;
        this.items = data.inputs;
    }
    /**
     * 
     * @returns Retunreaza codul HTML al capitolului
     */
    init()
    {
        this.items = this.items.map((item)=> { return new Input(item)});
        let rows = this.items.map((item)=>{return item.init()}).join(' ');
        return `<div class="form-chapter" id="form-chapter-${this.index}">
            <div class="form-chapter-title">
                <span>${this.title}</span>
            </div>
            ${rows}
        </div>`
    }
    /**
     * Initializeaza trigarurile elementelor HTML afisate la initializare
     */
    initTriggers(){
        this.items.forEach((item)=>{item.initTriggers();});
    }
}