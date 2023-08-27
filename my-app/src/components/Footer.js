import React from "react";
import '../styles/Footer.css'
import FadeInSection from "./FadeInSection";

class Footer extends React.Component {
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

export default Footer;