import React, { Component }from 'react'
import withStyles from '@mui/styles/withStyles';
import data from '../data/data.json'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const styles = (theme) => ({
  cell: {
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
  noContent: {
    padding: '1rem',
    textAlign: 'center',
    width: '100%'
  }
});
class PerkCompareTable extends Component {
  perksToObj({
    guildGroup,
    gSelected,
    gNumber = 1,
    result = {},
  }) {
      if (data[guildGroup] && data[guildGroup] && data[guildGroup][gSelected] && data[guildGroup][gSelected].perks) {
      data[guildGroup][gSelected].perks.forEach(prk => {
        result[prk] = {
          [`g${gNumber}Perk`]: data.skills.perks[prk].label,
          ...result[prk],
        }
      })
    }
    return result;
  }

  mungePerks() {
    const {
      g1Key,
      g2Key,
      g1Value,
      g2Value,
    } = this.props;

    let result = {};
    for (var i = 0; i < 2; i++) {
      const guildGroup = `${i === 0 ? g1Key : g2Key}s`
      const gSelected = i === 0 ? g1Value : g2Value;
      const gNumber = i + 1;
      result = this.perksToObj({result, guildGroup, gSelected, gNumber})
    }
    return Object.values(result);
  }

  render() {
    const {
      g1Label,
      g2Label,
      g1Key,
      g2Key,
      classes,
    } = this.props;

    const mungedPerks = this.mungePerks();
    return (
      <Paper square className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                {g1Label} Perks
              </TableCell>
              <TableCell className={classes.cell}>
                {g2Label} Perks
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(!mungedPerks || mungedPerks.length === 0) && (
              <TableRow key="noPerks">
                <Typography className={classes.noContent}>Neither group has perks</Typography>
              </TableRow>
            )}
            {mungedPerks && mungedPerks.length > 0  && mungedPerks.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.cell} component="th" scope="row">
                  {row['g1Perk']}
                </TableCell>
                <TableCell className={classes.cell}>{row['g2Perk']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(PerkCompareTable);

