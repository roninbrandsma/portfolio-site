import { Col, Row } from 'react-bootstrap';
import '../aboutpage/AboutPage.scss';
import { PortfolioComponent } from './PortfolioComponent';

const AboutPage = () => {
  return (
    <>
      <div className="portfolioTitle">
        <h2 style={{ color: 'white' }}>My Work</h2>
      </div>

      <div className="gallery">
        <Row className="galleryRow">
          <Col className="galleryCol">
            <PortfolioComponent title={'Title'} text={'Text'} img={''} />
          </Col>
          <Col className="galleryCol">
            <PortfolioComponent title={'Title'} text={'Text'} img={''} />
          </Col>
        </Row>
        <Row className="galleryRow">
          <Col className="galleryCol">
            <PortfolioComponent title={'Title'} text={'Text'} img={''} />
          </Col>
          <Col className="galleryCol">
            <PortfolioComponent title={'Title'} text={'Text'} img={''} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutPage;
