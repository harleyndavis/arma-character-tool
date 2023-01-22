import React, { Component }from 'react'
import { styled } from '@mui/material/styles';
import data from '../data/data.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const PREFIX = 'RaceTable';

const classes = {
  cell: `${PREFIX}-cell`,
  noContent: `${PREFIX}-noContent`
};

const StyledPaper = styled(Paper)((
  {
    theme
  }
) => ({
  [`& .${classes.cell}`]: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      padding: 4,
      fontSize: '0.65rem',
      maxWidth: 65,
      paddingRight: '4px !important'
    },
    [theme.breakpoints.down('lg')]: {
      padding: 8,
    },
  },

  [`& .${classes.noContent}`]: {
    padding: '1rem',
    textAlign: 'center',
    width: '100%'
  }
}));

class RaceTable extends Component {
  render() {
    const {
      classes,
    } = this.props;

    const selectedRace = data.races.human;

    return (
      <StyledPaper square className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                {selectedRace.label}
              </TableCell>
              <TableCell className={classes.cell}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={selectedRace.documentation}
                >
                  Documentation &#8599;
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="karma">
              <TableCell className={classes.cell} component="th" scope="row">
                Karma Cost
              </TableCell>
              <TableCell className={classes.cell}>
                {selectedRace.karma}
              </TableCell>
            </TableRow>
            <TableRow key="heightmin">
              <TableCell className={classes.cell} component="th" scope="row">
                Minimum Height (inches)
              </TableCell>
              <TableCell className={classes.cell}>
                {selectedRace.heightmin}
              </TableCell>
            </TableRow>
            <TableRow key="heightmax">
              <TableCell className={classes.cell} component="th" scope="row">
                Maximum Height (inches)
              </TableCell>
              <TableCell className={classes.cell}>
                {selectedRace.heightmax}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledPaper>
    );
  }
}
export default (RaceTable);

