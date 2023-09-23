// simple http client
const api_key = import.meta.env.REACT_APP_API_KEY
const base_url = import.meta.env.BASE_URL

const doFetch = async (url, options) => {
  const response = await fetch(`${base_url}${url}&appid=${api_key}`, options)
  const json = await response.json()
  if (json.error) {
    throw new Error(json.message + ': ' + json.error)
  } else if (!response.ok) {
    throw new Error('Something went wrong fetching')
  } else {
    return json
  }
}

export { doFetch }
