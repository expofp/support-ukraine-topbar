
# support-ukraine-topbar

## 📖 Usage
### CDN
Add this script tag to your website:

    <script src="https://unpkg.com/support-ukraine-topbar" defer></script>
    
Insert into the body:

    <support-ukraine-topbar></support-ukraine-topbar>
### React / NextJS
The easiest way to use support-ukraine-topbar is to install it from npm:

    yarn add support-ukraine-topbar

Then use it in your app:

    import SupportUkraineTopbar from "support-ukraine-topbar";
    
    export default () => (
      <>
        <SupportUkraineTopbar />
      </>
    );

## 🌈 Options
### Styling
You can change styles using these CSS variables:

    <style>
	    :root {
		    --su-height:  34px;
		    --su-bg-color:  #000000;
		    --su-text-color:  #ffffff;
		    --su-link-color:  #ffffff;
		    --su-link-hover-color:  #e1e1e1;
		    --su-font-family:  "Roboto",  sans-serif;
		    --su-text-size:  14px;
	    }
    </style>
