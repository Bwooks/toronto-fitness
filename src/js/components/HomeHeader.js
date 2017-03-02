/**
 * Created by Owner on 2/25/2017.
 */
import React from "react";
import {Row,Col,Button} from "react-bootstrap";
export default class HomeHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const mainImg = require("file-loader!../../assets/media/mainImg.png");
        return (
            <Row>
                <Col className="homeHeader" xs={12}>
                    <Col xs={12} md={6} className="headerSection headerImgContainer">
                        <div className="headerImg">
                            <img src={mainImg} />
                            <div className="ourBrand">
                                Your <span className="brandEmphasis">Fitness</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="headerSection headerDescriptionContainer">
                        <div className="headerDescription">
                            <ul>
                                <li>
                                    <h3>Describe Your Services</h3>
                                    <p>Tell clients what you do, where you do it, and how much it costs.</p>
                                </li>
                                <li>
                                    <h3>Record a Video</h3>
                                    <p>Record a profile and let your personality shine (cause baby you’re a firework).</p>
                                </li>
                                <li>
                                    <h3>Receive Your Link</h3>
                                    <p>Immediately receive a link and share it on Facebook, LinkedIn or Twitter.</p>
                                </li>
                                <li>
                                    <Button bsStyle="info">Learn more</Button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            </Row>
        )
    }
}
