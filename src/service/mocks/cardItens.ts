interface CardItem {
  id: number;
  imageUrl: string;
  animalName: string;
  date: string;
  hour: string;
  description: string;
}

const cardItems: CardItem[] = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Pingo",
    date: new Date().toLocaleDateString("pt-BR"),
    hour: new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    description: "Pingo está fazendo exames periódicos.",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Luna",
    date: "20/11/2024",
    hour: "10:00",
    description: "Luna foi vacinada contra raiva e gripe canina.",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Max",
    date: "22/11/2024",
    hour: "15:30",
    description: "Max passou por uma consulta de rotina no veterinário.",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Bella",
    date: "25/11/2024",
    hour: "09:45",
    description: "Bella realizou exames de sangue para monitoramento de saúde.",
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Thor",
    date: "27/11/2024",
    hour: "13:00",
    description: "Thor está fazendo fisioterapia para reabilitação muscular.",
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Mel",
    date: "28/11/2024",
    hour: "16:15",
    description: "Mel foi tosada e tomou banho especial no pet shop.",
  },
  {
    id: 7,
    imageUrl: "https://via.placeholder.com/150",
    animalName: "Rocky",
    date: "30/11/2024",
    hour: "08:30",
    description: "Rocky passou por um procedimento odontológico.",
  },
];

export default cardItems;
