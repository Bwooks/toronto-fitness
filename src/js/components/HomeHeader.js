/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Row,Col,Jumbotron} from "react-bootstrap";
export default class HomeHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Row className="show-grid">
                <Col xs={12}>
                <Jumbotron>

                    <div className="headerSection"></div>
                    <div className="headerSection"></div>
                </Jumbotron>
                </Col>
            </Row>
        )
    }
}