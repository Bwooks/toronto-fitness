import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import Header from "./HomeHeader";
import Main from "./HomeMain";
import Section from "./HomeSection";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Grid fluid={true}>
                <NavMenu />
                <Header />
                <Main />
                <Section />
                <Footer />
            </Grid>
        );
    }
}
