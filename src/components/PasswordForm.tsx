
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!matricula || !senha || !confirmarSenha) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    if (senha !== confirmarSenha) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Sucesso",
      description: "Senha criada com sucesso!",
    });
    
    // Navigate to login page
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded shadow-sm max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-granado text-2xl font-medium uppercase mb-4">CRIAR SENHA</h2>
        <p className="text-gray-800">
          Digite sua matrícula e crie uma senha para acessar o sistema.
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

        <div>
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full p-4 border rounded focus:outline-none focus:ring-1 focus:ring-granado"
          />
        </div>

        <div className="flex justify-between gap-4 pt-2">
          <Button
            type="button"
            variant="outline"
            className="w-1/2 border-granado text-granado hover:bg-granado-light hover:text-granado"
            onClick={handleCancel}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="w-1/2 bg-granado text-white hover:bg-granado/90"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
