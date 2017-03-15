import React from 'react'
import Router from 'next/router'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui/svg-icons/content/add'
import LoadingIcon from 'material-ui/svg-icons/action/autorenew'
import AppShell from '../_parts/AppShell'
import withMaterialUI from '../_hocs/with-material-ui'
import fetchAPI from '../_utils/fetch-api'

const buttonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
}

class New extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      nameError: '',
      errorMessage: '',
      buttonDisabled: false,
      loading: false,
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.save = this.save.bind(this)
  }

  handleNameChange({ target: { value } }) {
    this.setState(this.validateName(value))
  }

  validateName(value = this.state.name) {
    const LIMIT = 60
    let name = value.trim()
    let nameError = ''
    if (!name) {
      nameError = 'チーム名は必須です'
    } else if (name.length > LIMIT) {
      name = name.slice(0, LIMIT)
      nameError = `チーム名は${LIMIT}字以内です`
    }
    return { name, nameError, buttonDisabled: Boolean(nameError) }
  }

  async save() {
    const { name, nameError, buttonDisabled } = this.validateName()

    if (nameError) {
      this.setState({ nameError, buttonDisabled })
      return
    }

    this.setState({ buttonDisabled: true, loading: true })

    try {
      const res = await fetchAPI('teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ name }),
      })
      if (res.ok) {
        Router.push('/')
      } else {
        const errorInfo = await res.json()
        this.setState({
          errorMessage: errorInfo.message,
          nameError: errorInfo.errors.map(e => e.message).join(', '),
          buttonDisabled: false,
          loading: false,
        })
      }
    } catch (err) {
      console.error(err)
      this.setState({ errorMessage: err.message, buttonDisabled: false, loading: false })
    }
  }

  render() {
    const { name, nameError, errorMessage, buttonDisabled, loading } = this.state
    return (
      <AppShell title="チーム作成">
        <TextField
          id="teamName"
          floatingLabelText="チーム名"
          hintText="FCバルセロナ"
          errorText={nameError}
          disabled={loading}
          fullWidth
          value={name}
          onChange={this.handleNameChange}
        />

        <FloatingActionButton
          onTouchTap={this.save}
          disabled={buttonDisabled}
          style={buttonStyle}
          secondary
        >
          {loading ? <LoadingIcon /> : <AddIcon />}
        </FloatingActionButton>

        <Snackbar
          open={Boolean(errorMessage)}
          message={errorMessage}
        />
      </AppShell>
    )
  }
}

export default withMaterialUI(New)
