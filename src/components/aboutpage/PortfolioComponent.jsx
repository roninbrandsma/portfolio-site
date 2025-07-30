import '../aboutpage/AboutPage.scss';
import { Card } from 'react-bootstrap';

export const PortfolioComponent = ({ title, text, img }) => {
    return (
        <Card className="portfolioItem">
            <Card.Img className="cardImg" src={img} />
            <Card.Title className="cardTitle">{title}</Card.Title>
            <Card.Text className="cardText">{text}</Card.Text>
        </Card>
    );
};
