import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const usersData = [
  {
    id: 1,
    email: "Nigel_Hyatt@gmail.com",
    phoneCountry: 572,
    phone: "99996390",
    firstName: "Damien",
    lastName: "Wilderman",
    password: "$2a$10$Ph9IEFRS1iJPov1h67F8reJ/inM2y3YM6r0t0n515m.PmGt4LU8I.",
  },
  {
    id: 2,
    email: "Rose_Price-Buckridge81@yahoo.com",
    phoneCountry: 412,
    phone: "0000397",
    firstName: "Mariah",
    lastName: "Friesen",
    password: "$2a$10$K/9V/kAwfIbxU5OgrYmkL..WlNo3yCEJzRjpI1UStMhQDogmEYIJ.",
  },
  {
    id: 3,
    email: "Virgil50@hotmail.com",
    phoneCountry: 533,
    phone: "0000000",
    firstName: "Daren",
    lastName: "Huels",
    password: "$2a$10$QrEhQlm0YdzYMwrxDnRq0.hWYQNWV2bla1rFu3Dr29QmhPVG7guaS",
  },
  {
    id: 4,
    email: "Jarred_Kovacek66@yahoo.com",
    phoneCountry: 288,
    phone: "07788990",
    firstName: "Geraldine",
    lastName: "Rohan",
    password: "$2a$10$m9YfcQ9ih4Omk0hiTFi0VO3R.vnAQnwSJh0U43T/2jeXVePg9eu7a",
  },
  {
    id: 5,
    email: "Baylee.Bosco@gmail.com",
    phoneCountry: 591,
    phone: "88885555",
    firstName: "Kiley",
    lastName: "O'Hara",
    password: "$2a$10$ULBL5hpvrCuX7IF81UqTq.QE47TDnHlHuHfu9nrv4CctN2P8UtmGO",
  },
];

async function seedData() {
  console.log("Seeding...");

  for (const user of usersData) {
    const result = await prisma.user.create({
      data: {
        ...user,
        phoneCountry: 55,
        createdAt: new Date(),
      },
    });
    console.log(`User created: ${result.email}`);
  }

  console.log("Seeding completed.");
}

seedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
