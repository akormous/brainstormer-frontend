import 
{ 
    createStyles, 
    Title,
    Text, 
    TextInput, 
    PasswordInput, 
    Paper, 
    Container, 
    Grid,
    Button
} from "@mantine/core"
import TwitterButton from "../components/TwitterButton/TwitterButton";

const useStyles = createStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'start',
        display: 'flex',
        flexDirection: 'column',
        marginBlock: '40px',
        maxWidth: '460px',
        height: '100%',
    },
    loginpaper: {
        paddingBlock: '40px',
        paddingInline: '30px',
        width: '100%',
        backgroundColor: theme.colors.white[6],
    },
    logintitle: {
        marginBottom: '30px',
        color: theme.colors.white[0]
    },
    loginbutton: {
        backgroundColor: theme.colors.blue[3],
        width: '100%',
        '&:hover': {
            backgroundColor: theme.colors.blue[4],
        }
    },
    twitterbutton: {
        width: '100%',
        backgroundColor: theme.colors.twitter[0],
        '&:hover': {
            backgroundColor: theme.colors.twitter[1],
        }
    }
}));

function Login() {
    const { classes } = useStyles();
    return (
        <Container className={classes.root}>
        <Paper className={classes.loginpaper}>
        <Title align="center" order={3} className={classes.logintitle}>BRAINSTORMER LOGIN</Title>
        <Grid>
            <Grid.Col span={12}>
                <TextInput 
                placeholder="Username or Email address"
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <PasswordInput
                placeholder="Password"
                />        
            </Grid.Col>
            <Grid.Col span={12}>
                <Text size="xs" align="center">Forgot password?</Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Button className={classes.loginbutton}>LOG IN</Button>
            </Grid.Col>
            <Grid.Col span={12}>
                <TwitterButton label="Log In with Twitter" />
            </Grid.Col>
            <Grid.Col span={12}>
                <Text size="xs" align="center">Not a user? Sign Up</Text>
            </Grid.Col>
        </Grid>
        
        
        </Paper>
        </Container>
    )
}

export default Login