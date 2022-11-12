import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";

const styles = (theme) => ({
  layout: {
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden'
  },
  contentWrapper: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  },
  modalBody:{
    textAlign: 'center',
    position: 'absolute !important',
    top: 200,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 900,
    minWidth: 200,
    padding: 20,
    bgcolor: 'background.paper',
    border: '2px solid #ff',
    boxShadow: 24,
    p: 4,
  },
  bodyText: {
    size: '1rem'
  },
  bodyLink: {
    color: 'darkOrange'
  }
});
const Layout = ({
  theme,
  children,
  classes,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper square className={classes.modalBody}>
          <Typography id="modal-modal-title" variant="h6">
            Deprecation Notice
          </Typography>
          <br/>
          <Typography id="modal-modal-description" variant="body" className={classes.bodyText}>
            This tool is no longer maintained. As is well documented on
            {' '}<Link className={classes.bodyLink} to="https://reddit.com/r/MUD">r/MUD</Link> the staff 
            of Armageddon MUD have a history of being abusive towards players. 
            <br/><br/>
            The creator of this tool now favors a game called 
            {' '}<Link className={classes.bodyLink} to="https://harshlands.net">Harshlands</Link>, where 
            many former Armageddon MUD players with more sophisitication 
            and integrity than Armageddon MUD staff now play. Come join us!
          </Typography>
          <br/><br/>
          <div>
        <Button className={classes.bodyLink} onClick={handleClose}>Close</Button>
          </div>
        </Paper>
      </Modal>
    <Grid container className={classes.layout}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.contentWrapper}>
          {children}
        </div>
      </Grid>
    </Grid>
    </div>
  )
}
export default withStyles(styles)(Layout);
