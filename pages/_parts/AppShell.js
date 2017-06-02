import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run'
import Menu from './Menu'

const propTypes = {
  title: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

function reloadPage() {
  location.reload()
}

class AppShell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: false,
    }
  }

  render() {
    const { title, children } = this.props
    return (
      <div>
        <AppBar
          title={<h1>{title}</h1>}
          iconElementLeft={<IconButton><DirectionsRun /></IconButton>}
          iconElementRight={<Menu />}
          onLeftIconButtonTouchTap={reloadPage}
          onTitleTouchTap={reloadPage}
        />
        <style jsx>{`
          h1 {
            display: inline;
            font-size: inherit;
            font-weight: normal;
            margin: 0;
            padding: 0;
          }
          h1:hover { cursor: pointer; }
        `}</style>

        <main>
          {children}
        </main>
      </div>
    )
  }
}

AppShell.propTypes = propTypes

export default AppShell
