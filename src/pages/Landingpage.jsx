import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div className="container">
              <Row className="mt-5 align-items-center justify-content-between">
                  <Col lg={5} className="mb-4 mb-lg-0">
                      <h1 style={{color:"Black"}}>Welcome to Media Player</h1>
                      <p>
                        A media player is a software application that plays audio and video files, supports different formats, offers playback controls, playlists, subtitles, streaming features, and enhances the overall multimedia viewing experience.
                      </p>
                      <Link to={'/home '}><Button variant="info">Get Started</Button></Link>
                    </Col>
                  <Col lg={5}>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/595/889/non_2x/hand-holding-smartphone-watch-video-streaming-online-video-media-player-on-mobile-phone-cartoon-flat-illustration-isolated-in-white-background-vector.jpg"
                      alt="Media Player"
                      className="img-fluid"
                    />
                  </Col>
              </Row>
            <div className='container mt-3 mb-5'>
          <h2 className='text-center' style={{color:"Black"}}> Features</h2>

          <div className='d-flex justify-content-between align-items-start mt-5 mb-5 flex-wrap'>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYCk9e8OU1sDoJkfZx3MlwRfKXKWmmyoCCA&s" />
              <Card.Body>
                <Card.Title style={{color:"Black"}} >Managing Videos</Card.Title>
                <Card.Text>
                  Define clear objectives to guide the entire video production process.
                </Card.Text>
                
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://5.imimg.com/data5/SELLER/Default/2021/9/XR/WT/VE/46019412/people-creating-video-1262-19844-jpg-500x500.jpg" />
              <Card.Body>
                <Card.Title style={{color:"Black"}} >Categorized Videio</Card.Title>
                <Card.Text>
                  The primary purpose of categorizing videos is to help in organizing.
                </Card.Text>
              
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://www.shutterstock.com/shutterstock/videos/3664582501/thumb/8.jpg?ip=x480" />
              <Card.Body>
                <Card.Title style={{color:"Black"}}>Watch History</Card.Title>
                <Card.Text>
                The concept of timekeeping dates back to ancient civilizations using devices like sundials and water clocks.
                </Card.Text>
              
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='container border border-3 d-flex align-items-center justify-content-center mt-5 p-3'>
          <div className='col-lg-5 ml-5'>
            <h4 className='text-center fw-bolder' style={{color:"Black"}}>Simple,Powerful & Fast</h4>
            <h6><span style={{color:"Black"}}>Play Everything</span>: Play Everything lets you enjoy all your songs and videos continuously without manually selecting each file, providing a seamless and uninterrupted media experience.</h6>
            <h6><span style={{color:"Black"}}>Categorize Videos</span>:Categorize Videos helps you organize your media into folders or categories, making it easy to find, browse, and play videos based on genre, date, or type.  </h6>
            <h6><span style={{color:"Black"}}>Managing Vedios</span>: Managing Videos lets you edit, delete, rename, or organize your media files efficiently, giving you full control over your video library</h6>
          </div>
          <div className='col-lg-5 ms-4'>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/O_UCdD7oPzI?si=7YVRPXY6JjETRfF4"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

        </div>


    </div>
    
    
    
  );
}

export default Landingpage;
