import ContentModule from "../core/ContentModule";
import HeaderModule from "../core/HeaderModule";
export default class MainContentInit{
    /**
     * 
     * @param {HeaderInit} headerInit 
     * @param {string} contentInit 
     */
    constructor(headerInit, contentInit)
    {
        
        this.elementId = 'main-content';
        this.header = new HeaderModule(headerInit);
        this.content = new ContentModule(contentInit);
        
    }
}