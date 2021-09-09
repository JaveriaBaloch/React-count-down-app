import React,{Component} from "react";
import "./css/style.css"
class App extends React.Component{
    render(){
        return(
            <main>
                <section>
                    <h1>Count Down Champ</h1>
                    <hr/>
                </section>
                <section>
                    <span>14 days</span>
                    <span>30 hours</span>
                    <span>15 minutes</span>
                    <span>20 seconds</span>
                </section>
                <section className="flied">
                    <input placeholder="New Deadline" type="datetime-local"/>
                    <button>Sumbit</button>
                </section>
            </main>
            )
    }
}
export default App;