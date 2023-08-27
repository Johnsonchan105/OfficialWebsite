import React from "react";
import '../styles/Experience.css'
import FadeInSection from "./FadeInSection.js";
import ExperienceList from './ExperienceList.js'

class Experience extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: true,
            activeKey: '1'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey){
        this.setState({
            activeKey: eventKey
        });
    }
}

export default Experience;