import { Box, Button, createStyles, Title, Text } from "@mantine/core";
import { Paper } from "@mantine/core";
import BGVideo from '../../images/video.mp4';
import { Link } from 'react-router-dom';
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '90vh',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    backgrooundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  videoStyle: {
    position: 'absolute',
    width: '100%',
    left: '50%',
    top: '50%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    overflow: 'hidden'
  },
  intro: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.white[0],
    background: 'rgba(0,0,0,0.15)'
  },
  tagline: {
    fontSize: 80,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 60
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 40
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 30
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 20
    },
  },
  getstarted: {
    backgroundColor: theme.colors.blue[2],
    color: theme.colors.white[0],
    marginTop: '12px',
    marginBottom: '12px'
  },

}));

function Hero() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.root}>
      <video autoPlay loop muted playsInline
        className={classes.videoStyle}
        >
        <source src={BGVideo} type="video/mp4" />
      </video>
      <Box className={classes.intro}>
        <Title className={classes.tagline}>{"BRAINSTORMER"}</Title>
        <Text>This is my new project</Text>
        <Link to="/signup"><Button className={classes.getstarted}>{"Get Started"}</Button></Link>
      </Box>
    </Paper>
  )
}

export default Hero;
