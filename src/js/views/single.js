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
import { Planets } from "../Component/planets"
import { People } from "../Component/people"
import { Starships } from "../Component/starships"



export const Single = props => {
	const { store, actions } = useContext(Context);
    const params = useParams();
    const finalValue = params.id
    const category = params.category
    const element = store[category][finalValue]


    useEffect(() => {
        
        if (element?.url) actions.loadSingular(finalValue, category, element.url)
       

    }, [finalValue, element?.url]);
	
	if (category === 'planets') {
		return <Planets  />
	}
	if (category === 'people') {
		return <People  />
	}
	if (category === 'starships') {
		return <Starships  />
	}
	


};

Single.propTypes = {
	match: PropTypes.object
};
