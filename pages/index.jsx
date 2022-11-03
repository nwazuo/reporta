import Head from "next/head";
import { HeaderResponsive } from "../components/Header";
import {
  Button,
  Container,
  Pagination,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";
import IncidentList from "../components/IncidentList";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const incidentsData = [
  {
    id: 0,
    title: "Fire outbreak at server station",
    type: "bug",
    image:
      "https://res.cloudinary.com/udemic/image/upload/v1667477632/hackmamba-reporta/cisco-warning-some-of-our-servers-may-burn-out_abo3xd.jpg",
    private: false,
    time: timeAgo.format(new Date("2022-03-11")),
    summary:
      "Someone needs to consistently take out the trash else we will be living and working from a dump",
    content: `
    I'm here to report an incident of startling nonchalance by the self - proclaimed mother of America. I was buying some groceries the other day when this lady, with her toddler in tow, came up to me with her little bag of groceries and offered to show me where the bread was. One. I don't eat bread.And. The lady couldn't understand how anyone could possibly have a job that didn't involve bread.`,
  },
  {
    id: 1,
    title: "Water flooding at backyard",
    type: "bug",
    image:
      "https://res.cloudinary.com/udemic/image/upload/v1667477632/hackmamba-reporta/cisco-warning-some-of-our-servers-may-burn-out_abo3xd.jpg",
    private: false,
    time: timeAgo.format(new Date("2022-03-11")),
    summary:
      "Someone needs to consistently take out the trash else we will be living and working from a dump",
    content: `
    I'm here to report an incident of startling nonchalance by the self - proclaimed mother of America. I was buying some groceries the other day when this lady, with her toddler in tow, came up to me with her little bag of groceries and offered to show me where the bread was. One. I don't eat bread.And. The lady couldn't understand how anyone could possibly have a job that didn't involve bread.`,
  },
  {
    id: 2,
    title: "A lot of insider gossip in your machines",
    type: "bug",
    image:
      "https://res.cloudinary.com/udemic/image/upload/v1667477632/hackmamba-reporta/cisco-warning-some-of-our-servers-may-burn-out_abo3xd.jpg",
    private: false,
    time: timeAgo.format(new Date("2022-03-11")),
    summary:
      "Someone needs to consistently take out the trash else we will be living and working from a dump",
    content: `
    I'm here to report an incident of startling nonchalance by the self - proclaimed mother of America. I was buying some groceries the other day when this lady, with her toddler in tow, came up to me with her little bag of groceries and offered to show me where the bread was. One. I don't eat bread.And. The lady couldn't understand how anyone could possibly have a job that didn't involve bread.`,
  },
];

const Search = () => {
  return (
    <Paper shadow="xs" p="md">
      <Title size="h3">Search</Title>
      <p>Insert a keyword to see incidents that may be related to it</p>
      <TextInput placeholder="Enter search term" />
    </Paper>
  );
};

const Incidents = () => {
  return (
    <Container mt={48} px={0}>
      <Search />
      <Container mt={32} px={0}>
        <IncidentList items={incidentsData} />
        <Pagination total={5} mt={16} mx="auto" position="center" />
      </Container>
    </Container>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACME Reporta</title>
        <meta name="description" content="Report an incident with ACME app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderResponsive />
      <Container className="c-container" mt={48} mb={64}>
        <Paper
          sx={(theme) => ({
            background: theme.fn.gradient(),
            color: "white",
            padding: theme.spacing.lg,
          })}
        >
          <Title>Report an incident with any ACME Corp service</Title>
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            Experienced downtimes, unusual errors, etc. with any of our
            platforms/services? Please reach out to us and we'll be glad to help
            with a fix.
          </p>
          <Button variant="white" mt={16}>
            Report
          </Button>
        </Paper>
        <Incidents />
      </Container>
    </div>
  );
}
