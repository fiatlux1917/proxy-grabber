import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { Grabber } from './index'

const mapStateToProps = (state: AppState) => ({})

export default connect(mapStateToProps)(Grabber)
