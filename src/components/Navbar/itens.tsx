import ForecastIcon from "@/ui/assets/icons/Forecast";
import HospitalIcon from "@/ui/assets/icons/Hospital";
import LogoutIcon from "@/ui/assets/icons/Logout ";
import ServiceIcon from "@/ui/assets/icons/Service";
import StockIcon from "@/ui/assets/icons/Stock";

export const itens = [
  {
    id: "1",
    icon: <ServiceIcon />,
    title: "Consultas",
    path: "/consultas",
  },
  {
    id: "2",
    icon: <HospitalIcon />,
    title: "Internamentos",
    path: "/consultas",
  },
  {
    id: "3",
    icon: <StockIcon />,
    title: "Estoque",
    path: "/consultas",
  },
  {
    id: "4",
    icon: <ForecastIcon />,
    title: "Previsão de estoque",
    path: "/consultas",
  },
];
