import React, { Component }from "react";

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        

        this.readMore = this.readMore.bind(this);
    }

    readMore() {
        this.setState ( { displayBio : true});
        console.log('readMore this', this);
    }


    render() {
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Allen. I'm a second year Computer Science student.</p>    
                <p>I'm always looking for new connections.</p>
        {this.state.displayBio ? (                
        <div>
            <p>I live in San Francisco.</p>
            <p>My favorite langauge is C.</p>
        </div>
        ) : (
            <div>
                <button onClick = {this.readMore} >Read More</button>
            </div>
        )
        }
            </div>
        );
    }
}


export default App;