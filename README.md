# support-ukraine-topbar

The support-ukraine-topbar is a web component that enables website owners to display a small banner in support of Ukraine in its fight against Russian aggression. Component is easy to install and can be customized to fit the website's design.

## 📖 Usage

### HTML way

Add to body tag of your website:

    <support-ukraine-topbar></support-ukraine-topbar>
    <script src="https://unpkg.com/support-ukraine-topbar" type="module" defer></script>

### ReactJS / Vue

Add to head of your index.html file:

    <script src="https://unpkg.com/support-ukraine-topbar" type="module" defer></script>

Use element anywhere in your app:

    <support-ukraine-topbar></support-ukraine-topbar>

### NextJS

Add to Head of your \_document.tsx:

    <script src="https://unpkg.com/support-ukraine-topbar" type="module" defer></script>

Use element anywhere in your Next app:

    <support-ukraine-topbar></support-ukraine-topbar>

### NuxtJS

Modify head property of your nuxt.config.js:

    export default {
        head: {
          script: [
          {
            src: 'https://unpkg.com/support-ukraine-topbar',
            type: "module",
            defer: true,
          },
        ],
      ]
    }

Use element anywhere in template of your Nuxt app:

    <support-ukraine-topbar></support-ukraine-topbar>

#### _Typescript_

_If you are using Typescript then don't forget to declare the type of the "support-ukraine-topbar" web component:_

    declare global {
        namespace JSX {
          interface IntrinsicElements {
          "support-ukraine-topbar": React.HTMLAttributes<HTMLElement>;
        }
      }
    }

## 🌈 Options

### Attributes

| Attribute| Default | Description |
|--|--| -- |
| flag | true | Show flag of Ukraine |

### Styling

You can change styles using these CSS variables:

    <style>
        :root {
          --su-height: 34px;
          --su-bg-color: #000000;
          --su-text-color: #ffffff;
          --su-link-color: #ffffff;
          --su-link-hover-color: #e1e1e1;
          --su-font-family: "Roboto", sans-serif;
          --su-text-size: 14px;
          --su-flag-width: 24px;
          --su-flag-height: 16px;
        }
    </style>
