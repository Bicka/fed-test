/**
 * Clasa pentru initializarea modulului de header
 */
export default class HeaderInit{
    /**
     * @param {string} username 
     * @param {number} notifCount 
     */
    constructor(username, notifCount)
    {
        if(isNaN(notifCount)) throw `Nofications count (${notifCount}) is not a number`;

        this.elementId = "header";
        this.username = username;
        this.notifCount = notifCount
    }
}