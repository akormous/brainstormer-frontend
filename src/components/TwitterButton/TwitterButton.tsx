import { createStyles, Button } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.twitter[0],
    width: '100%',
    '&:hover': {
      backgroundColor: theme.colors.twitter[1],
    }
  }
}))

interface TwitterButtonProps {
  label: string
}

function TwitterButton({label}: TwitterButtonProps) {
  const { classes } = useStyles();
  return (
    <Button leftIcon={<IconBrandTwitter size={18} stroke={1.5} />} className={classes.root}>
      {label}
    </Button>
  );
}

export default TwitterButton;
