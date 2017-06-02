import React from 'react'
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

export default function withMaterialUI(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      userAgent: PropTypes.string,
    }

    static defaultProps = {
      userAgent: null,
    }

    static async getInitialProps(context) {
      const { req } = context
      const userAgent = process.browser ? navigator.userAgent : req.headers['user-agent']

      let pageProps
      if (WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps(context)
      } else {
        pageProps = {}
      }

      return { ...pageProps, userAgent }
    }

    render() {
      const { userAgent } = this.props
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(baseTheme, { userAgent })}>
          <WrappedComponent {...this.props} />
        </MuiThemeProvider>
      )
    }
  }
}
