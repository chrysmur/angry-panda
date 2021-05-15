import React, {Component} from 'react';
import {Card, Row, Col, Container } from 'react-bootstrap'
import {useEffect, useState} from 'react';

import './bloghome.css'
import  {getAllBlog} from '../apis/api'


const BlogHome = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        let allBlog = getAllBlog()
        console.log(allBlog)
        setBlogs(allBlog.allBlog)
    }, [])
    return ( 
        <Container>
            <div>
                <strong className="blogtitle text-primary">Blog</strong>
            </div>
            
            <hr/>
            { blogs.map(blog=> {
                return (
                    <Card className="bg-transparent mainCard" key={blog.title}>
                        <Card.Header>
                            <Card.Title><strong className="text-info">{blog.title}</strong></Card.Title>
                            { blog.tags.map( tag =>{
                            <Card.Text key={tag}>{tag}</Card.Text>
                            })
                        }
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{blog.content.slice(0, 100)} ...</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="author">  {blog.author} | {blog.dateUpdated}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </Container>
        );
    }
 
export default BlogHome;