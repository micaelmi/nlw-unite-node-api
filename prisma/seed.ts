import { prisma } from "../src/lib/prisma";
async function seed() {
  await prisma.event.create({
    data: {
      id: "cf79447c-2a8d-45d3-864f-66abbd8de0e8",
      title: "Rocketseat Live Webinar",
      details:
        "Join us for a live webinar about the latest technologies and trends in the industry.",
      maximumAttendees: 100,
      slug: "rocketseat-live-webinar",
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
