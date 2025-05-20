
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Calendar, Mail, Phone, MapPin, Badge } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock user data
const userData = {
  name: "João Silva",
  role: "Vendedor",
  department: "Vendas",
  joinDate: "10/01/2022",
  email: "joao.silva@granado.com.br",
  phone: "(21) 98765-4321",
  address: "Rua das Flores, 123 - Rio de Janeiro, RJ",
  employeeId: "12345",
};

const ProfileContent = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // In a real app, this would call an API
    toast({
      title: "Perfil atualizado",
      description: "Seus dados foram atualizados com sucesso.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-medium text-granado">Dados Pessoais</CardTitle>
          </div>
          {!isEditing && (
            <Button
              variant="outline"
              className="border-granado text-granado hover:bg-granado-light"
              onClick={() => setIsEditing(true)}
            >
              Editar Perfil
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-granado-light flex items-center justify-center mb-4">
                <User className="w-16 h-16 text-granado" />
              </div>
              <h3 className="text-lg font-medium">{userData.name}</h3>
              <p className="text-gray-600">{userData.role}</p>
              <p className="text-gray-600 text-sm">{userData.department}</p>
            </div>

            <div className="w-full md:w-2/3">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="focus:ring-granado focus:border-granado"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="department">Departamento</Label>
                    <div className="flex items-center">
                      <Badge className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="department"
                        value={userData.department}
                        disabled
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="focus:ring-granado focus:border-granado"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="focus:ring-granado focus:border-granado"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="joinDate">Data de Admissão</Label>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="joinDate"
                        value={userData.joinDate}
                        disabled
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="employeeId">Matrícula</Label>
                    <div className="flex items-center">
                      <Badge className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="employeeId"
                        value={userData.employeeId}
                        disabled
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-granado" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="focus:ring-granado focus:border-granado"
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCancel}
                      className="border-granado text-granado hover:bg-granado-light"
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="button"
                      onClick={handleSave}
                      className="bg-granado text-white hover:bg-granado/90"
                    >
                      Salvar
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium text-granado">Histórico Profissional</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Vendedor Sênior",
                department: "Vendas",
                period: "Jan/2023 - Atual",
              },
              {
                title: "Vendedor Pleno",
                department: "Vendas",
                period: "Jan/2022 - Dez/2022",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.department}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{item.period}</p>
                </div>
                {index < 1 && <Separator className="my-3" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileContent;
