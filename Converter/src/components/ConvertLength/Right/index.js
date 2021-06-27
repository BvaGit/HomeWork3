import Right from './Right.jsx';
import { connect } from 'react-redux';
import * as AT from '../../store/actionLength';

const mapStateToProps = (state) => {
    return {
        length: state.length
    }
}


export default connect(mapStateToProps)(Right)