import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img className='img-fluid' src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text... I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;