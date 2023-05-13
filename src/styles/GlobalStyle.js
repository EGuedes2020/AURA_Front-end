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
    --chartBar-spacing: 2rem;

    // border

    --border-card: 0.5rem;
    --border-btn: 0.75rem;
    --border-login-input: 0.75rem;
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

    --font-votes-sugestoes: 1rem;
    --font-votes-span-sugestoes: 0.75rem;

    --font-ListDispositivosHeader: 0.875rem;
    --font-ListDispositivos: 1rem;
    --font-ListDispositivos-piso: 0.75rem;

    --font-chart-euros: 1rem;
    --font-chart-mes: 0.75rem;

    // colors

    --color-black: #131313;
    --color-gray-1: #666666;
    --color-gray-2: #CCD6DA;
    --color-gray-3:#FCFCFC;
    --color-blue-1:#036B9F;
    --color-blue-2:#20495D;
    --color-blue-3:#365B6D;
    --color-blue-4:#023047;
    --color-green-1:#18CCAC;
    --color-green-2:#07362D;
    --color-danger: #AE0B34;

    --color-bg-login-input: var(--color-gray-3);
    --color-text-login-input: var(--color-gray-1);
    --color-span-login-pass: var(--color-gray-3);

    --color-text-button-primary: var(--color-green-2);

    --color-bg-button: var(--color-green-1);
    --color-bg-button-light: var(--color-gray-3);
    --color-links: var(--color-blue-1);

    --color-nav: var(--color-blue-2);
    --color-nav-selected: var(--color-blue-3);
    --color-nav-stroke: var(--color-gray-3);

    --color-bg-blue: var(--color-blue-4);

    --color-overline-card-defaut: var(--color-gray-3);
    --color-card-default: var(--color-blue-2);

    --color-overline-card-sugestoes: var(--color-gray-1);
    --color-p-card-sugestoes: var(--color-black);
    --color-span-card-sugestoes: var(--color-gray-1);
    --color-card-sugestoes: var(--color-gray-3);
    --color-votes-sugestoes: var(--color-blue-1);

    --color-bg-DispositivosList: var(--color-gray-3);
    --color-bg-DispositivosList-Header: var(--color-blue-2);
    --color-text-DispositivosList-Header: var(--color-gray-3);
    --color-text-DispositivosList: var(--color-blue-4);
    --color-text-DispositivosList-divisao: var(--color-black);
    --color-text-DispositivosList-piso: var(--color-gray-1);

    --color-chartBar: var(--color-green-1);
    --color-chart-euros: var(--color-gray-3);
    --color-chart-mes: var(--color-gray-3);
    
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
  }
`;
