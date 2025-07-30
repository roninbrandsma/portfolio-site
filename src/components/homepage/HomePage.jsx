import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import code from '../../assets/code.png';
import '../homepage/Homepage.scss';
import { CardImg, Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <div className="homeDiv">
        <Container className="homeDescriptionCont">
          <Card className="description"></Card>
        </Container>
        <Container className="homeLinksCont">
          <div className="card-columns">
            <Link to="/portfolio">
              <Card className="firstLinkCard">
                <CardImg src={code} />
              </Card>
            </Link>
            <Link to="/contact">
              <Card className="secondLinkCard" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
