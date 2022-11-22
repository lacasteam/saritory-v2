import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";




class TestButton extends Component {
	render() {
		const { slug, buttonName} = this.props;
		return ( 
			<Link to={slug}>
				<Button variant="primary" className=''>{buttonName}</Button>
			</Link>
    );
  }
}
 
export default TestButton;