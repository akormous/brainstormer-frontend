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
} from "@mantine/core";
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
    signuppaper: {
        paddingBlock: '40px',
        paddingInline: '30px',
        width: '100%',
        backgroundColor: theme.colors.white[6],
    },
    signuptitle: {
        marginBottom: '30px',
        color: theme.colors.white[0]
    },
    signupbutton: {
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

function Signup() {
    const { classes } = useStyles();
    const signupform = useForm({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validate: {
            username: (value) => (/^\S+$/.test(value)  ? null : 'Invalid username'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ? null : 'Password must include at least one uppercase letter, number and special character'),
            confirmpassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        }
    })
    return (
        <Container className={classes.root}>
        <Paper className={classes.signuppaper}>
        <Title align="center" order={3} className={classes.signuptitle}>{"CREATE AN ACCOUNT"}</Title>
        <form onSubmit={signupform.onSubmit((values) => console.log(values))}>
        <Grid>
            <Grid.Col span={12}>
                <TextInput 
                placeholder="Username"
                {...signupform.getInputProps('username')}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <TextInput 
                placeholder="Email address"
                {...signupform.getInputProps('email')}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <PasswordInput
                placeholder="Password"
                {...signupform.getInputProps('password')}
                />        
            </Grid.Col>
            <Grid.Col span={12}>
                <PasswordInput
                placeholder="Confirm Password"
                {...signupform.getInputProps('confirmpassword')}
                />        
            </Grid.Col>
            <Grid.Col span={12}>
                <Button type="submit" className={classes.signupbutton}>SIGN UP</Button>
            </Grid.Col>
            <Grid.Col span={12}>
                <TwitterButton label="Sign Up with Twitter" />
            </Grid.Col>
            <Grid.Col span={12}>
                <Text size="xs" align="center">Already a registered user? <Link className={classes.link} to="/login">Log In </Link></Text>
            </Grid.Col>
        </Grid>
        </form>
        </Paper>
        </Container>
    )
}

export default Signup