import React, {Component} from 'react';
import {Card, Row, Col } from 'react-bootstrap'
import TextAnimation from 'react-animate-text';


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
                            <div style={{}}>
                                <TextAnimation>
                                    <span style = {{ color:"yellow", background:'black'}}>$ </span>
                                    <strong style={{ color:'green', background:'black' }}>npm run start</strong>
                                </TextAnimation>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Row>
                    <Col>
                        <Card className="bg-transparent">
                            <Card.Body>
                            <TextAnimation charInterval='20'>   
                                <Card.Title><strong className="text-info">Languages</strong></Card.Title>
                                <Card.Text>Python, Javascript, Go, Elixir, PHP </Card.Text>
                                <hr/>
                                <Card.Title><strong className="text-info">Framework and Runtime Environments</strong></Card.Title>
                                <Card.Text>NodeJS, ReactJS, Django, Flask, Phoenix, Laravel</Card.Text>
                                <hr/>
                                <Card.Title><strong className="text-info">Databases / KV stores</strong></Card.Title>
                                <Card.Text>Postgresql, Mysql, MongoDB, Cassandra, Redis </Card.Text>
                                <hr/>
                                <Card.Title><strong className="text-info">Tools</strong></Card.Title>
                                <Card.Text>Redis, Apache Kafka, RabbitMQ, Docker, Kubernetes, TravisCI, Jenkins, CircleCI, Git  </Card.Text>
                                <hr/>
                                <Card.Title><strong className="text-info">Others</strong></Card.Title>
                                <Card.Text>Machine Learning,Hadoop, Apache Spark, Apache Storm <a href="blog">much more </a>  </Card.Text>
                            </TextAnimation>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="bg-transparent">
                            <Card.Body>
                            <TextAnimation charInterval="30">
                                <Card.Title><strong className="text-info">Journeys</strong></Card.Title>
                                <Card.Text> We have been doing this stuff for a varying number years in various fields, and we are not done yet...</Card.Text>
                                <hr/>
                                <Card.Text> See our individual journeys <a href="journey">here</a></Card.Text>
                            </TextAnimation>
                            </Card.Body>
                        </Card>
                        <hr/>
                        <Card className="bg-transparent">
                            <Card.Body>
                            <TextAnimation charInterval="40">
                                <Card.Title><strong className="text-info">Rookie Corner</strong></Card.Title>
                                <Card.Text> Yeah, it can be tough to start</Card.Text>
                                <hr/>
                                <Card.Text> <a href="journey">Reach out</a>, and we will help you find the solution </Card.Text>
                            </TextAnimation>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                
            </div>
        );
    }
}
 
export default Home;