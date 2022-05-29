import HeaderInit from '../class/HeaderInit.js'
import Dropdown from '../components/header/Dropdown.js';
import OptionsGroup from '../components/header/OptionsGroup.js';

export default class HeaderModule
{
    /**
     * 
     * @param {HeaderInit} headerInit 
     */
    constructor(headerInit)
    {
        if(!headerInit instanceof HeaderInit) throw 'Type of headerInit is not defined'
        this.options = headerInit;
        this.dropdown = new Dropdown({text: `Welcome, ${this.options.username}`})
        this.optionsGroup = new OptionsGroup([
          {title:"Gift", icon: "assets/svg/header/gift.svg", dot: false},
          {title:"Help",icon: "assets/svg/header/question.svg", dot: false},
          {title:"Notifications",icon: "assets/svg/header/bell.svg", dot: true, dotValue: 24, dotColor: "warning"}, 
        ]);
    }
    init()
    {
        
        return `<div class="header-content">
          ${this.dropdown.init()}
          ${this.optionsGroup.init()}
        </div>`;
    }
    initTriggers()
    {
      this.dropdown.initTriggers();
      this.optionsGroup.initTriggers();
    }
}