export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    };

    renderItems(items) {
        items.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
        });
    };

    addItem(element) {
        this._containerSelector.prepend(element)
    };
}