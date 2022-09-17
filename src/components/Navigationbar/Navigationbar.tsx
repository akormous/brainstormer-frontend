import { createStyles, Title, Header, Container, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: theme.colors.white[6],
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '12px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.white[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 800,
    '&:hover': {
      backgroundColor: theme.colors.white[4],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.white[4],
      color: theme.colors.white[1],
    },
  },
}));

interface NavigationbarProps {
  links: { link: string; label: string }[];
}

function LoginButton() {
  return (
    <Link to="/login"><Button color="blue.2">Log In</Button></Link>
  )
}

function SignupButton() {
  return (
    <Link to="/signup"><Button color="white.2">Sign Up</Button></Link>
  )
}

function Navigationbar({ links }: NavigationbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const linkItems = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      onClick={() => {
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Title order={5} color="white.0">BRAINSTORMER</Title>
        <Group className={classes.links}>
          {linkItems}
          <LoginButton />
          <SignupButton />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {linkItems}
              <a 
              href="login"
              className={classes.link}
              >
                Log In
              </a>
              <a 
              href="signup"
              className={classes.link}
              >
                Sign up
              </a>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

export default Navigationbar