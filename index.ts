class SupportBanner extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }
}

const template = document.createElement("template");
template.innerHTML = `
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
        .support-ukraine {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: var(--su-height, 34px);
            background: var(--su-bg-color, #000000);
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
    </style>
    <div class="support-ukraine">
        <div class="support-ukraine__text">
            We stand with Ukriane.
            <a href="https://war.ukraine.ua/support-ukraine/" target="_blank" rel="noreferrer"
                >Here's how you can too.</a
            >
        </div>
    </div>
`;

customElements.define("support-ukraine", SupportBanner);
