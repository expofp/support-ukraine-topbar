
# support-ukraine-topbar
Simple header banner with link to support Ukraine against Russian invasion.

## 📖 Usage
### CDN
Add this script tag to your website:

    <script src="https://unpkg.com/support-ukraine-topbar" type="module" defer></script>
    
Insert into the body:

    <support-ukraine-topbar></support-ukraine-topbar>
### NextJS
Add to Head of your _document.tsx:

    <script src="https://unpkg.com/support-ukraine-topbar" type="module" defer></script>

Then add after body tag: 

    <support-ukraine></support-ukraine>

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
