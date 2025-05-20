
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!matricula || !senha) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Mock login validation - in a real app, this would call an API
    if (matricula === "admin" && senha === "admin") {
      toast({
        title: "Sucesso",
        description: "Login realizado com sucesso!",
      });
      
      // Navigate to dashboard page
      navigate("/dashboard");
    } else {
      toast({
        title: "Erro",
        description: "Matrícula ou senha inválidos.",
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = () => {
    navigate("/criar-senha");
  };

  return (
    <div className="bg-white p-6 rounded shadow-sm max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-granado text-2xl font-medium uppercase mb-4">LOGIN</h2>
        <p className="text-gray-800">
          Digite sua matrícula e senha para acessar o sistema.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            className="w-full p-4 border rounded focus:outline-none focus:ring-1 focus:ring-granado"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-4 border rounded focus:outline-none focus:ring-1 focus:ring-granado"
          />
        </div>

        <div className="text-right">
          <button 
            type="button" 
            onClick={handleForgotPassword}
            className="text-granado hover:underline text-sm"
          >
            Esqueci minha senha
          </button>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            type="submit"
            className="w-2/3 bg-granado text-white hover:bg-granado/90"
          >
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
