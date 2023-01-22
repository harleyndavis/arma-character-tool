import React from 'react'
import { styled } from '@mui/material/styles';
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';

const PREFIX = 'Layout';

const classes = {
  layout: `${PREFIX}-layout`,
  contentWrapper: `${PREFIX}-contentWrapper`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.layout}`]: {
    backgroundColor: theme.palette.background.default
  },

  [`& .${classes.contentWrapper}`]: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }
}));

const Layout = ({
  theme,
  children,
  classes,
}) => {
  return (
    <Root>
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
    </Root>
  );
}
export default (Layout);
