/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Row, Col} from "react-bootstrap";

export default class HomeMain extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Row className="show-grid">
                <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
            </Row>
        )
    }
}