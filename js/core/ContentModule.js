import ContentInit from '../class/ContentInit.js'

export default class ContentModule
{
    /**
     * 
     * @param {ContentInit} contentInit 
     */
    constructor(contentInit)
    {
        if(!contentInit instanceof ContentInit) throw 'Type of contentInit is not defined'
        this.options = contentInit;
    }
    init()
    {
        
        return `<div class="page-title">
                    <span>${this.options.pageTitle}</span>
                </div>
                <div class="page-content">
                  <div class="landing-content">
                    <div class="landing-image"><img src="assets/svg/rocket.svg"></div>
                    <div class="landing-title"><span>Start creating reports</span></div>
                    <div class="landing-subtitle"><span>You don’t have any reports defined yet</span></div>
                    <div class="landing-btn"><button class="btn-primary" onclick="window.App.createNewWindow('form','js/json/form.json')">CREATE REPORT</button></div>
                  </div>
                </div>`;
    }

}