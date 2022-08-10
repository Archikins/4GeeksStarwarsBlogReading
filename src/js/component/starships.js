import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';



export const Starships = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const finalValue = params.id
	const category = params.category
	const element = store[category][finalValue]


	useEffect(() => {
		if (element?.info) actions.pilots(finalValue, element?.info.properties.pilots)
		
	}, [finalValue, element?.info]);

	if (!element || !element?.info) {
		return (
			<div>
				...loading
			</div>
		)
	}





	return (
		<Container>


			<Row >
				<Col xs="12" sm="4">
					<img src={element.image} style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top center"}}></img>
				</Col>
				<Col xs="12" sm="8">
					<div className="display-1">{element.name}</div>
					<div className="display-5 pb-5">
						{element.info.description}
						
					</div>
					
					<p>
						Model: {element.info.properties.model}
						<br></br>
						Starship Class: {element.info.properties.starship_class}
						<br></br>
						Cost in Credits: {element.info.properties.cost_in_credits}
						<br></br>
						Length: {element.info.properties.length}
						<br></br>
						Crew: {element.info.properties.crew}
						<br></br>
						Max atmosphering speed: {element.info.properties.max_atmosphering_speed}
						<br></br>
						Hyperdrive rating: {element.info.properties.hyperdrive_rating}
                        <br></br>
						MGLT: {element.info.properties.MGLT}
                        <br></br>
						Cargo capacity: {element.info.properties.cargo_capacity}
                        <br></br>
						Consumables: {element.info.properties.consumables}
						<br></br>
						Pilots: {element.info.properties.pilots_name}
					</ p>
				</Col>

			</ Row>
			<Row >
				<Col xs="12" sm="3">
					
				</Col>
				<Col xs="12" sm="6">
					
				</Col>

			</ Row>
		</Container>

	);



};

Starships.propTypes = {
	match: PropTypes.object
};
