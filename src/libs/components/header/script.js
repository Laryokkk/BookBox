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
                    <a href="/"> //todo
                        <span class="title-logo">
                            <span class="text text-title text-accent">B</span>
                            <span class="text text-title text-accent-extend">B</span>
                        </span>
                    </a>
                </div>
                <div class="menu"></div>
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
            header: this.rootElement.querySelector('header'),
            menu: this.rootElement.querySelector('.menu'),
            account: this.rootElement.querySelector('.block-account'),
            buttonSign: this.rootElement.querySelector('button.button-sign'),
            buttonExit: this.rootElement.querySelector('button.button-exit'),
        };

        const isSignedIn = false;

        if (window.location.href.toString().includes('sign')) {
            this.elements.menu.classList.toggle('hidden', true);
            this.elements.account.classList.toggle('hidden', true);
            this.elements.header.style = "justify-content: center;";
        } else {
            this.elements.buttonSign.classList.toggle('hidden', isSignedIn);
            this.elements.buttonExit.classList.toggle('hidden', !isSignedIn);
        }
    }

    initEventListeners() {
        this.elements.buttonSign.addEventListener('click', () => {
            window.location.href = './sign_in/index.html';
        })
    }

    render() {
        if (!this.rootElement) return;

        componentUtils.render(this.parentElement, this.rootElement);
    }
}

export default Header;