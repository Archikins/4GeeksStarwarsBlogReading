import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Context } from "../store/appContext";



export const Demo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	return (
		<Container fluid >
			<Row >
				{store[params.category].map((item, index) => {


					return (
						<Col xs="12" sm="6" md="4" lg="3" xl="2" key={item.uid} style={{ marginBottom: '20px' }}>
							<Card className="bg-dark" style={{ width: '18rem' }}>
								<Card.Img variant="top" style={{ height: "300px", objectFit: "cover", objectPosition: "top center" }} src={item.image} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<div className="d-flex justify-content-between">

										<Link to={`${params.category}/${index}`} >
											<Button variant="dark" >Know More</Button>
										</Link>
										<Button variant="dark" onClick={(item.favorite) ? (() => actions.deleteFavorite(item.uid, params.category)) : (() => actions.addFavorite(item.uid, item.name, params.category, index))} style={(item.favorite) ? { color: 'red' } : { color: 'gray' }}><i className="fa-solid fa-heart"></i></Button>

									</div>

								</Card.Body>
							</Card>




						</ Col>




					);
				})
				}
			</ Row>

		</ Container>
	);
};
