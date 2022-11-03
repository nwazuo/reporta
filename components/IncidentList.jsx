import { Group, Avatar, Text, Accordion } from "@mantine/core";

function AccordionLabel({ title, image, summary, time }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{title}</Text>
        <Text size="xs" italic>
          {time}
        </Text>
        <Text size="sm" color="dimmed" weight={400}>
          {summary}
        </Text>
      </div>
    </Group>
  );
}

export default function IncidentList({ items }) {
  const incidents = items.map((item) => (
    <Accordion.Item value={item.title} key={item.id}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      chevronPosition="right"
      variant="contained"
      sx={{ background: "white" }}
    >
      {incidents}
    </Accordion>
  );
}
