import moment from 'moment'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const SET_PROTOCOL = 'SET_PROTOCOL'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
export const URL_GITHUB_PROFILE = 'https://github.com/JubasNTC'
export const CLICK_CLEAR = 'clear'
export const CLICK_GRAB = 'grab'
export const CLICK_SAVE = 'save'
export const COUNT_REQUEST = 10
export const PROTOCOLS = [
  { label: 'all', value: 'all' },
  { label: 'http', value: 'http' },
  { label: 'https', value: 'https' },
  { label: 'socks4', value: 'socks4' },
]
export const COUNTRIES_LIST = [
  { value: 'ALL', label: 'All countries' },
  { value: 'AU', label: 'Australia' },
  { value: 'AT', label: 'Austria' },
  { value: 'BR', label: 'Brazil' },
  { value: 'CA', label: 'Canada' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IN', label: 'India' },
  { value: 'IT', label: 'Italy' },
  { value: 'RU', label: 'Russian Federation' },
  { value: 'ES', label: 'Spain' },
  { value: 'SE', label: 'Sweden' },
  { value: 'TH', label: 'Thailand' },
  { value: 'TR', label: 'Turkey' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
]
const getCheckValue = value => (value ? 'yes' : 'no')
export const columns = [
  {
    Header: 'ip',
    accessor: 'ip',
  },
  {
    Header: 'port',
    accessor: 'port',
  },
  {
    Header: 'protocol',
    accessor: 'protocol',
  },
  {
    Header: 'ssl',
    accessor: 'ssl',
    Cell: props => getCheckValue(props),
  },
  {
    Header: 'lastChecked',
    accessor: 'lastChecked',
    Cell: props =>
      moment
        .unix(props.value)
        .startOf('hour')
        .fromNow(),
  },
  {
    Header: 'location',
    accessor: 'location',
  },
  {
    Header: 'amazon',
    accessor: 'websites.amazon',
    Cell: props => getCheckValue(props),
  },
  {
    Header: 'google',
    accessor: 'websites.google',
    Cell: props => getCheckValue(props),
  },
  {
    Header: 'facebook',
    accessor: 'websites.facebook',
    Cell: props => getCheckValue(props),
  },
  {
    Header: 'twitch',
    accessor: 'websites.twitch',
    Cell: props => getCheckValue(props),
  },
  {
    Header: 'netflix',
    accessor: 'websites.netflix',
    Cell: props => getCheckValue(props),
  },
]
