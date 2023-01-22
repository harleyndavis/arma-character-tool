import React, { Component }from 'react'
import withStyles from '@mui/styles/withStyles';
import queryString from 'query-string';
import data from '../data/data.json'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import SkillCompareTable from './SkillCompareTable';
import PerkCompareTable from './PerkCompareTable';
import LanguageCompareTable from './LanguageCompareTable';

const styles = (theme) => ({
  container: {
    flexGrow: 1,
  },
  formControl: {
    width: 'calc(100% - 1rem)',
    marginRight: '1rem',
  },
  link: {
    color: theme.palette.primary.main,
  },
});
class GuildPicker extends Component {
  state = {
    guild: 'enforcer',
    subguild: 'hunter',
  }

  componentDidMount() {
    const {
      location
    } = this.props;
    const {
      guild,
      subguild
    } = queryString.parse(location.search);

    if (data.guilds[guild]) {
      this.setState({ guild });
    }
    if (data.subguilds[subguild]) {
      this.setState({ subguild });
    }
  }

  toggleSelection = event => {
    this.setState({ [event.target.name]: event.target.value });
    const {
      guild,
      subguild
    } = this.state;
    const newQuery = queryString.stringify({
      ...{
        guild,
        subguild,
      },
      [event.target.name]: event.target.value,
    });
    const {
      history,
      location: {
        pathname = '/'
      } = {}
    } = this.props;
    history.push({
      pathname,
      search: newQuery,
    })
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      guild,
      subguild,
    } = this.state;
    const tableConfig = {
      g1Label: "Class",
      g2Label: "Subclass",
      g1Key: "guild",
      g2Key: "subguild",
      g1Value: guild,
      g2Value: subguild,
    };
    return (
      <>
        <Grid container justifyContent="center" spacing={2} className={classes.container}>
          <Grid item xs={12} sm={6}>
            <FormHelperText>Class</FormHelperText>
            <FormControl className={classes.formControl}>
              <Select
                value={this.state.guild}
                onChange={this.toggleSelection}
                inputProps={{
                  name: 'guild',
                  id: 'guild-select',
                }}
              >
                {data.sortedguilds.map(gKey => (
                  <MenuItem value={gKey}>
                    {data.guilds[gKey].label}
                    {data.guilds[gKey].karma ? ` (${data.guilds[gKey].karma})` : ''}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                <span>Documentation: </span>
                <a
                  className={classes.link}
                  href={data.guilds[this.state.guild].documentation}
                  target="_blank"
                >
                  {data.guilds[this.state.guild].documentation}
                </a>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormHelperText>Subclass</FormHelperText>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.select}
                value={this.state.subguild}
                onChange={this.toggleSelection}
                inputProps={{
                  name: 'subguild',
                  id: 'subguild-select',
                }}
              >
                {data.sortedsubguilds.map(gKey => (
                  <MenuItem value={gKey}>
                    {data.subguilds[gKey].label}
                    {data.subguilds[gKey].karma ? ` (${data.subguilds[gKey].karma} karma)` : ''}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                <span>Documentation: </span>
                <a
                  className={classes.link}
                  href={data.subguilds[this.state.subguild].documentation}
                  target="_blank"
                >
                  {data.subguilds[this.state.subguild].documentation}
                </a>
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} className={classes.container}>
          <Grid item xs={12} lg={6}>
            <SkillCompareTable
              {...tableConfig}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <PerkCompareTable
                  {...tableConfig}
                />
              </Grid>
              <Grid item xs={12}>
                <LanguageCompareTable
                  {...tableConfig}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(GuildPicker);
