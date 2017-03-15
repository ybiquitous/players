import 'isomorphic-fetch'

const API_ENDPOINT = process.env.API_ENDPOINT

export default function fetchAPI(name, ...args) {
  return fetch(`${API_ENDPOINT}/${name}`, ...args)
}
