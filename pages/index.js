import React from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import { List, ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import TextField from 'material-ui/TextField'
import withMaterialUI from './hocs/with-material-ui'

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)
Logged.muiName = 'IconMenu'

const ListItemIcon = () => (
  <FontIcon className="material-icons">chevron_right</FontIcon>
)

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange({ target: { value } }) {
    this.setState({ search: value })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementRight={<Logged />}
        />
        <TextField
          type="search"
          hintText="例) 世田谷 社会人"
          floatingLabelText="🔍 チームを探す"
          floatingLabelFixed
          fullWidth
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
        <List>
          <ListItem
            leftAvatar={<Avatar src="images/no-image.png" />}
            primaryText="aaa"
            secondaryText="aaaaaa"
            rightIcon={<ListItemIcon />}
          />
          <ListItem
            leftAvatar={<Avatar src="images/no-image.png" />}
            primaryText="aaa"
            secondaryText="aaaaaa"
            rightIcon={<ListItemIcon />}
          />
        </List>
      </div>
    )
  }
}

export default withMaterialUI(Index)
