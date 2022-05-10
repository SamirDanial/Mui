import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@mui/material';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

const Feed = () => {
  const classes = useStyles()
  return  <Container className={classes.container}>
    <Post />
    <Post />
    <Post />
  </Container>;
};

export default Feed;