import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #d12f2e;
    --primary-color-hover: #b51f1e;
}

@font-face {
  font-family: "OpenSans";
  src: url("/fonts/OpenSans-Bold.ttf") format("truetype");
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "OpenSans";
  src: url("/fonts/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "OpenSans";
  src: url("/fonts/OpenSans-Medium.ttf") format("truetype");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "OpenSans";
  src: url("/fonts/OpenSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "OpenSans";
  src: url("/fonts/OpenSans-Light.ttf") format("truetype");
  font-weight: 300;
  font-display: swap;
}

h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
i,
a,
label,
li {
  text-rendering: optimizeLegibility !important;
}

body {
  font-family: OpenSans !important;
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--primary-color);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color-hover);
}

.error-message {
    font-size: 13px;
    color: #db3232 !important;
    margin-top: 5px;
    font-weight: bold;
}
`;
