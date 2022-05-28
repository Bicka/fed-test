import Toast from "../Toast";

export default class SidebarItem{
    /**
     * 
     * @param {number} index 
     * @param {string} iconUrl 
     * @param {string} title 
     */
    constructor(index, iconUrl, title)
    {
        if(isNaN(index)) throw `Index (${index}) is not a number`;

        this.index = index;
        this.iconUrl = iconUrl;
        this.title = title;
    }
    init()
    {
        return `<div class="sidebar-item" id="sidebar-item-${this.index}">
                        <div class="sidebar-list-button">
                            <img src="${this.iconUrl}">
                            <span>${this.title}</span>
                        </div>
                    </div>`
    }

    clickAction()
    {
        let title = this.title;
        $(`.sidebar-list #sidebar-item-${this.index}`)
            .on('click', 
                ()=>{
                    let text = `${title} has been pressed!`;
                    console.log(text);
                    Toast.show({type: "info", text: text, time: 100000});
                })
    }
}