import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StyledHeader } from "./styles";
import { StyledAnchorButton } from "../Button/styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Image
            src="/logo.png"
            alt="Pokemon"
            width={217.29442968 / 1.4}
            height={80 / 1.4}
          />
        </a>
      </Link>

      <Link href="/my-pokemons">
        <StyledAnchorButton>My Pokemons</StyledAnchorButton>
      </Link>
    </StyledHeader>
  );
};

export default Header;
