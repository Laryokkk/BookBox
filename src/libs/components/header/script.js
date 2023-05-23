import { componentUtils } from "../../utils/componentUtils.js";

class Header {
    constructor(parentElement = document.body) {
        this.parentElement = parentElement;

        this.elements = {};
    }

    init() {
        this.initTemplate();
        this.initElements();
        this.initEventListeners();
        this.render();
    }

    initTemplate() {
        this.template = `<section id="_template">
            <header>
                <div class="header-block block-logo">
                    <span class="title-logo">
                        <span class="text text-title text-accent">B</span>
                        <span class="text text-title text-accent-extend">B</span>
                    </span>
                </div>
                <div></div>
                <div class="header-block block-account">
                    <button class="button-heading button-sign button-extend hidden">
                        <h3 class="text text-accent">
                            Accedi
                        </h3>
                    </button>
                    <button class="button-heading button-exit button-extend hidden">
                        <h3 class="text text-accent">
                            Esci
                        </h3>
                    </button>
                </div>
            </header>
        </section>`;
    }

    initElements() {
        this.rootElement = componentUtils.htmlDOMConverter(this.template);

        this.elements = {
            buttonSign: this.rootElement.querySelector('button.button-sign'),
            buttonExit: this.rootElement.querySelector('button.button-exit'),
        };

        const isSignedIn = false;

        this.elements.buttonSign.classList.toggle('hidden', isSignedIn);
        this.elements.buttonExit.classList.toggle('hidden', !isSignedIn);
    }

    initEventListeners() {

    }

    render() {
        if (!this.rootElement) return;

        componentUtils.render(this.parentElement, this.rootElement);
    }
}

export default Header;