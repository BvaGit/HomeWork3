import InputLength from './InputLength.jsx';
import { connect } from 'react-redux';
import * as AT from '../../store/actionLength';

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLength: (data) => dispatch(AT.userLength(data)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLength);