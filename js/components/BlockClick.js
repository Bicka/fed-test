/**
 * Modulul de mascare al paginii
 */
export default class BlockClick{
    static isActive = false;
    static show()
    {
        if(!this.isActive)
        {
            let wrapper = `<div id="block-clicks" class="block-clicks"></div>`;
            $(`body`).prepend(wrapper);
            this.isActive = true;
        }
    }
    static hide()
    {
        if(this.isActive)
        {
            $(`#block-clicks`).remove();
            this.isActive = false;
        }
    }
}