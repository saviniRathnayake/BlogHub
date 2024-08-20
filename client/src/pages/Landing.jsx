import React from 'react';
import Navigation from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FiSearch} from 'react-icons/fi';
import './Landing.css';

function Landing() {
  return (
    <div>
        <Navigation />
        <Container fluid className="bg bg-primary landing_wrapper text-light">
            <h1>Welcome to BlogHub</h1>
            <p>Explore number of blogs from various categories</p>
            <InputGroup className="mb-3 w-50">
                <InputGroup.Text id="basic-addon1" className="iconWrapper">
                    <FiSearch />

                </InputGroup.Text>
                <Form.Control type="search" className="landing_searchInput" placeholder="Search your blogs here..." />
            </InputGroup>
        </Container>
    </div>
  )
}

export default Landing