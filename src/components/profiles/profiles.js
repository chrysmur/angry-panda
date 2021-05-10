import React, {Component} from 'react';
import {Card, Row, Col, Container } from 'react-bootstrap'
import TextAnimation from 'react-animate-text';

import  {getProfile} from '../apis/api'


const Profile = (username) => {
    const {profileData} = getProfile(username)
    return ( 
        <Container>
            <Row>
            <Card className="bg-transparent  border-0" style={{width:"40rem"}}>
                <Card.Header>
                    <Card.Img style={{width:100, height: 100}} src={profileData.image}/>
                    <Card.Title> {profileData.name} </Card.Title>
                    <Card.Text>{profileData.title}</Card.Text>
                </Card.Header>
                <Card.Body>
                    {profileData.summary}
                </Card.Body>
                <Card.Text className="text-info">History</Card.Text>
                {
                    profileData.history.map(record => {
                        return <Card className="bg-transparent">
                            <Card.Body>
                                <Card.Text>{record.company}</Card.Text>
                                <Card.Text>{record.title}</Card.Text>
                                <Card.Text>{record.start}-{record.end}</Card.Text>
                                <Card.Text>Roles</Card.Text>
                                <ul>
                                {record.roles.map(role => {
                                    return <li>{role}</li>

                                })}
                                </ul>
                            </Card.Body>
                        </Card>
                    })
                }
            </Card>
            <Card className="bg-transparent"> Follow me
                <i className="text-info fa fa-twitter"/>
            </Card>
            </Row>
            </Container>
        );
    }
 
export default Profile;