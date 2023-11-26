import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import Newsletter from "../Newsletter/Newsletter";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import './RightNav.css'

const RightNav = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className="my-2"><FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-primary"><FaGithub /> Login with Github</Button>
            </div>
            <div className="mt-4 mb-3 social-icons">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><Link to="#"><FaFacebook /> Facebook</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#"><FaTwitterSquare /> Twitter</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#"><FaInstagram /> Instagram</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#"><FaLinkedin /> Linkedin</Link></ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <Newsletter></Newsletter>
        </div>
    );
};

export default RightNav;