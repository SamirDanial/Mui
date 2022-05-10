import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, Modal, Tooltip, TextField } from "@mui/material";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed !important",
    bottom: "10px",
    right: "20px",
  },
  container: {
    width: "500px !important",
    height: "550px",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                variant="standard"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                row={4}
                variant="outlined"
                label="Description"
                style={{ width: "100%" }}
              />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Add;
