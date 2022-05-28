import AppInit from './class/AppInit.js';
import ContentInit from './class/ContentInit.js';
import HeaderInit from './class/HeaderInit.js';
import MainContentInit from './class/MainContentInit.js';
import SidebarInit from './class/SidebarInit.js';
import AppModule from './core/AppModule.js'
import { formData } from './core/config.js';
window.$ = require('jquery');

let headerInit = new HeaderInit(
    'John Smith',
    24
);
let contentInit = new ContentInit(
    'Page Title',
);
let sidebarInit = new SidebarInit(
    "assets/svg/logo.svg",
    "js/json/sidebarList.json"
);
let mainContentInit = new MainContentInit(
    headerInit,
    contentInit

)
let appInit = new AppInit(
    'app-div',
    mainContentInit,
    sidebarInit
)
window.appFormData = formData;
window.App = new AppModule(appInit)