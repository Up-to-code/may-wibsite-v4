/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Linkes from "./Linkes";
import Logo from "./Logo";
import Daiwor from "./Daiwor";

export default function Nav() {
  const [is, setis] = useState(false);
  return (
    <div className="h-14">
      <nav className="h-14 bg-white shadow shadow-gray-200 fixed w-full z-50 px-2">
        <div className="max-w-[800px] h-full m-auto flex items-center justify-between">
          <Logo />
          <Linkes isActive={is} isNotActive={setis} />
        </div>
      </nav>
      <Daiwor isActive={is} sNotActive={setis} />
    </div>
  );
}
