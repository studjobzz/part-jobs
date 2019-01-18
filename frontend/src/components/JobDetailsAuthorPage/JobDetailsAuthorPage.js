import React, { Component } from 'react';
import { Col, Row, Container, Button, Card, CardBody, CardTitle, CardText, CardImg, ListGroup, ListGroupItem } from 'reactstrap';
import './JobDetailsAuthor.css';
import pickMe from "./pickMe.jpg";

class JobDetailsAuthor extends Component {
	render() {
		return (
			<Container fluid className="jobDetailContainer">
				<Row className="coverRow">
					<Col className="cover"><p className="jobName">Junior Configuration Specialist<br /> <span className="companyName">Thomsons Online Benefits</span> </p></Col> {' '}
				</Row>
				<Row className="jobDetailRow">
					<Col sm={{
							size: 5,
							order: 2,
							offset: 1
						}} className="jobDetail"> 
						<b>Descrierea job-ului</b>
						<br /><br />
						As a Junior Configuration Specialist, you will be part of our Solutions Delivery team, and your role will be to implement Darwin by configuring it to meet our Client specific requirements.<br/>

						You will go through an intensive training (at the beginning of the role) - and after that, you will be able to configure Darwin, perform testing of configured functionality and help support post launch work for our Clients (Unit Testing, User Acceptance Testing).<br/>

						You will be closely working with our product Darwin™, a cloud-based global benefits management and employee engagement software, used by some of the world’s most innovative companies.
						<br /><br /><Button color="secondary">Inapoi</Button>					
					</Col>
					<Col sm={{
							size: 5,
							order: 2,
							offset: 1
						}} className="applicants">
						<Card className="applicantsCard">
							<CardImg top width="100%" src={pickMe} alt="Pick Me" />
							<CardBody>
							<CardTitle>Aplicanti</CardTitle>
							<CardText>
								<ListGroup className="aplicantsList">
									<ListGroupItem tag="a" href="#" className="applicant">Dapibus ac facilisis in</ListGroupItem>
									<ListGroupItem tag="a" href="#" className="applicant">Morbi leo risus</ListGroupItem>
								</ListGroup>
							</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
				</Container>
		);
	}
}

export default JobDetailsAuthor;
