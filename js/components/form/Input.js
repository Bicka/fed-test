import SelectCustom from "./SelectCustom";

export default class Input{
    constructor(data)
    {
        this.elementId = data.id;
        this.labelName = data.labelName;
        this.type = data.type;
        this.placeHolder = data.placeHolder;
        this.isRequired = data.isRequired;
        data.isDisabled ? this.isDisabled = data.isDisabled : this.isDisabled = false;
        data.isParent ? this.isParent = data.isParent : this.isParent = false;
        
        if(data.isChild)
        {
            this.isChild = data.isChild;
            this.parentId = data.parentId;
            this.parentvalue = data.parentValue;
        }
        this.options = data.options;
    }
    init(){
        if(this.labelName.length > 0 && !this.isChild)
        {
            return `<div class="form-row-grid${this.type == "checkbox"? " label-start" : ""}">
                        <label id="${this.elementId}-label" ${this.isRequired? "class='required'": ""}>
                            ${this.labelName}
                        </label>
                        ${this.initType()}
                    </div>`;
        }
        else if(!this.isChild)
        {
            return `<div class="form-row-no-label">
                    ${this.initType()}
                    </div>`;
        }
        else{
            return `<div class="form-row-grid-child${this.type == "checkbox"? " label-start" : ""}" data-parent="${this.parentId}" data-parent-value="${this.parentvalue}">
            <label id="${this.elementId}-label" ${this.isRequired? "class='required'": ""}>
                ${this.labelName}
            </label>
            ${this.initType()}
        </div>`;

        }
    }
    initType()
    {
        switch(this.type)
        {
            case "select":
                return this.#selectType();
            case "checkbox":
                return this.#checkBoxType();
            case "radio":
                return this.#radioType();
            case "text":
                return `<input
                id="${this.elementId}"
                name="${this.elementId}"
                type="text"
                placeholder="${this.placeHolder}"
                ${this.isRequired? 'required': ''}
                ${this.isDisabled? 'disabled': ''}
                />`;
                
            default:
                return `<input
                id="${this.elementId}"
                name="${this.elementId}"
                type="text"
                placeholder="${this.placeHolder}"
                ${this.isRequired? 'required': ''}
                ${this.isDisabled? 'disabled': ''}
                />`;
        }
    }
    #selectType()
    {
        //this.selectObj = new SelectCustom(this);
        //return this.selectObj.init()
        return `<select 
        id="${this.elementId}"
        name="${this.elementId}"
        ${this.isRequired? 'required': ""}
        ${this.isDisabled? 'disabled': ""}
        >
        <option value="" disabled selected hidden>${this.placeHolder}</option>
            ${this.options.map((item)=>{
                return `<option value='${item.value}'>${item.name}</option>`
            }).join('')}
        </select>`
    }
    #checkBoxType()
    {
        return `<div>${this.options.map((item)=>{
            return `<div class="checkbox-row"><input type="checkbox"
                        id="${this.elementId}-${item.value}"
                        name="${this.elementId}-${item.value}"
                        value="${item.value}"
                        ${item.checked? "checked":""}
                        >
                <label for="${this.elementId}-${item.value}">${item.name}</label></div>`
        }).join('')}</div>`;
    }
    #radioType()
    {
        return `<div>${this.options.map((item)=>{
            return `<div class="checkbox-row"><input type="radio"
                        id="${this.elementId}-${item.value}"
                        name="${this.elementId}"
                        value="${item.value}"
                        ${item.checked? "checked": ""}
                        >
                    <label for="${this.elementId}-${item.value}">${item.name}</label></div>`
        }).join('')}</div>`;
    }

    initTriggerForChildren(){
        if(this.isParent)
        {   let elementId = this.elementId;
            $(`input[name=${elementId}]`).on('change',function(){
                let value = $( `input[name=${elementId}]:checked`).val();
                document.querySelectorAll(`[data-parent="${elementId}"]`)
                .forEach(item=>{
                    //item.classList.add("fadeOut");
                    item.classList.add("hide-row")
                })
                document.querySelectorAll(`[data-parent="${elementId}"][data-parent-value="${value}"]`)
                .forEach(item=>{
                    //item.classList.remove("fadeOut");
                    item.classList.remove("hide-row");
                    //item.classList.add("fadeIn")
                })
            });
            $(`input[name=${elementId}]`).trigger('change');
        }
    }
    initTriggers(){
        if(this.type == "select")
        {
            this.selectObj.initTriggers();
        }
        this.initTriggerForChildren();
    }
}