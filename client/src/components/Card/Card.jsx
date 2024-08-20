import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BlogCard({src,title,description,category}) {
  return (
    <Card>
        <Card.Img variant="top" src={src} style={{height:'40vh',objectFit:'cover' }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Badge bg="primary">{category}</Badge>
              <Card.Text>
                {description.slice(0,200)}...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="mx-auto d-block">View More</Button>
            </Card.Footer>
    </Card>
  )
}

export default BlogCard