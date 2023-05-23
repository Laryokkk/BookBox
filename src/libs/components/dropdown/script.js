import { componentUtils } from "../../utils/componentUtils.js";

class DropDown {
    constructor(parentElement, props) {
        this.parentElement = parentElement;
        this.rootElement = null;
        this.props = {
            title: props.title,
            checkboxList: props.checkboxList,
        };
    }

    init() {
        this.initTemplate();
        this.initElements();
        this.render();
    }

    initTemplate() {
        const initCheckboxList = (list) => {
            let str = ``;

            list.forEach(el => {
                str += `<div class="wrapper-checkbox">
                    <input type="checkbox" class="checkbox" name="${el.name}-${el.title}" id="${el.name}-${el.title}">
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
    }

    render() {
        if (!this.rootElement) return;

        componentUtils.render(this.parentElement, this.rootElement);
    }
}

export default DropDown;