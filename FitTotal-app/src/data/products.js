const products = [
    // Proteínas
    {
      id: 1,
      category: "Proteínas",
      description: "Suplemento proteico para ganho de massa muscular.",
      price: 29.99,
      title: "PowerGain Mass Extreme",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 2,
      category: "Proteínas",
      description: "Fórmula avançada de whey protein sabor chocolate.",
      price: 34.99,
      title: "ChocoWhey Supreme",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 3,
      category: "Proteínas",
      description: "Blend de proteínas para recuperação pós-treino.",
      price: 39.99,
      title: "RecoverPro Blend",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 4,
      category: "Proteínas",
      description: "Proteína vegetal orgânica para dietas veganas.",
      price: 29.99,
      title: "GreenVegan Plant Protein",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 5,
      category: "Proteínas",
      description: "Fórmula de caseína para liberação gradual de aminoácidos.",
      price: 34.99,
      title: "SlowRelease Casein",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 6,
      category: "Proteínas",
      description: "Suplemento proteico com BCAAs e Glutamina.",
      price: 39.99,
      title: "MuscleRecovery Blend",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 7,
      category: "Proteínas",
      description: "Fórmula de proteína isolada para atletas de alto rendimento.",
      price: 44.99,
      title: "PureIsolate Performance",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 8,
      category: "Proteínas",
      description: "Proteína em pó com sabores variados para todos os gostos.",
      price: 29.99,
      title: "Deluxe Flavor Protein",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 9,
      category: "Proteínas",
      description: "Blend de proteínas com creatina para potencializar os ganhos.",
      price: 34.99,
      title: "GainMax PowerBlend",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 10,
      category: "Proteínas",
      description: "Proteína de ovo em pó para uma fonte alternativa de aminoácidos.",
      price: 39.99,
      title: "Eggcellent Protein Source",
      image: "/public/assets/proteina.jpg",
      listImages: [
        "/public/assets/c&a.jpg",
        "/public/assets/proteina.jpg",
        "/public/assets/proteina.jpg",
        "/public/assets/termogenico.webp",
      ],
    },
  
    // Termogênicos
    {
      id: 11,
      category: "Termogênicos",
      description: "Suplemento termogênico para acelerar o metabolismo e queimar gordura.",
      price: 49.99,
      title: "ThermoBurn XTreme",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 15,
      category: "Termogênicos",
      description: "Suplemento termogênico com extrato de pimenta para um boost metabólico.",
      price: 54.99,
      title: "HotShot Metabolic Igniter",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 16,
      category: "Termogênicos",
      description: "Fórmula de termogênico líquido para rápida absorção.",
      price: 59.99,
      title: "LiquidFire Rapid Burn",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 17,
      category: "Termogênicos",
      description: "Suplemento termogênico com extrato de laranja amarga.",
      price: 64.99,
      title: "BitterOrange Boost",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 18,
      category: "Termogênicos",
      description: "Fórmula termogênica com extrato de chá preto para energia duradoura.",
      price: 49.99,
      title: "BlackTea PowerFuel",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 19,
      category: "Termogênicos",
      description: "Suplemento termogênico com extrato de guaraná para foco e energia.",
      price: 54.99,
      title: "Guarana Energy Booster",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 20,
      category: "Termogênicos",
      description: "Fórmula termogênica com extrato de pimenta caiena.",
      price: 59.99,
      title: "CayenneBurn Ignition",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
  
    // Roupas e Acessórios
    {
      id: 21,
      category: "Roupas e acessorios",
      description: "Camiseta esportiva de alta qualidade para treinos intensos.",
      price: 29.99,
      title: "Elite Performance Tee",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 22,
      category: "Roupas e acessorios",
      description: "Leggings esportivas confortáveis para qualquer atividade física.",
      price: 34.99,
      title: "FlexFit Sports Leggings",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 23,
      category: "Roupas e acessorios",
      description: "Tênis esportivo com amortecimento premium para corridas.",
      price: 99.99,
      title: "SpeedRunner Pro Shoes",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 24,
      category: "Roupas e acessorios",
      description: "Bolsa esportiva durável e espaçosa para transportar seus equipamentos.",
      price: 49.99,
      title: "SportGear Duffel Bag",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 25,
      category: "Roupas e acessorios",
      description: "Meias esportivas de alta qualidade para conforto durante o exercício.",
      price: 9.99,
      title: "Ultimate Comfort Socks",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 25,
      category: "Roupas e acessorios",
      description: "Boné esportivo ajustável com proteção UV.",
      price: 19.99,
      title: "SunGuard Sport Cap",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 27,
      category: "Roupas e acessorios",
      description: "Luvas de treino resistentes para levantamento de peso.",
      price: 14.99,
      title: "PowerLift Training Gloves",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 28,
      category: "Roupas e acessorios",
      description: "Camisa de compressão para melhor desempenho atlético.",
      price: 24.99,
      title: "CompressionFit Performance Shirt",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    {
      id: 29,
      category: "Roupas e acessorios",
      description: "Faixa de cabelo esportiva para manter o cabelo no lugar durante os exercícios.",
      price: 4.99,
      title: "StayPut Headband",
      image: "/public/assets/termogenico.webp",
      listImages: [
        "/public/assets/proteina.jpg",
        "/public/assets/c&a.jpg",
        "/public/assets/termogenico.webp",
        "/public/assets/proteina.jpg",
      ],
    },
    
  ];
  
  export default products;
  