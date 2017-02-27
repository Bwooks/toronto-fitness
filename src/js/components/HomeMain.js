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
            <Row>
                <section className="mainSection">
                    <Col md={6} xs={12} className="section-videos">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </Col>
                    <Col md={6} xs={12} className="section-descriptions">
                        <div>

                        </div>
                    </Col>
                </section>
            </Row>
        )
    }
}