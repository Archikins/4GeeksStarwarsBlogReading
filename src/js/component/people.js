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



export const People = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const finalValue = params.id
    const category = params.category
    const element = store[category][finalValue]


    useEffect(() => {
        
        
        if (element?.info) actions.homeworld(finalValue, element?.info.properties.homeworld)

    }, [finalValue, element?.url, element?.info]);

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
                    <img src={element.image} style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top center" }}></img>
                </Col>
                <Col xs="12" sm="8">
                    <div className="display-1">{element.name}</div>
                    <div className="display-5 pb-5">
                        {element.info.description}
                    </div>

                    <p>
                        Height: {element.info.properties.height}cm
                        <br></br>
                        Mass: {element.info.properties.mass}kg
                        <br></br>
                        Hair Color: {element.info.properties.hair_color}
                        <br></br>
                        Skin Color: {element.info.properties.skin_color}
                        <br></br>
                        Eye Color: {element.info.properties.eye_color}
                        <br></br>
                        Birth year: {element.info.properties.birth_year}
                        <br></br>
                        Gender: {element.info.properties.gender}
                        <br></br>
                        Homeworld: {element.info.properties.homeworld_name}
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
People.propTypes = {
    match: PropTypes.object
};
