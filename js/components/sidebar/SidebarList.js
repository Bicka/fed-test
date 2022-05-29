import { sidebarData } from '../../core/config';
import SidebarItem from './SidebarItem'
/**
 * Modulul de sidebar
 */
export default class SidebarList{
    /**
     * 
     * @param {string} sidebarMenuListUrl 
     */
    constructor(sidebarMenuListUrl)
    {
       this.url = sidebarMenuListUrl;
       this.sidebarData = new Array();
       
    }
    
    /**
     * 
     * @returns Returneza codul HTML pentru un sidebar;
     * Daca primeste eroare la aducerea datelor din json va folosi variabila din fisiersul config.js
     */
    init()
    {
        $.when(this.getData()).done(() => {
            
            this.sidebarData.forEach(item => { 
                $(`#sidebar-list`).append(item.init())
                item.clickAction();
            });
        }).fail(()=>{
            let count = 0;
                sidebarData.map(item => {
                    this.sidebarData.push(new SidebarItem(count,item.iconUrl,item.title));
                    count++;
            });
            this.sidebarData.forEach(item => { 
                $(`#sidebar-list`).append(item.init())
                item.clickAction();
            })
        })
        return '';
        
    }
    /**
     * 
     * @returns Aducerea datelor pentru sidebar
     */
    getData()
    {
        return $.ajax({
            headers: { "Accept": "application/json"},
            url: this.url,
            method: "GET",
            cache: "no-chache",
            success: (data) => {
                let count = 0;
                data.map(item => {
                    this.sidebarData.push(new SidebarItem(count,item.iconUrl,item.title));
                    count++;
                });
            },
            error: (e) =>{
                console.log(e)
                
            }
        })
    }

}