import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios" 
import { Button, Container, Row, Col, Card, Dropdown, DropdownButton} from 'react-bootstrap';


const GetImageList = () => {

    const [imageList, setImageList] = useState([])
    const [sortpost, setSortpost] = useState([])

    useEffect (()=>{
        if(imageList.length===0){
            axios.get('https://www.reddit.com/r/pics/.json?jsonp=')
            .then(function (response) {
               setImageList(response.data.data.children)
              console.log(response.data.data.children);
            })
        }  
    }, [imageList])

    useEffect(()=>{
        if(sortpost==='ups'){
            const arr = [...imageList].sort((x, y) => x.data.ups - y.data.ups)
            console.log(arr)
            setImageList(arr)
        }
        else if(sortpost==='total_awards_received'){
            const arr = [...imageList].sort((x, y) => x.data.total_awards_received - y.data.total_awards_received)
            console.log(arr)
            setImageList(arr)
        }
        else if(sortpost==='score'){
            const arr = [...imageList].sort((x, y) => x.data.score - y.data.score)
            console.log(arr)
            setImageList(arr)
        }
    },[sortpost])


  return (
    <Container>
            <DropdownButton
                style={{padding:'5px'}}
                alignRight
                title="Sort results"
                id="dropdown-menu-align-right"
                onSelect={(e)=>{setSortpost(e)}}>
              <Dropdown.Item eventKey="ups">by ups count</Dropdown.Item>
              <Dropdown.Item eventKey="total_awards_received">by total awards received</Dropdown.Item>
              <Dropdown.Item eventKey="score">by score</Dropdown.Item>
              <Dropdown.Item eventKey="viewcount">by viewcount</Dropdown.Item>
            </DropdownButton>
       <Row>
        {
            imageList && imageList.length>0 ? 
            imageList.map((item)=>{
                return (
                    <Col s="6" md="4" lg="3">
                        <Card style={{ width: '18rem', padding: '15px' }}>
                        <Link to={`/posts/${item.data.id}`}>
                            <Card.Img style={{ height: '286px' }} variant="top" src={item.data.thumbnail} />
                        </Link>
                        <Card.Body>
                        <Card.Title>Image Title</Card.Title>
                        <Card.Text style={{height:'96px'}}>
                          {item.data.title}
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                )
            }) : <div>no image found</div>
        }
       </Row>
    </Container>
    
  )
}

export default GetImageList