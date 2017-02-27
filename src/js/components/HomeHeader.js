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
                                    <h3>How</h3>
                                    <p>Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-</p>
                                </li>
                                <li>
                                    <h3>It</h3>
                                    <p>Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-.</p>
                                </li>
                                <li>
                                    <h3>Works</h3>
                                    <p>Weightlifting, also called Olympic weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-</p>
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