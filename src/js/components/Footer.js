/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Row,Col} from "react-bootstrap";

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Row>
                <Col xs={12} md={6}>
                    <section className="footerSection">

                    </section>
                </Col>
                <Col xs={12} md={6}>
                    <section className="footerSection">
                    </section>
                </Col>
            </Row>
        );
    }
}