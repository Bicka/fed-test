export default class Toast{

    static #getToastBody(data){
        return `<div class="fadeIn toast-div ${data.type}" id="toast-${data.index}">
            <div class="toast-icon">
                <img src="assets/svg/icons/check.svg">
            </div>
            <div class="toast-content">
                <span>${data.text}</span>
            </div>
            <div class="toast-close">
                <img src="assets/svg/icons/close.svg">
            </div>
        </div>`;
    }
    static show(data){
        data.index = Math.floor(Math.random() * 10000);
        let time = data.time ? data.time : 3000;
        let toastBody = this.#getToastBody(data);
        if(document.getElementById('toast-list'))
        {
            $(`#toast-list`).append(toastBody);
        }
        else
        {
            let toastList = `<div class="toast-list" id="toast-list"></div>`
            $('body').append(toastList);
            $(`#toast-list`).append(toastBody);
        }
        

        $(`#toast-${data.index} .toast-close`).on("click",()=>{Toast.close(`toast-${data.index}`)})
        setTimeout(()=>{Toast.close(`toast-${data.index}`)},time);
    }
    static close(elementId)
    {   
        $(`#${elementId}`).removeClass('fadeIn').fadeOut(1000, ()=>{$(`#${elementId}`).remove()});
        if(document.getElementsByClassName('toast-div').length == 0) $(`#toast-list`).remove();
    }
    
}