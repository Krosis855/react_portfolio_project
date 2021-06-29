import { UncontrolledAlert } from 'reactstrap';

function alertUser() {
    return (
        <UncontrolledAlert color="info">
            I am an alert and I can be dismissed!
        </UncontrolledAlert>
    );
}

export default alertUser;