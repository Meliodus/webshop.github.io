import React from 'react';
import { Row, Col, Tabs, Tab} from 'react-bootstrap';
// Nav
import Card from "../../../App/components/MainCard";

import Aux from "../../../hoc/_Aux";

class TabsPills extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <h5>Pending Domains</h5>
                        <hr/>
                        <Tabs  defaultActiveKey="home">
                            <Tab eventKey="home" title="HOME">
                                <p>Lofem Ipsum</p>
                            </Tab>
                            <Tab eventKey="profile" title="PROFILE">
                                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                            </Tab>
                            <Tab eventKey="contact" title="CONTACT">
                                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                            </Tab>
                        </Tabs>
                        <h5 className="mt-4">Vertical Pills</h5>
                        <hr/>
                            <Row>
                                <Col sm={9}>    
                        <Card title='Hello Card' isOption>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </Card>
                   
                                   
                                </Col>
                            </Row>
                      
                    </Col>
                </Row>


            </Aux>
        );
    }
}

export default TabsPills;
