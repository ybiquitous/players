import Router from 'next/router'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SignOutIcon from 'material-ui/svg-icons/action/power-settings-new'
import GroupAddIcon from 'material-ui/svg-icons/social/group-add'
import PersonIcon from 'material-ui/svg-icons/social/person'

export default function Menu(props) {
  return (
    <IconMenu
      {...props}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        primaryText="Profile"
        leftIcon={<PersonIcon />}
        onTouchTap={() => Router.push('/profile')}
      />
      <MenuItem
        primaryText="Create Team"
        leftIcon={<GroupAddIcon />}
        onTouchTap={() => Router.push('/teams/new')}
      />
      <MenuItem
        primaryText="Sign out"
        leftIcon={<SignOutIcon />}
      />
    </IconMenu>
  )
}

Menu.muiName = 'IconMenu'
