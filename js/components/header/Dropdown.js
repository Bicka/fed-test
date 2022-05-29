import Toast from "../Toast";
/**
 * Modulul de dropdown pentru utilizator
 */
export default class Dropdown{

    constructor(data)
    {
        this.options = data;
        
    }
    /**
     * 
     * @returns Returneza codul HTML pentru dropdown
     */
    init(){
        return `<div class="user-options dropdown">
                    <span class="dropbtn">
                        ${this.options.text}
                    <img id="user-dropdown-trigger" src="assets/svg/header/arrow-down.svg">
                </span>
                <hr>
            </div>`

      
    }
     /**
     * Initializeaza trigarurile elementelor HTML afisate la initializare
     */
    initTriggers()
    {
        $(`.dropdown #user-dropdown-trigger`)
            .on('click', 
                ()=>{
                    let text = `User Dropdown has been pressed!`;
                    console.log(text);
                    Toast.show({type: "info", text: text, time: 1000, icon: "assets/svg/header/arrow-down.svg"});
                })
    }
}