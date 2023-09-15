// ** React Imports
import { Fragment } from "react";

// ** Next Import
import Image from "next/image";

// ** Assets
import LogoImg from "src/assets/images/logos/logo.png";

function Logo() {
  return (
    <Fragment>
      <Image src={LogoImg} alt="logo" width={24} height={24} />

      <span className="ml-4 font-bold">China Books</span>
    </Fragment>
  );
}

export default Logo;
