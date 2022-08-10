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



export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const finalValue = params.id
	const category = params.category
	const element = store[category][finalValue]


	

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
						Diameter: {element.info.properties.diameter}m
						<br></br>
						Rotation Period: {element.info.properties.rotation_period}
						<br></br>
						Orbital Period: {element.info.properties.orbital_period}
						<br></br>
						Gravity: {element.info.properties.gravity}
						<br></br>
						Population: {element.info.properties.population}
						<br></br>
						Climate: {element.info.properties.climate}
						<br></br>
						Terrain: {element.info.properties.terrain}
                        <br></br>
                        Surface water: {element.info.properties.surface_water}
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

Planets.propTypes = {
	match: PropTypes.object
};
