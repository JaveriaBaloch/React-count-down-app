import React,{Component} from "react";
import "./css/style.css"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            deadline:"November 25, 2021",
            newDeadline:""
        }
    }
    changeDeadline(){
        this.setState({
            deadline:this.state.newDeadline,

        })
    }
    render(){
        return(
            <main>
                <section>
                    <h1>CountDown to <small>{this.state.deadline}</small></h1>
                    <hr/>
                </section>
                <section>
                    <span>14 days</span>
                    <span>30 hours</span>
                    <span>15 minutes</span>
                    <span>20 seconds</span>
                </section>
                <section className="flied">
                    <input onChange={event=>this.setState({newDeadline:event.target.value})}
                    placeholder="New Deadline" type="datetime-local"/>
                    <button onClick={()=>this.changeDeadline()}>Sumbit</button>
                </section>
            </main>
            )
    }
}
export default App;