import HeaderInit from '../class/HeaderInit.js'
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
    }
    init()
    {
        
        return `<div class="header-content">
        <div class="user-options dropdown">
          <span onclick="" class="dropbtn">
            
            Welcome, ${this.options.username}
            <img src="assets/svg/header/arrow-down.svg">
          </span>
          <hr>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
      </div>

      <div class="options-group">
          <div class="option-item">
            <img src="assets/svg/header/gift.svg">
          </div>
          <div class="option-item">
            <img src="assets/svg/header/question.svg">
          </div>
          <div class="option-item dot" data-before="24">
            <img src="assets/svg/header/bell.svg">
          </div>
      </div>
    </div>`;
    }
}