import ButtonLength from './ButtonLength.jsx';
import { connect } from 'react-redux';
import * as AT from '../../store/actionLength'

const mapStateToProps = (state) => {
    return {
        left: state.left,
        right: state.right,
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        length: (data) => dispatch(AT.answer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLength);