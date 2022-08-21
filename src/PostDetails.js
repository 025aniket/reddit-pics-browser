import React, { useEffect, useState } from 'react'
import{useParams} from "react-router-dom";
import axios from 'axios';
import {Card} from 'react-bootstrap';


const PostDetails = () => {
    const { id } = useParams([])
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.reddit.com/comments/${id}/.json`)
             .then(function (response) {
                setDetails(response.data[0].data.children[0].data)
               console.log(response.data[0].data.children[0].data);
            })
        // console.log(id)
    },[id])
   
  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Img variant="top" src={details.thumbnail} />
        <Card.Body>
            <Card.Title>Image Title</Card.Title>
            <Card.Text>
              {details.title}
            </Card.Text>
            <Card.Title>Author name:</Card.Title>
            <Card.Text>
              {details.author_fullname}
            </Card.Text>
        </Card.Body>
    </Card>

  )
}

export default PostDetails