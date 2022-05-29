import AppInit from "../class/AppInit";
import Toast from "../components/Toast";
import WindowModule from "../components/WindowModule";

export default class AppModule{

    /**
     * 
     * @param {AppInit} appInit 
     */
    constructor(appInit)
    {
        try{
            this.options = appInit;
            this.#init();
        }
        catch(e)
        {
            console.error(e);
        }
    }

    #init()
    {
        console.log(this.options)
        document.getElementById(this.options.elementId).className = 'app-div';
        document.getElementById(this.options.elementId).innerHTML =
            `${this.options.sidebar.init()} 
            ${this.options.mainContent.init()}`;
        this.options.mainContent.initTriggers();
    }
    createNewWindow(type,formData)
    {
        this.currentWindow = new WindowModule(type,formData)
    }
}