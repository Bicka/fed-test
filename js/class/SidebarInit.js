export default class SidebarInit{
    /**
     * 
     * @param {string} logoUrl
     * @param {string} sidebarMenuListUrl 
     */
    constructor(logoUrl, sidebarMenuListUrl)
    {
        
        this.elementId = 'sidebar';
        this.logoUrl = logoUrl;
        this.sidebarMenuListUrl = sidebarMenuListUrl;
    }
}