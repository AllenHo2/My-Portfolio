import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


class SocialProfile extends Component{
    render() {

        const {image, link} = this.props.socialProfile;
        return(
         <span> 
            <a href={link}><img src = {image} alt='social-profile' style={{ width: 35, height: 35, margin: 10}} href={link}/></a>
        </span>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
        <div> 
            <h3>Contact</h3>
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
                        return(
                            <SocialProfile key = {SOCIAL_PROFILES.id} socialProfile={SOCIAL_PROFILES}/>
                        );
                    })
                }
            </div>
        </div>
        )
    }
}



export default SocialProfiles;
