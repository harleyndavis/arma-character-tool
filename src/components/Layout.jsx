import React from 'react'
import withStyles from '@mui/styles/withStyles';
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';

const styles = (theme) => ({
  layout: {
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden'
  },
  contentWrapper: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  },
});
const Layout = ({
  theme,
  children,
  classes,
}) => {
  return(
    <div>
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
