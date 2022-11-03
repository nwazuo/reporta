import { createStyles, Header, Container, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width: "860px",
    marginTop: theme.spacing.lg,
    height: 60,
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export function HeaderResponsive() {
  const { classes, cx } = useStyles();

  return (
    <Container className={cx("c-container", classes.root)}>
      <Header className={classes.header}>
        <Title size="md">ACME Reporta</Title>
      </Header>
    </Container>
  );
}
