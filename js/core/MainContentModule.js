import MainContentInit from '../class/MainContentInit.js';
export default class MainContentModule
{
    /**
     * 
     * @param {MainContentInit} mainContentInit 
     */
    constructor(mainContentInit)
    {
        if(!mainContentInit instanceof MainContentInit) throw 'Type of mainContentInit is not defined'
        this.options = mainContentInit;
    }
    init()
    {
        return `<div id="${this.options.elementId}" class="main-content">
            <div id="${this.options.header.options.elementId}">
                ${this.options.header.init()}
            </div>
            <div id="content">
                ${this.options.content.init()}
          </div>
        </div>`

    }
}