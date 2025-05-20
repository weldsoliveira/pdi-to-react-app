
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Award, FileText } from "lucide-react";

// Mock data
const userData = {
  name: "João Silva",
  role: "Vendedor",
  department: "Vendas",
  joinDate: "10/01/2022",
};

const metrics = [
  {
    title: "Horas Trabalhadas",
    value: "160h",
    icon: Clock,
  },
  {
    title: "Dias de Férias",
    value: "30",
    icon: Calendar,
  },
  {
    title: "Metas Alcançadas",
    value: "8/10",
    icon: Award,
  },
  {
    title: "Documentos Pendentes",
    value: "3",
    icon: FileText,
  },
];

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-medium text-granado mb-4">Bem-vindo, {userData.name}</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Cargo:</p>
            <p className="font-medium">{userData.role}</p>
          </div>
          <div>
            <p className="text-gray-600">Departamento:</p>
            <p className="font-medium">{userData.department}</p>
          </div>
          <div>
            <p className="text-gray-600">Data de Admissão:</p>
            <p className="font-medium">{userData.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-granado" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-granado mb-4">Comunicados Recentes</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b pb-3">
              <h4 className="font-medium">Comunicado {i}</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(2023, 0, i).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
