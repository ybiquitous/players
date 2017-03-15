import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu from './Menu'

const propTypes = {
  title: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

class AppShell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: false,
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const { title, children } = this.props
    return (
      <div>
        <AppBar
          title={title}
          iconElementRight={<Menu />}
          onLeftIconButtonTouchTap={this.toggleDrawer}
          onTitleTouchTap={() => location.reload()}
        />

        <Drawer open={this.state.drawerOpen} onRequestChange={this.toggleDrawer} docked={false}>
          <MenuItem onTouchTap={this.toggleDrawer}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.toggleDrawer}>Menu Item</MenuItem>
        </Drawer>

        <main>
          {children}
        </main>
      </div>
    )
  }
}

AppShell.propTypes = propTypes

export default AppShell
