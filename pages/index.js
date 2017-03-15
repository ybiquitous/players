import React from 'react'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import withMaterialUI from './_hocs/with-material-ui'
import AppShell from './_parts/AppShell'
import fetchAPI from './_utils/fetch-api'

const ListItemIcon = () => (
  <FontIcon className="material-icons">chevron_right</FontIcon>
)

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetchAPI('teams')
    const teams = await res.json()
    return { teams }
  }

  constructor(props) {
    super(props)

    this.state = {
      search: '',
      teams: props.teams,
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  async handleSearchChange({ target: { value: search } }) {
    const res = await fetchAPI(`teams?q=${decodeURIComponent(search)}`)
    const teams = await res.json()
    this.setState({ search, teams })
  }

  render() {
    return (
      <AppShell title="Players">
        <TextField
          type="search"
          hintText="🔍 チームを探す（“世田谷 社会人”）"
          fullWidth
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        <List>
          {this.state.teams.map(({ id, name }) => (
            <ListItem
              key={id}
              leftAvatar={<Avatar src="/static/images/no-image.png" />}
              primaryText={name}
              secondaryText="aaaaaa"
              rightIcon={<ListItemIcon />}
            />
            ))}
        </List>
      </AppShell>
    )
  }
}

export default withMaterialUI(Index)
