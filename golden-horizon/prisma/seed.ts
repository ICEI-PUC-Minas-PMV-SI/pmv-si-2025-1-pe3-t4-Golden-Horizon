import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const usersData = [
  {
    email: "Nigel_Hyatt@gmail.com",
    phoneCountry: 572,
    phone: "99996390",
    firstName: "Damien",
    lastName: "Wilderman",
    password: "$2a$10$Ph9IEFRS1iJPov1h67F8reJ/inM2y3YM6r0t0n515m.PmGt4LU8I.",
  },
  {
    email: "Rose_Price-Buckridge81@yahoo.com",
    phoneCountry: 412,
    phone: "0000397",
    firstName: "Mariah",
    lastName: "Friesen",
    password: "$2a$10$K/9V/kAwfIbxU5OgrYmkL..WlNo3yCEJzRjpI1UStMhQDogmEYIJ.",
  },
  {
    email: "Virgil50@hotmail.com",
    phoneCountry: 533,
    phone: "0000000",
    firstName: "Daren",
    lastName: "Huels",
    password: "$2a$10$QrEhQlm0YdzYMwrxDnRq0.hWYQNWV2bla1rFu3Dr29QmhPVG7guaS",
  },
  {
    email: "Jarred_Kovacek66@yahoo.com",
    phoneCountry: 288,
    phone: "07788990",
    firstName: "Geraldine",
    lastName: "Rohan",
    password: "$2a$10$m9YfcQ9ih4Omk0hiTFi0VO3R.vnAQnwSJh0U43T/2jeXVePg9eu7a",
  },
  {
    email: "Baylee.Bosco@gmail.com",
    phoneCountry: 591,
    phone: "88885555",
    firstName: "Kiley",
    lastName: "O'Hara",
    password: "$2a$10$ULBL5hpvrCuX7IF81UqTq.QE47TDnHlHuHfu9nrv4CctN2P8UtmGO",
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
