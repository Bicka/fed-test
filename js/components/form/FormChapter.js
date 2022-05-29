import Input from "./Input";

export default class FormChapter{
    constructor(index,data){
        this.index = index;
        this.title = data.title;
        this.items = data.inputs;
    }
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
    initTriggers(){
        this.items.forEach((item)=>{item.initTriggers();});
    }
}