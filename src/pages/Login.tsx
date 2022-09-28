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
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
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
    link: {
        color: theme.colors.white[1]
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
    const loginform = useForm({
        initialValues: {
            username: '', // username or email
            password: '',
        },
        validate: {
            username: (value) => (/^\S+$/.test(value)  ? null : 'Invalid username or email'),
            password: (value) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ? null : 'Password must include at least one uppercase letter, number and special character')
        },
    });
    return (
        <Container className={classes.root}>
        <Paper className={classes.loginpaper}>
        <Title align="center" order={3} className={classes.logintitle}>BRAINSTORMER LOGIN</Title>
        <form onSubmit={loginform.onSubmit((values) => console.log(values))}>
        <Grid>
            <Grid.Col span={12}>
                <TextInput
                placeholder="Username or Email address"
                {...loginform.getInputProps('username')}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <PasswordInput
                placeholder="Password"
                {...loginform.getInputProps('password')}
                />        
            </Grid.Col>
            <Grid.Col span={12}>
                <Text size="xs" align="center">Forgot password?</Text>
            </Grid.Col>
            <Grid.Col span={12}>
                <Button type="submit" className={classes.loginbutton}>LOG IN</Button>
            </Grid.Col>
            <Grid.Col span={12}>
                <TwitterButton label="Log In with Twitter" />
            </Grid.Col>
            <Grid.Col span={12}>
                <Text size="xs" align="center">Not a user? <Link to="/signup" className={classes.link}>Sign Up</Link></Text>
            </Grid.Col>
        </Grid>
        </form>
        </Paper>
        </Container>
    )
}

export default Login