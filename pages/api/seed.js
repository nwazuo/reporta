import { faker } from "@faker-js/faker";
import { getXataClient } from "../../utils/xata";

const sampleImageURLs = [
  "https://res.cloudinary.com/udemic/image/upload/v1667477632/hackmamba-reporta/cisco-warning-some-of-our-servers-may-burn-out_abo3xd.jpg",
  "https://res.cloudinary.com/udemic/image/upload/v1667814779/hackmamba-reporta/download_qkjri7.jpg",
  "https://res.cloudinary.com/udemic/image/upload/v1667814842/hackmamba-reporta/download_nbdv9w.jpg",
  "https://res.cloudinary.com/udemic/image/upload/v1667814849/hackmamba-reporta/download_u2czed.png",
  "https://res.cloudinary.com/udemic/image/upload/v1667814865/hackmamba-reporta/images_vywe5h.png",
  "https://res.cloudinary.com/udemic/image/upload/v1667814907/hackmamba-reporta/download_dqwdpu.jpg",
  "https://res.cloudinary.com/udemic/image/upload/v1667814915/hackmamba-reporta/images_lxjixh.jpg",
  "https://res.cloudinary.com/udemic/image/upload/v1667814923/hackmamba-reporta/images_nxsjio.jpg",
];

// seed xata db with random data for this project
const generator = {
  getTitle: () => faker.random.words(8),
  getType: () =>
    faker.helpers.arrayElement(["bug", "downtime", "suggestion", "others"]),
  getImages: () =>
    JSON.stringify(
      faker.helpers.arrayElements(
        sampleImageURLs,
        Math.floor(Math.random() * 6) + 1
      )
    ), //generate JSON array of images between 1 - 6 images
  getPublic: () => faker.helpers.arrayElement([true, false]),
  getSummary: () => faker.random.words(Math.floor(Math.random() * 13) + 8), //generate random sentence of 8-13 words
  getContent: () => faker.lorem.sentences(),
};

const generateSeedData = (count = 5) => {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      title: generator.getTitle(),
      type: generator.getType(),
      images: generator.getImages(),
      public: generator.getPublic(),
      summary: generator.getSummary(),
      content: generator.getContent(),
    });
  }
  return records;
};

const xata = getXataClient();

export default async function handler(req, res) {
  const data = await xata.db.incidents.create(generateSeedData());
  res.status(200).json(data);
}
