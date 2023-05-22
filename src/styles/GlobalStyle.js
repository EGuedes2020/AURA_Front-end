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
    --btn-bottom-fixed: 4.8rem;

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

    --font-SearchBar: 1rem;

    --font-trabalhadorLink: 1rem;
    
    --font-btn-modal: 0.875rem;
    --font-checkbox-text: 1rem;

    // colors

    --transparent: rgba(255, 255, 255, 0);
    --color-modal-background: rgba(19, 19, 19, 0.6);

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

    --color-bg-modal: var(--color-gray-3);

    --color-veredito-checkbox: rgba(102, 102, 102, 0.2);
    --color-veredito-checked-checkbox: var(--color-blue-4);
    --color-text-veredito-checked-checkbox: var(--color-gray-3);
    --color-text-veredito-checkbox: var(--color-black);

    --color-bg-btn-veredito: var(--transparent);
    --color-text-btn-veredito: var(--color-gray-1);
    --color-text-btn-veredito-submit: var(--color-blue-1);

    --color-bg-forms-input: var(--color-gray-3);
    --color-text-forms-input: var(--color-gray-1);
    --color-span-forms-pass: var(--color-gray-3);

    --color-text-button-primary: var(--color-green-2);

    --color-bg-button: var(--color-green-1);
    --color-bg-button-light: var(--color-gray-3);
    --color-links: var(--color-blue-1);

    --color-nav: var(--color-blue-2);
    --color-nav-selected: var(--color-blue-3);
    --color-nav-stroke: var(--color-gray-3);

    --color-bg-blue: var(--color-blue-4);

    --color-card-default: var(--color-blue-2);
    --color-overline-card-defaut: var(--color-gray-3);

    --color-overline-card-sugestoes: var(--color-gray-1);
    --color-overline-card-sugestao: var(--color-gray-2);
    --color-p-card-sugestoes: var(--color-black);
    --color-p-card-sugestao: var(--color-gray-3);
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

    --color-bg-SearchBar: var(--color-gray-3);
    --color-text-SearchBar: var(--color-gray-1);
    
    --color-bg-trabalhadorLink: var(--color-gray-3);
    --color-text-trabalhadorLink: var(--color-black);

    // Profile-header

    --icon-profile-header: 2rem;
    
  }

  body{
    overflow: ${(props) => (props.scroll ? "auto" : "hidden")};
  }
`;
