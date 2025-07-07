import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import NavItems from './NavItems';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center px-6 py-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Converso Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Converso</span>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems/>
      </div>
    </nav>
  );
};

export default Navbar;
