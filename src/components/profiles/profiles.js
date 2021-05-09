import React, {Component} from 'react';
import {Card, Row, Col } from 'react-bootstrap'
import TextAnimation from 'react-animate-text';

import  {getProfile} from '../apis/api'


const Profile = (username) => {
    const {profileData} = getProfile(username)
    return ( 
        <div className="container" >
            <Card className="bg-transparent text-center" style={{alignment:"Center", width:"25rem", textAlign: "center"}}>
                <Card.Header>
                    <Card.Img style={{width:100, height: 100}} src={profileData.image}/>
                    <Card.Title> {profileData.name} </Card.Title>
                    <Card.Text>{profileData.title}</Card.Text>
                </Card.Header>
                <Card.Body>
                    {profileData.summary}
                </Card.Body>
            </Card>
            </div>
        );
    }
 
export default Profile;