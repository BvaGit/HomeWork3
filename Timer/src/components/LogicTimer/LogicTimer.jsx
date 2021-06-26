import React, {Component} from 'react'
import ControlTimer from '../ControlTimer';
import PropTypes from 'prop-types';
import './LogicTimer.scss'

class LogicTimer extends Component {
    constructor(props){
        super(props)
        this.state = {
            timer: props.post,
            start: true
        }
        this.interval = null;
    }

    componentDidUpdate(prevProps){
        if(prevProps.post !== this.props.post ){
            this.setState({
                timer: this.props.post
            })
        }
    }

    startTimer = () => {
        const {start, timer} = this.state;
        if(start && timer > 0){
            this.interval = setInterval(this.timer, 1000)
            this.setState({
                start: !this.state.start
            })
        }
    }

    stopTimer = () => {
        clearInterval(this.interval);
        if(!this.state.start){
            this.setState({
                start: !this.state.start
            })
        }
    }

    resetTimer = () => {
        clearInterval(this.interval);
        this.setState({
            timer: '0',
            start: true
        })
        this.props.setTimer(this.state.timer = '0');
    }

    timer = () => {
        let x = this.state.timer;
        x--;
        if(x === 0){
            clearInterval(this.interval);
            this.setState({
                start: true
            })
        }
        this.setState(state => ({
            timer: x
        }))
    }

    render () {
        return (
            <>
            <h2 className="timer">{this.state.timer}</h2>
            <ControlTimer
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                resetTimer={this.resetTimer}
            />
            </>

        ) 
    }
}

LogicTimer.propTypes = {
    timer: PropTypes.string,
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
    resetTimer: PropTypes.func,
    timer: PropTypes.func
}

export default LogicTimer;