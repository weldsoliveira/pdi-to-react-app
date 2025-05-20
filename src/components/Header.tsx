
import React, { useState } from "react";
import { Menu, Share, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.location.pathname === "/dashboard"
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="bg-granado w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="w-6 h-6 text-white mr-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {isAuthenticated ? (
              <>
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem onClick={() => navigate("/")}>
                  Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/criar-senha")}>
                  Criar Senha
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="text-white text-lg font-medium uppercase">GRANADO</div>
        <div className="text-white text-sm ml-1 mt-1">DESDE 1870</div>
      </div>
      <div className="flex items-center">
        <h1 className="text-white text-lg font-normal">{title}</h1>
      </div>
      <div className="flex">
        {isAuthenticated ? (
          <User className="w-6 h-6 text-white" />
        ) : (
          <Share className="w-6 h-6 text-white" />
        )}
      </div>
    </header>
  );
};

export default Header;
