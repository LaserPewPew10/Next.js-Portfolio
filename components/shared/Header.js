import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios </a>
        </Link>
        <Link href="/blogs">
          <a>Blogs </a>
        </Link>
        <Link href="/cv">
          <a>CV </a>
        </Link>
      </div>
    );
  }
}

export default Header;
