import React , {Component} from 'react';
import Button from '../Button';
import './AddTimer.scss';


class AddTimer extends Component {
    constructor(props){
        super(props)
        this.state = {
            timer: ''
        }
    }

    hendleSendTimer = (e) => {
        e.preventDefault();
        this.props.setTimer(this.state.timer);
        this.setState({
            timer: ''
        })
    }

    valueTimer = (e) => {
        this.setState({
            timer: e.target.value
        })
    }

    render() {
        return (
            <form className="addTimer" onSubmit={this.hendleSendTimer}>
                <input 
                    className="addTimer__input"
                    type="number"
                    placeholder="Введите таймер в секундах"
                    onChange={this.valueTimer}
                    value={this.state.timer}
                />
                <Button title={"SET"}/>
            </form>
        )
    }
}


export default AddTimer;