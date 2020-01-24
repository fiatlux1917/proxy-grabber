import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../../store/rootReducer';
import { setProtocol, clearLog, grabProxies } from './actions';
import { Grabber } from './index';

const mapStateToProps = (state: AppState) => ({
  protocol: state.grabber.protocol,
  proxiesList: state.grabber.proxiesList,
  fetching: state.grabber.fetching,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProtocol: bindActionCreators(setProtocol, dispatch),
  clearLog: bindActionCreators(clearLog, dispatch),
  grabProxies: bindActionCreators(grabProxies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grabber);
