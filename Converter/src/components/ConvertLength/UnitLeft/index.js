import UnitLength from './UnitLeft.jsx';
import { connect } from 'react-redux';
import * as AT from '../../store/actionLength'

const mapStateToProps = (state) => {
    return {
        left: state.left
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selLeft: (data) => dispatch(AT.selLeft(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitLength);