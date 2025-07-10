import { Col, Row, Card } from 'react-bootstrap';
import '../aboutpage/AboutPage.scss';

const AboutPage = () => {
    return (
        <>
            <div className="aboutPageDiv">
                <div className="aboutTitleDiv">
                    <h2 className="title">About Me</h2>
                </div>

                <div className="aboutInfo">
                    <h4 style={{ color: 'white' }}>dsfsafs</h4>
                </div>
            </div>

            <div className="portfolioTitle">
                <h2 style={{ color: 'white' }}>My Work</h2>
            </div>

            <div className="gallery">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img className="cardImg" />
                            <Card.Title className="cardTitle"></Card.Title>
                            <Card.Text className="cardText"></Card.Text>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </>
    );
};

export default AboutPage;
