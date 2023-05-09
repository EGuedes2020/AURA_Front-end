import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {

    -webkit-tap-highlight-color: transparent;

    body{
      background-color: var(--color-bg-blue);
    }
    
    // spacing

    --main-spacing: 1rem;
    --main-bottom-spacing: 5rem;
    --header-padding: var(--main-spacing);
    --nav-top-border: 0.25rem;

    // border

    --border-card: 0.5rem;
    --border-btn: 0.75rem; 
    --border-total: 100%;

    // font

    --readex-pro: 'Readex Pro', sans-seri;
    --inter: 'Inter', sans-serif;

    --light: 300;
    --regular: 400;
    --medium: 500;
    --semi-bold: 600;
    --bold: 700;

    --btn-text-size: 0.875rem;
    --overlineDefault-text-size: 0.625rem;
    --overlineDefaultData-text-size: 1.25rem;
    
    --p-card-sugestoes-size: 0.875rem;
    --p-card-sugestoes-line-height: 1.5rem;
    --p-card-sugestoes-visible-lines: 6;

    // colors

    --color-text-black: #131313;
    --color-text-gray-dark: #666666;
    --color-text-gray-light: #CCD6DA;
    --color-text-button-primary: #07362D;
    --color-bg-button: #18CCAC;
    --color-bg-button-light: #FCFCFC;
    
    --color-links: #036B9F;
    --color-nav: #20495D;
    --color-nav-selected: #365B6D;
    --color-nav-stroke: #FCFCFC;
    --color-bg-blue: #023047;
    --color-text-card-defaut: #FCFCFC;
    --color-card-default: #20495D;
    --color-text-card-sugestoes: #666666;
    --color-card-sugestoes: #FCFCFC;
    --color-danger: #AE0B34;

    // Profile-header

    --icon-profile-header: 2rem;

    // Headings

    h5{
    font-family: var(--readex-pro);
    font-size: 1.5rem;
    font-weight: var(--bold);
    color: white;
    line-height: var(--icon-profile-header);
    }
    
    h6{
    font-family: var(--readex-pro);
    font-size: 1.25rem;
    font-weight: var(--bold);
    color: #131313;
    line-height: var(--icon-profile-header);
    }  
  }
`;
