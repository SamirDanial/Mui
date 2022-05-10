import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

const Rightbar = () => {
  const classes = useStyles()
  return  <Container className={classes.container}>
    rightbar
  </Container>;
};

export default Rightbar;