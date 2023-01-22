import React, { Component }from 'react'
import { styled } from '@mui/material/styles';
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

const PREFIX = 'GuildCompare';

const classes = {
  container: `${PREFIX}-container`,
  formControl: `${PREFIX}-formControl`,
  link: `${PREFIX}-link`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.container}`]: {
    flexGrow: 1,
  },

  [`& .${classes.formControl}`]: {
    width: 'calc(100% - 1rem)',
    marginRight: '1rem',
  },

  [`& .${classes.link}`]: {
    color: theme.palette.primary.main,
  }
}));

class GuildCompare extends Component {
  state = {
    guild1: 'enforcer',
    guild2: 'infiltrator',
  }

  componentDidMount() {
    const {
      location
    } = this.props;
    const {
      guild1,
      guild2
    } = queryString.parse(location.search);

    if (data.guilds[guild1]) {
      this.setState({ guild1 });
    }
    if (data.guilds[guild2]) {
      this.setState({ guild2 });
    }
  }

  toggleSelection = event => {
    this.setState({ [event.target.name]: event.target.value });
    const {
      guild1,
      guild2
    } = this.state;
    const newQuery = queryString.stringify({
      ...{
        guild1,
        guild2,
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
      guild1,
      guild2,
    } = this.state;
    const tableConfig = {
      g1Label: "Class 1",
      g2Label: "Class 2",
      g1Key: "guild",
      g2Key: "guild",
      g1Value: guild1,
      g2Value: guild2,
    };
    return (
      (<Root>
        <Grid container justifyContent="center" spacing={16} className={classes.container}>
          <Grid item xs={12} sm={6}>
            <FormHelperText>Class 1</FormHelperText>
            <FormControl className={classes.formControl}>
              <Select
                value={this.state.guild1}
                onChange={this.toggleSelection}
                inputProps={{
                  name: 'guild1',
                  id: 'guild1-select',
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
                  href={data.guilds[this.state.guild1].documentation}
                  target="_blank"
                >
                  {data.guilds[this.state.guild1].documentation}
                </a>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormHelperText>Class 2</FormHelperText>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.select}
                value={this.state.guild2}
                onChange={this.toggleSelection}
                inputProps={{
                  name: 'guild2',
                  id: 'guild2-select',
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
                  href={data.guilds[this.state.guild2].documentation}
                  target="_blank"
                >
                  {data.guilds[this.state.guild2].documentation}
                </a>
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={16} className={classes.container}>
          <Grid item xs={12} lg={6}>
            <SkillCompareTable
              {...tableConfig}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={16} className={classes.container}>
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
      </Root>)
    );
  }
}
export default (GuildCompare);
