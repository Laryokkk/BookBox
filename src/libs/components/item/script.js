import { componentUtils } from "../../utils/componentUtils.js";
import { cookieUtils } from "../../utils/cookieUtils.js";


class Item {
    constructor(parentElement, props) {
        this.parentElement = parentElement;
        this.props = { ...props };

        this.elements = {};
        this.isOpen = true;
    }

    init() {
        this.initTemplate();
        this.initElements();
        this.initEventListeners();
        this.render();
    }

    initTemplate() {
        const { imgPath, title, author, published, publisher, isbn, available, library } = this.props;

        this.template = `<section id="_template">
            <div class="item-container">
                <div class="item-front">
                    <img src="${imgPath}" alt="image of a book">
                </div>
                <div class="item-back">
                    <div class="heading">
                        <h3 class="text">
                            ${title}
                        </h3>
                    </div>
                    <div class="content">
                        <h5 class="text">
                            Autore: <span class="text text-accent-extend">${author}<span/>
                        </h5>
                        <h5 class="text">
                            Publicato: <span class="text text-accent-extend">${published}<span/>
                        </h5>
                        <h5 class="text">
                            Casa editrice: <span class="text text-accent-extend">${publisher}<span/>
                        </h5>
                        <h5 class="text">
                            ISBN: <span class="text text-accent-extend">${isbn}<span/>
                        </h5>
                        <h5 class="text">
                            Biblioteca: <span class="text text-accent-extend">${library}<span/>
                        </h5>
                    </div>
                    <div class="footer">
                        ${available ? `<h5 class="text">Disponibile dal: <span class="text text-accent">${available}<span/></h5>` : ''}
                        <button class="button-item">
                            <h3 class="text">
                                Prenota
                            </h3>
                        </button>
                    </div>
                </div>
            </div>
        </section>`;
    }

    initElements() {
        this.rootElement = componentUtils.htmlDOMConverter(this.template);

        this.elements = {
            buttonItem: this.rootElement.querySelector('button.button-item'),
        };
    }

    initEventListeners() {
        this.elements.buttonItem.addEventListener('click', (e) => {
            if (!cookieUtils.isSigned()) {
                e.preventDefault();

                window.location.href = './sign_in/index.html'
            }

            
            // бронирование 
        });
    }

    render() {
        if (!this.rootElement) return;

        componentUtils.render(this.parentElement, this.rootElement);
    }

    toggle(force) {
        this.isOpen = !force;

        this.rootElement.classList.toggle('hidden', force);
    }
}

export default Item;