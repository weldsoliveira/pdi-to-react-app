
import React from "react";
import { Menu, Share } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-granado w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Menu className="w-6 h-6 text-white mr-4" />
        <div className="text-white text-lg font-medium uppercase">GRANADO</div>
        <div className="text-white text-sm ml-1 mt-1">DESDE 1870</div>
      </div>
      <div className="flex items-center">
        <h1 className="text-white text-lg font-normal">{title}</h1>
      </div>
      <div>
        <Share className="w-6 h-6 text-white" />
      </div>
    </header>
  );
};

export default Header;
