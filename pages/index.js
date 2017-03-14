import 'isomorphic-fetch'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import withMaterialUI from './hocs/with-material-ui'
import Menu from './parts/Menu'

const ListItemIcon = () => (
  <FontIcon className="material-icons">chevron_right</FontIcon>
)

class Index extends React.Component {
  static async getInitialProps() {
    const apiEndpoint = process.env.API_ENDPOINT
    const res = await fetch(`${apiEndpoint}/teams`)
    const teams = await res.json()
    return { teams, apiEndpoint }
  }

  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: false,
      search: '',
      teams: props.teams,
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  async handleSearchChange({ target: { value: search } }) {
    const url = new URL(`${this.props.apiEndpoint}/teams`)
    url.searchParams.append('q', search)
    const res = await fetch(url)
    const teams = await res.json()
    this.setState({ search, teams })
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Players"
          iconElementRight={<Menu />}
          onLeftIconButtonTouchTap={this.toggleDrawer}
          onTitleTouchTap={() => location.reload()}
        />
        <Drawer open={this.state.drawerOpen} onRequestChange={this.toggleDrawer} docked={false}>
          <MenuItem onTouchTap={this.toggleDrawer}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.toggleDrawer}>Menu Item</MenuItem>
        </Drawer>
        <TextField
          type="search"
          hintText="例) 世田谷 社会人"
          floatingLabelText="🔍 チームを探す"
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
      </div>
    )
  }
}

export default withMaterialUI(Index)
