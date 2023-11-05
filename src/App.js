import React, { Component }from "react";
import Projects from './Projects';
class App extends Component {
    state = { displayBio : false};

    toggleDisplayBio = () => {
        this.setState ( { displayBio : !this.state.displayBio});
    }


    render() {
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Allen. I'm a second year Computer Science student.</p>    
                <p>I'm always looking for new connections.</p>
                {
                this.state.displayBio ? (                
                <div>
                    <p>I live in San Francisco.</p>
                    <p>My favorite langauge is C.</p>
                    <div>
                        <button onClick = {this.toggleDisplayBio}>Show Less</button>
                    </div>
                </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleDisplayBio} >Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
            </div>
        );
    }
}


export default App;