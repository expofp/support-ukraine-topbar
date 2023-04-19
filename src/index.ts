class SupportUkraineTopbar extends HTMLElement {
    private _flag: boolean;
    private _shadowRoot: ShadowRoot;

    constructor() {
        super();
        this._flag = true;
        this._shadowRoot = this.attachShadow({ mode: "open" });

        const styles = `
            @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
            .is-hidden {
                display: none;
            }
            .support-ukraine {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: var(--su-height, 34px);
                background: var(--su-bg-color, #000000);
            }
            .support-ukraine__flag {
                margin-right: 8px;
            }
            .support-ukraine__flag > svg {
                display: block;
                width: var(--su-flag-width, 24px);
                height: var(--su-flag-height, 16px);
            }
            .support-ukraine__text {
                color: var(--su-text-color, #ffffff);
                font-family: var(--su-font-family, "Roboto", sans-serif);
                font-size: var(--su-text-size, 14px);
                font-weight: normal;
            }
            .support-ukraine__text a {
                margin-left: 4px;
                border-bottom: 1px solid var(--su-link-color, #ffffff);
                color: var(--su-link-color, #ffffff);
                text-decoration: none;
            }
            .support-ukraine__text a:hover {
                border-color: var(--su-link-hover-color, #e1e1e1);
                color: var(--su-link-hover-color, #e1e1e1);
            }
        `;

        const template = `
            <div class="support-ukraine">
                <div class="support-ukraine__flag">
                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11H30V18C30 20.2091 28.2091 22 26 22H4C1.79086 22 0 20.2091 0 18V11Z" fill="#FFD500"/>
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H26C28.2091 0 30 1.79086 30 4V11H0V4Z" fill="#087FFF"/>
                    </svg>
                </div>
                <div class="support-ukraine__text">
                    We stand with Ukraine.
                    <a href="https://war.ukraine.ua/support-ukraine/" target="_blank" rel="noreferrer">
                    Here's how you can too.
                    </a>
                </div>
            </div>
        `;

        const styleEl = document.createElement("style");
        styleEl.textContent = styles;
        this._shadowRoot.appendChild(styleEl);
        this._shadowRoot.innerHTML += template;
    }

    static get observedAttributes() {
        return ["flag"];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === "flag") {
            this._flag = newValue !== "false";
            this.render();
        }
    }

    render() {
        const flagEl = this._shadowRoot.querySelector(".support-ukraine__flag");
        flagEl && flagEl.classList.toggle("is-hidden", !this._flag);
    }
}

customElements.define("support-ukraine-topbar", SupportUkraineTopbar);

export default SupportUkraineTopbar;
