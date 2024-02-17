import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const HomePage = () => {
    return(
        <>            
            <div className="homeCards">
                <div className="homeCardDiv">
                    <Card className="Cards" style={{backgroundColor:'#212529'}}>
                        <h3 className="subtitle"></h3>    
                        <Card.Body></Card.Body>
                    </Card>  
                </div>

                <div className="homeLinkDiv">
                    <Link to="/portfolio">
                        <Card className="homeLinkTop">
                            <Card.Img src="holder.js/598px163" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>                    
                    </Link>

                    <Link to="/contact">
                        <Card className="homeLinkBtm">
                            <Card.Img src="holder.js/598px163" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>                    
                    </Link>
                </div>
            </div>
        </>
    )
} 

export default HomePage