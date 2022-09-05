import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Chat.module.css'
// import styles2 from '../../styles/Answers.module.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default function Chat() {

    return (
        
        
            <div className={styles.answers}>
                <Container>
                    <Row>
                        <Col md={9} sm={12} xs={12}>
                            <div className={styles.answers_left}>
                                <div className={styles.up}>
                                    <p>Baleno (2015-2021)</p>
                                    <p>Safety</p>
                                </div>
                                <div className={styles.tab_box}>
                                    <h3>Q. How safe is Baleno Zeta on highways?</h3>
                                    <p className={styles.follow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                                            2.1K Views 
                                        <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                             Add Answer
                                    </p>
                                </div>
                              
                                <div className={styles.answers_box}>
                                    <p>7 Answers</p>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                               <h1> P</h1>
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Priya </span> | 3 month ago</h5>
                                                <div class={styles.trapezoid}></div>
                                                <div className={styles.ans_details}>
                                                    <h6>All variants of baleno comes with standard safety equipment like dual airbags ebd abs...,etc if search on intement
                                                        there are some vidioe showimg alot off damage on baleno in minor accidents,this is beacuse every manufacture have different approch
                                                        safety,in maruti case they gave alot of crumple zone to absor any hints. if you openhood andsee engine bay there is alot of space btwn 
                                                        radiator and engine, in petrol its huge. this crumple zone gets damaged in small accidents also but cost of repair is not high.My bumper 
                                                        got hit once(pretty bad). cost to replace it is 8k for entire piece.Compara...Read More
                                                    </h6>
                                                </div>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  5 <span> |     
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                            </div> 
                                            <h5>Add your answer</h5>
                                                     
                                <Form className={styles.item}>
    <Form.Group className="mb-3" controlId="example.controlTextarea1">
        <Form.Control as="textarea" row={3} placeholder="Have some thing to say..."/>
    </Form.Group>
    </Form>
    <div className={styles.btn_box}>
        <Button>Cancel</Button>
        <Button> Submit</Button>
    </div>

                                        </Col>
                                    </Row>
                                </div>
      
                                <div className={styles.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <h1>P</h1>
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Priya </span> | 3 years ago</h5>
                                                <h6>Its pretty safe..2 air bags are not enough though!But ABS is intuitive and driving dynamics(ride and handling) are very stable
                                                    triple digit speed is a breeze affair! But still drive  slow and safely!</h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <h1>P</h1>
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Priya </span> | 3 years ago</h5>
                                                <h6> Very safe even at highspeed car maintain its stabilits ABS works well</h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>

                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <h1>P</h1>
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Priya </span> | 3 years ago</h5>
                                                <h6>safe and secure car beacuse the abs work perfectly https://WWW.Zigheels.com /newcars/Maruti-Suzuki
                                                    /Baleno/specifications </h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>

                                                </div>
                                            </div>
                                <p><span> View more Answer<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.4483a.5.5 0 0 1-.223-.67z"/>
</svg></span></p>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                
                                
                            </div>
                          
                            

                         <div className={styles.bold1}> 
                     <div className= {styles.text_box1}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-quote-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
</svg> 
<h1 className={styles.bold}>Add your Answer
<div>
<Form className={styles.form}>
    <Form.Group className="mb-3" controlId="example.controlTextarea1">
        <Form.Control as="textarea" row={10} placeholder="Have somethings to say..."/>
    </Form.Group>
    
</Form>
<div className={styles.Button}>
    <Button>Submit Answer</Button>

</div>
</div>
</h1>
 </div>                    
      </div>
             <div className={styles.answer_box}>
                    <h1>From the Community</h1>
                    <Carousel responsive={responsive}>
  <div  className={styles.Form_box}>

    <h5> Q. what is the difference between 2018 petrol Baleno..
    </h5>
    <div className={ styles. Form_box2}>
        <h1>P</h1>
        <p> Asked by Hanumantappa Budhilal 4 Answer </p>
    </div>
  </div>
  
  <div  className={styles.Form_box}>
    <h5> Q. what is the difference between 2018 petrol Baleno..
    </h5>
    <div className={styles.Form_box2}>
        <h1>P</h1>
        <p> Asked by Hanumantappa Budhilal 4 Answer </p>
    </div>
  </div>

  <div  className={styles.Form_box}>
    <h5> Q. what is the difference between 2018 petrol Baleno..
    </h5>
    <div className={ styles.Form_box2}>
        <h1>P</h1>
        <p> Asked by Hanumantappa Budhilal 4 Answer </p>
    </div>
  </div>
   
  
                   <div  className={styles.Form_box}>
                        <h5> Q. what is the difference between 2018 petrol Baleno..
                        </h5>
                        <div className={styles.Form_box2}>
                            <h1>P</h1>
                            <p> Asked by Hanumantappa Budhilal 4 Answer </p>
                        </div>
                    </div>
   <div  className={styles.Form_box}>
    <h5> Q. what is the difference between 2018 petrol Baleno..
    </h5>
    <div className={styles. Form_box2}>
        <h1>P</h1>
        
        <p> Asked by Hanumantappa Budhilal 4 Answer </p>
    </div>
  </div>
</Carousel>

<div className={styles.vns_box}>
    <h4> Community Disscusion</h4>

</div>
<Form className={styles.form}>
    <Form.Group className="mb-3" controlId="example.controlTextarea1">
        <Form.Control as="textarea" row={10} placeholder="Related Question"/>
    </Form.Group>
    
</Form>


                    </div>           
      
                  </Col>
                  
                        <Col md={3} sm={12} xs={12}>
                            <div className={styles.answers_right}>
                                <div className={styles.trending}>
                                    <h3>Trending Royal Enfield Bikes</h3>
                                    <h3><a href="#">View All</a></h3>
                                </div>
                                <div className={styles.trending_box}>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car1.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>scarpio</h4>
                                                    <p>Rs. 12 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car2.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>swift</h4>
                                                    <p>Rs. 6.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car3.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>scarpio</h4>
                                                    <p>Rs. 10 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car4.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>Alto</h4>
                                                    <p>Rs. 3.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car5.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4> lgnis</h4>
                                                    <p>Rs. 5.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car1.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>Bullet 350</h4>
                                                    <p>Rs. 5.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car3.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>wagnor</h4>
                                                    <p>Rs. 1.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles.tre_box}>
                                                    <img src="/car2.jfif" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles.tre_box}>
                                                    <h4>Desire</h4>
                                                    <p>Rs. 3.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


    )
}