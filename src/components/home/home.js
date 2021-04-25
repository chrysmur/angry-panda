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
                <Card className="bg-transparent border-transparent border-0">
                    <Card.Body>
                        <Card.Title><h2 className="text-info text-center"> Angry Panda Developer's Hub</h2></Card.Title>
                    
                        <Card.Text className="text-center">
                        <i className="fas fa-code"></i> {"<<<Left for animation>>>"}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Row>
                    <Col>
                        <Card className="bg-transparent">
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
                            <Card.Text>ML, Data structures and <a href="blog">much more </a>  </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="bg-transparent">
                            <Card.Body>
                            <Card.Title><strong>Journeys</strong></Card.Title>
                            <Card.Text> We have been doing this stuff for a varying number years in various fields, and we are not done yet...</Card.Text>
                            <hr/>
                            <Card.Text> See our individual journeys <a href="journey">here</a></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-transparent">
                            <Card.Body>
                            <Card.Title><strong>Rookie Corner</strong></Card.Title>
                            <Card.Text> Yeah, it can be tough to start</Card.Text>
                            <hr/>
                            <Card.Text> <a href="journey">Reach out</a>, and we will help you find the solution </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                
            </div>
        );
    }
}
 
export default Home;