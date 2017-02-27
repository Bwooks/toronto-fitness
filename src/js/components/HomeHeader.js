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
            <Row>
                <Col className="homeHeader" xs={12}>
                    <Col xs={12} md={6} className="headerSection">
                        <div>

                        </div>
                    </Col>
                    <Col xs={12} md={6} className="headerSection">
                        <div>

                        </div>
                    </Col>
                </Col>
            </Row>
        )
    }
}