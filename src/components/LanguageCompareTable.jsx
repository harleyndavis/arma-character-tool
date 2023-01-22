import React, { Component }from 'react'
import { styled } from '@mui/material/styles';
import data from '../data/data.json'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PREFIX = 'LanguageCompareTable';

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

class LanguageCompareTable extends Component {
  languagesToObj({
    guildGroup,
    gSelected,
    gNumber = 1,
    result = {},
  }) {
      if (data[guildGroup] && data[guildGroup][gSelected] && data[guildGroup][gSelected].languages) {
          data[guildGroup][gSelected].languages.forEach(lng => {
              console.log(lng);
        result[lng] = {
          [`g${gNumber}Language`]: data.skills.languages[lng].label,
          ...result[lng],
        }
      })
    }
    return result;
  }

  mungeLanguages() {
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
        result = this.languagesToObj({result, guildGroup, gSelected, gNumber})
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

    const mungedLanguages = this.mungeLanguages();
    return (
      <StyledPaper square className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                {g1Label} Languages
              </TableCell>
              <TableCell className={classes.cell}>
                {g2Label} Languages
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(!mungedLanguages || mungedLanguages.length === 0) && (
              <TableRow key="noLanguages">
                            <TableCell colSpan={2} className={classes.noContent}>Neither group has bonus languages</TableCell>
              </TableRow>
            )}
            {mungedLanguages && mungedLanguages.length > 0  && mungedLanguages.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.cell} component="th" scope="row">
                  {row['g1Language']}
                </TableCell>
                <TableCell className={classes.cell}>{row['g2Language']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledPaper>
    );
  }
}
export default (LanguageCompareTable);

