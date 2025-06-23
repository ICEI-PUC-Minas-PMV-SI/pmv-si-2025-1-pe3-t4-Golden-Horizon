import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const usersData = [
  {
    email: "teste1@email.com",
    phoneCountry: 55,
    phone: "11999999999",
    firstName: "Fulaninho",
    lastName: "de Tal",
    password: "$2b$10$eAAjG9oshC8MgU7WiMQyDeav62xsXamDInxgcZ2BCBxgggAXwjLze", // hash de 12345678
    role: "user",
  },
  {
    email: "admin@email.com",
    phoneCountry: 55,
    phone: "11888888888",
    firstName: "Administrador",
    lastName: "da Silva",
    password: "$2b$10$eAAjG9oshC8MgU7WiMQyDeav62xsXamDInxgcZ2BCBxgggAXwjLze", // hash de 12345678
    role: "admin",
  },
];

const roomsData = [
  {
    beds: 2,
    breakfast: true,
    netflix: true,
    internet: true,
    suite: true,
    petFriendly: false,
    price: 200.0,
    promoPrice: 150.0,
    reserved: false,
    description: "Suíte com vista para o mar e varanda privativa.",
  },
  {
    beds: 1,
    breakfast: false,
    netflix: false,
    internet: true,
    suite: false,
    petFriendly: true,
    price: 120.0,
    promoPrice: null,
    reserved: false,
    description: "Quarto simples ideal para viajantes com pets.",
  },
  {
    beds: 3,
    breakfast: true,
    netflix: true,
    internet: true,
    suite: true,
    petFriendly: true,
    price: 300.0,
    promoPrice: 260.0,
    reserved: false,
    description: "Quarto familiar espaçoso com três camas e varanda.",
  },
  {
    beds: 1,
    breakfast: true,
    netflix: true,
    internet: false,
    suite: false,
    petFriendly: false,
    price: 90.0,
    promoPrice: null,
    reserved: true,
    description: "Quarto econômico com café da manhã incluso.",
  },
  {
    beds: 2,
    breakfast: false,
    netflix: true,
    internet: true,
    suite: false,
    petFriendly: false,
    price: 160.0,
    promoPrice: 140.0,
    reserved: false,
    description: "Quarto confortável com TV e acesso à internet.",
  },
  {
    beds: 1,
    breakfast: false,
    netflix: false,
    internet: true,
    suite: false,
    petFriendly: true,
    price: 100.0,
    promoPrice: 90.0,
    reserved: false,
    description: "Acomodação pet-friendly com entrada independente.",
  },
  {
    beds: 4,
    breakfast: true,
    netflix: true,
    internet: true,
    suite: true,
    petFriendly: false,
    price: 350.0,
    promoPrice: 300.0,
    reserved: false,
    description: "Cobertura luxuosa para grupos ou famílias grandes.",
  },
  {
    beds: 2,
    breakfast: true,
    netflix: false,
    internet: true,
    suite: false,
    petFriendly: true,
    price: 180.0,
    promoPrice: 160.0,
    reserved: true,
    description: "Aconchegante quarto duplo com acesso para pets.",
  },
];

async function seedData() {
  console.log("Iniciando seed...");

  for (const user of usersData) {
    const result = await prisma.user.create({
      data: {
        ...user,
        createdAt: new Date(),
      },
    });
    console.log(`Usuário criado: ${result.email}`);
  }

  for (const room of roomsData) {
    const result = await prisma.room.create({
      data: {
        ...room,
        createdAt: new Date(),
      },
    });
    console.log(`Quarto criado: ${result.description}`);
  }

  console.log("Seed finalizado.");
}

seedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Erro ao executar seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
