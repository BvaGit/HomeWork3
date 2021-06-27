import UnitRight from './UnitRight.jsx';
import { connect } from 'react-redux';
import * as AT from '../../store/actionLength';

const mapStateToProps = (state) => {
    return {
        rigth: state.rigth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selRight: (data) => dispatch(AT.selRight(data))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(UnitRight);