export default class SelectCustom {
    constructor(data) {
        this.options = data;
        this.selectedItem = null;
    }
    init() {
        let element = `<div id="select-wrapper-${this.options.elementId}" class="select-wrapper">
                            <div class="select-btn search">
                                <input class="input-select" type="text" placeholder="${this.options.placeHolder}">
                                <img src="assets/svg/header/arrow-down.svg">
                            </div>
                        <div class="content">
                            <ul class="options-select">
                                ${this.options.options.map((item) => {
                                    if(item.checked) this.selectedItem = item;
                                    return `<li class="${item.checked ? "selected" : ""}" data-value="${item.value}">${item.name}</li>`;
                                }).join('')}
                            </ul>
                        </div>
                    </div>`
        return element;
    }
    initTriggers() {
        let items = this.options.options;
        const elementId = `#select-wrapper-${this.options.elementId} .input-select`;
        const wrapperId = `#select-wrapper-${this.options.elementId}`;
        const wrapper = document.getElementById(`select-wrapper-${this.options.elementId}`);
        const options = wrapper.querySelector(".options-select");

        $(elementId)
            .on("keyup", ()=> {
                let searchWord = $(elementId).val().toLowerCase();
                let arr = [];
                arr = items.filter((item) => {
                    return item.name.toLowerCase().includes(searchWord);
                }).map((item) => {
                    return `<li class="${item.checked ? "selected" : ""}" data-value="${item.value}">${item.name}</li>`;
                }).join("");
                options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
            })
        $(wrapperId).on("focusin", ()=>{
                $(wrapperId).toggleClass("active")
            })
            .on("focusout", ()=>{
                $(wrapperId).toggleClass("active")

            })
        
        let li = options.querySelectorAll("li");
        console.log(li.le)
        $(`${wrapperId} .options-select li`).on('click',function(){
            console.log($(this)[0].data('value'))
        })
        //const selectBtn = wrapper.querySelector(".select-btn")
        //selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
    }
}