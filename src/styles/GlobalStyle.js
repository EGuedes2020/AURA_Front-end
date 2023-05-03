import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    
    // spacing

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

    // colors

    --color-text-black: #131313;
    --color-text-gray-dark: #666666;
    --color-text-gray-light: #CCD6DA;
    --color-text-button-primary: #07362D;
    --color-bg-button: #18CCAC;
    
    --color-links: #036B9F;
    --color-nav: #20495D;
    --color-bg-blue: #023047;
    --color-card: #FCFCFC;
    --color-danger: #AE0B34;

    // Settings

    --c_settings_img_size: 4rem;
    --c_seetings_name_size: 1.2rem;
    --c_seetings_role_size: 1rem;
    
    --icon-settings-size: 1.5rem;
    --button-text-size: 1rem;

    --main-padding-settings: 1.4rem;
  
    
    // charts
    
    --chart-gap: 1rem;
    --chart-title: 1.2rem;
  }
`;
