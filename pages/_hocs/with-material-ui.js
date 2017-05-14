// https://github.com/zeit/next.js/issues/873
import React from 'react'
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

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
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

      let pageProps
      if (WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps(context)
      } else {
        pageProps = {}
      }

      return { ...pageProps, userAgent }
    }

    componentWillMount() {
      try {
        if (typeof window !== 'undefined') {
          injectTapEventPlugin()
        }
      } catch (e) {
        // Do nothing, just preventing error
      }
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
