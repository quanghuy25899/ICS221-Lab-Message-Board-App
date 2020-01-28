import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MessageList from './MessageList';
import MessageForm from './MessageForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [messages, setMessage] = React.useState([ 
    { "name": "Bill", "message": "Hi All!" },
    { "name": "Ann", "message": "ICS 221 is fun!" },
    { "name": "Johnny", "message": "I'm stranded!" },
    { "name": "Barb", "message": "Hi" },
    { "name": "Frank", "message": "Who's tired?" },
    { "name": "Sarah", "message": "I heart React" }
  ]);

  const callBack = (values) => {
    // messages.unshift(values);
    setMessage([values, ...messages]);
    console.log(messages);
  }

  return (
    <Container>
      <Row>
        <Col><Header header="ICS 221 Message Board App" /></Col>
      </Row>
      <br/>
      <MessageForm handleCallback={callBack}/>
      <br/>
      <Row>
        <Col><MessageList messages={messages}/></Col>
      </Row>
      <br/>
      <Row>
        <Col><Footer footer="&copy; Quang Pham" /></Col>
      </Row>
    </Container>
  );
}

export default App;
