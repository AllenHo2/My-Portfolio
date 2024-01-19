import React, { Component }from "react";
import Projects from './Projects';
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import allenhead_2 from '../assets/allenhead_2.png';
class App extends Component {
    state = { displayBio : false};

    toggleDisplayBio = () => {
        this.setState ( { displayBio : !this.state.displayBio});
    }


    render() {
        return(
            <div >
                <img src={allenhead_2} alt='profile' className="profile"/>
                <h1>Allen Ho</h1>
                <p>My name is Allen. I'm a second year Computer Science student.</p>  
                {this.state.displayBio ? <Title /> : null}
                <p>I'm always looking for new connections & partnerships to work with.</p>
                {
                this.state.displayBio ? (                
                <div>
                    <p>I am currently based in San Francisco!</p>
                    <p>When I'm not working, I like to go out with friends and grab coffee in my free time!</p>
                    <p>Some of my hobbies include swimming, rockclimbing, and finding new fashion trends</p>
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
                <br />
                <Projects />
                <br />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;