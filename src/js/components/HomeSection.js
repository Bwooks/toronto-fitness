/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Row,Col} from "react-bootstrap";

export default class HomeSection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Row className="show-grid">
                <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            </Row>
        );
    }
}