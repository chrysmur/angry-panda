import React, {Component} from 'react';
import {Card, Row, Col } from 'react-bootstrap'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <Card className="intro bg-transparent border-transparent">
                    <Card.Body>
                        <Card.Title><h2 className=" text-center">Developers Hub</h2></Card.Title>
                    </Card.Body>
                    <Card.Text className="text-center">
                        This is AngryPanda. 
                    </Card.Text>
                    <Card.Text className="text-center">
                        Learn with us...
                    </Card.Text>
                </Card>

                <Row>
                    <Col>
                        <Card className="bg-secondary">
                            <Card.Body>
                            <Card.Title><strong>Languages</strong></Card.Title>
                            <Card.Text>Python, Javascript, Go, Elixir, PHP </Card.Text>
                            <hr/>
                            <Card.Title><strong>Framework and Runtime Environments</strong></Card.Title>
                            <Card.Text>NodeJS, ReactJS, Django, Flask, Phoenix, Laravel</Card.Text>
                            <hr/>
                            <Card.Title><strong>Databases / KV stores</strong></Card.Title>
                            <Card.Text>Postgresql, Mysql, MongoDB, Cassandra, Redis </Card.Text>
                            <hr/>
                            <Card.Title><strong>Design tools</strong></Card.Title>
                            <Card.Text>Redis, Apache Kafka, RabbitMQ  </Card.Text>
                            <hr/>
                            <Card.Title><strong>Others</strong></Card.Title>
                            <Card.Text>ML, Data structures...  </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="bg-secondary">
                            <Card.Body>
                            <Card.Title><strong>Journeys</strong></Card.Title>
                            <Card.Text> We have been doing this stuff for s varying number years in various fields</Card.Text>
                            <hr/>
                            <Card.Text> See our individual journeys <a href="journey">here</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                
            </div>
        );
    }
}
 
export default Home;