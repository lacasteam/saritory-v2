import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BasicCard.styles.css';


class BasicCard extends Component {
	render() {
    const { image, title, description } = this.props;
		return ( 
      <Card style={{ width: '18rem'}} className='mt-3'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='line-clamp'>
            {description}
          </Card.Text>
          <Button variant="primary" className='w-100'>Read More</Button>
        </Card.Body>
      </Card>
    );
  }
}
 
export default BasicCard;