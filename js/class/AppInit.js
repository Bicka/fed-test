
import MainContentModule from "../core/MainContentModule";
import SidebarModule from "../core/SidebarModule";

export default class AppInit{
    /**
    * 
    * @param {string} appElementId 
    * @param {ContentInit} contentInit 
    * @param {SidebarInit} sidebarInit 
    */
    constructor(appElementId, contentInit, sidebarInit)
    {
        if(!document.getElementById(appElementId)) throw `App element ${appElementId} is not defined`;
        
        this.elementId = appElementId;
        this.sidebar = new SidebarModule(sidebarInit);
        this.mainContent = new MainContentModule(contentInit);
    }
}