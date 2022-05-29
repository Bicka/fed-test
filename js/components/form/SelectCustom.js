/**
 * Clasa pentru generarea modului de dropdown cu search
 */
export default class SelectCustom {
    constructor(data) {
        this.options = data;
        this.selectedItem = null;
    }
    /**
     * 
     * @returns Returneza codul HTML pentru modul
     */
    init() {
        let index=-1;
        let arr = this.options.options.map((item) => {
            index++;
            item.id = `${this.options.elementId}--option-${index}`;
            if(item.checked) this.selectedItem = item;
            return `<li id="${this.options.elementId}--option-${index}" class="${item.checked ? "selected" : ""}" data-value="${item.value}">${item.name}</li>`;
        }).join('');
        let element = `<div id="select-wrapper-${this.options.elementId}" class="select-wrapper">
                            <div class="select-btn search">
                                <input id="select-wrapper-${this.options.elementId}--input" class="input-select" type="text" placeholder="${this.options.placeHolder}">
                                <img class="arrow" src="assets/svg/header/arrow-down.svg">
                                <img class="delete" src="assets/svg/icons/close.svg">
                            </div>
                        <div id="select-wrapper-${this.options.elementId}--content" class="content">
                            <ul  class="options-select">
                                ${arr ? arr : `<span>Not found</span>`}
                            </ul>
                        </div>
                    </div>`
        return element;
    }
    /**
     * Initializeaza trigarurile elementelor HTML afisate la initializare
     */
    initTriggers() {
        let items = this.options.options;
        const elementId = `#select-wrapper-${this.options.elementId} .input-select`;
        const wrapperId = `#select-wrapper-${this.options.elementId}`;
        const inputId = `#select-wrapper-${this.options.elementId}--input`;
        const wrapper = document.getElementById(`select-wrapper-${this.options.elementId}`);
        const options = wrapper.querySelector(".options-select");
        this.slectItemTrigger(wrapperId,options,inputId);
        $(elementId)
            .on("keyup", ()=> {
                let searchWord = $(elementId).val().toLowerCase();
                let arr = [];
                let index = -1;;
                arr = items.filter((item) => {
                    return item.name.toLowerCase().includes(searchWord);
                }).map((item) => {
                    index++;
                    return `<li id="${this.options.elementId}--option-${index}" class="${item.checked ? "selected" : ""}" data-value="${item.value}">${item.name}</li>`;
                }).join("");
                options.innerHTML = arr ? arr : `<span>Not found</span>`;
                this.slectItemTrigger(wrapperId,options,inputId);
            })
        $(wrapperId)
            .on("focusin", ()=>{
                $(wrapperId).addClass("active");
                
            })
            .on("focusout", ()=>{
                if(this.selectedItem){$(inputId).val(this.selectedItem.name);
                $(`${this.selectedItem.id}`).addClass("selected");}
                $(wrapperId).removeClass("active");
                let index=-1;
                let arr = items.map((item) => {
                    index++;
                    if(this.selectedItem.name == item.name && this.selectedItem.value == item.value) item.checked = true;
                    return `<li id="${this.options.elementId}--option-${index}" class="${item.checked ? "selected" : ""}" data-value="${item.value}">${item.name}</li>`;
                }).join("");
                options.innerHTML = arr ? arr : `<span>Not found</span>`;
                this.slectItemTrigger(wrapperId,options,inputId);
            });

        $(`${wrapperId} img.delete`)
            .on('mousedown',(e)=>{
            e.stopPropagation();
            this.options.options.forEach(el => {
                el.checked = false; 
            });
            $(`${wrapperId} li`).removeClass("selected");
            $(inputId).val(``).trigger('keyup');
            $(wrapperId).trigger("focusin");
            return false;
            })
    }
    /**
     * Initializare trigarelor pe fiecare element din lista de select
     * @param {string} wrapperId 
     * @param {string} options 
     * @param {string} inputId 
     */
    slectItemTrigger(wrapperId, options,inputId)
    {
        let li = options.querySelectorAll("li");
        li.forEach(element => {
            element.addEventListener("mousedown", (e)=>{
                e.stopPropagation();
                if(!element.classList.contains('selected'))
                {
                    let item  = new Object({id:element.getAttribute("id"), name: element.innerText, checked: true, value:element.getAttribute("data-value")});
                    this.options.options.forEach(el => {
                        if(el.name == item.name && el.value == item.value) el.checked = true;
                        else el.checked = false; 
                    })
                    this.selectedItem = item;
                    $(`${wrapperId} li`).removeClass("selected");
                    $(`#${item.id}`).addClass("selected");
                  
                }
                $(inputId).val(element.innerText);
                $(wrapperId).removeClass("active");
            
            });
        });
    }
    /**
     * 
     * @returns Valoarea selectata
     */
    getValue()
    {
        return this.selectedItem.value;
    }
    
}