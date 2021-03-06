import Toast from "../Toast";
/**
 * Modulul de optiuni din partea dreapta a utilizatorului
 */
export default class OptionsGroup{
    constructor(data)
    {
        this.options = data;
    }
    /**
     * 
     * @returns Returneza codul HTML pentru optiuni
     */
    init(){
        let count = -1;
        return `<div class="options-group">
                    ${this.options.map((item)=>{
                        count++;
                        return `<div id="header-option-${count}" class="option-item${item.dot?' dot':''}${item.dot&&item.dotColor ?` dot-${item.dotColor}`:' dot-warning'}"
                        ${item.dotValue?`data-before="${item.dotValue}"`:''}>
                            <img alt="${item.title}" src="${item.icon}">
                        </div>`
                    }).join('')}
                </div>`
    }
    /**
     * Initializeaza trigarurile elementelor HTML afisate la initializare
     */
    initTriggers()
    {
        let count = 0;
        this.options.forEach(item => {
            let title = item.title;
            let icon = item.icon;
            $(`.options-group #header-option-${count}`)
            .on('click', 
                ()=>{
                    let text = `${title} has been pressed!`;
                    console.log(text);
                    Toast.show({type: "warning", text: text, time: 1000, icon: icon});
                });
            count++;
        });
    }
}