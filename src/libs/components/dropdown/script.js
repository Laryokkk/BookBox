import { componentUtils } from "../../utils/componentUtils.js";

class DropDown {
    constructor(parentElement, props) {
        this.parentElement = parentElement;
        this.rootElement = null;
        this.props = {
            title: props.title,
            checkboxList: props.checkboxList,
        };

        this.elements = {};
    }

    init() {
        this.initTemplate();
        this.initElements();
        this.initEventListeners();
        this.render();
    }

    initTemplate() {
        const initCheckboxList = (list) => {
            let str = ``;

            list.forEach(el => {
                str += `<div class="wrapper-checkbox">
                    <input type="checkbox" class="checkbox" name="${el.title}" id="${el.name}-${el.title}">
                    <h4 class="text">
                        ${el.titleText}
                    </h4>
                </div>`;
            });

            return str;
        };

        this.template = `<section id="_template">
            <div class="dropdown-container">
                <button class="button-dropdown button-librarys">
                    <h3 class="text">
                        ${this.props.title}
                    </h3>
                    <div class="dropdown">
                        ${initCheckboxList(this.props.checkboxList)}
                    </div>
                </button>
            </div>
        </section>`;
    }

    initElements() {
        this.rootElement = componentUtils.htmlDOMConverter(this.template);

        this.elements = {
            inputList: this.rootElement.querySelectorAll('input'),
        };
    }

    initEventListeners() {
        this.elements.inputList.forEach(input => {
            input.addEventListener('change', (e) => {
                this.rootElement.dispatchEvent(new CustomEvent('handlerChangeDropdown', {
                    bubbles: true,
                }));
            });
        });
    }

    render() {
        if (!this.rootElement) return;

        componentUtils.render(this.parentElement, this.rootElement);
    }

    getCheckedBoxes() {
        let checked = [];

        this.elements.inputList.forEach(element => {
            element.checked && checked.push(element.getAttribute('name'));
        });

        checked = checked.toString().replace('-', ' ');

        return checked;
    }
}

export default DropDown;