import SidebarInit from '../class/SidebarInit.js';
import SidebarList from '../components/sidebar/SidebarList.js';
export default class SidebarModule
{
    /**
     * 
     * @param {SidebarInit} sidebarInit 
     */
    constructor(sidebarInit)
    {
        if(!sidebarInit instanceof SidebarInit) throw 'Type of sidebarInit is not defined'
        this.options = sidebarInit;
        this.sidebarList = new SidebarList(this.options.sidebarMenuListUrl);
    }

    init()
    {
        return `<div id="${this.options.elementId}">
            <div class="sidebar-button"><img src="assets/svg/sidebar-btn.svg"  ></div>
                <div class="sidebar-logo">
                    <img src="${this.options.logoUrl}">
                </div>
                <div class="sidebar-list" id="sidebar-list">
                    ${this.sidebarList.init()}
                </div>
        </div>`
    }
}