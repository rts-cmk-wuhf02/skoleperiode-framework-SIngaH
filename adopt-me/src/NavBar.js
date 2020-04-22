import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Colors.js";

//to get emoji click on the widows logo and the . ❤❤

const spin = keyframes`
to{
    transform:rotate(360deg);
}
`;
const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;

          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
        role="img"
        aria-label="logo"
      >
        💕
      </span>
    </header>
  );
};

export default NavBar;
