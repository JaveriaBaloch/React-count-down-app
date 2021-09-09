import React, {Component} from "react";
import "./css/style.css";

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
        }
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline)
    }
    componentDidMount(){
        setInterval(()=>{
            this.getTimeUntil(this.props.deadline)
        },1000)
    }
    getTimeUntil(deadline){
        const time=Date.parse(deadline)-Date.now(new Date());
        const seconds=Math.floor((time/1000)%60)
        const minutes=Math.floor((time/1000/60)%60)
        const hours=Math.floor(((time)/1000/60/60)%24)
        const days=Math.floor(time/(1000*60*60*24))
        this.setState({days,hours,minutes,seconds})
    }
    leadingzero(num){
        if (num<10){
        return "0"+num;
        }
        else{
            return num;
        }
    }
    render(){
        // this.getTimeUntil(this.props.deadline)
        return(
            <section>
            <span>{this.leadingzero(this.state.days)} days</span>
            <span>{this.leadingzero(this.state.hours)} hours</span>
            <span>{this.leadingzero(this.state.minutes)} minutes</span>
            <span>{this.leadingzero(this.state.seconds)} seconds</span>
        </section>
            )
    }
}
export default Clock