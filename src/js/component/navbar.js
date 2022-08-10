import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';

export const NavbarHead = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar className="navbar-dark bg-dark mb-3 justify-content-between ">

			<div className="ml-auto mx-5">
				<Link to="/">
					<button className="btn btn-dark ">HOME</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-dark">Planets</button>
				</Link>
				<Link to="/people">
					<button className="btn btn-dark">People</button>
				</Link>
				<Link to="/starships">
					<button className="btn btn-dark">Starships</button>
				</Link>
			</div>
			<div className=" mx-5">
				<NavDropdown title="Favorites" drop="start" id="basic-nav-dropdown" menuVariant="dark" className="bg-dark">
					{store.favorites.map((item, index) => {


						return (
							<div key={index} className="d-flex justify-content-between">


								<NavDropdown.Item   as={Link} to={`/${item.category}/${item.id}`}>


									{item.name}

								</NavDropdown.Item>
								<Button onClick={() => actions.deleteFavorite(item.uid, item.category)} variant="link">
									<i className="fa-solid fa-trash-can" style={{color:'red'}}></i>
								</Button>
							</div>
						)
					})}
				</NavDropdown>



			</div>
		</ Navbar>
	);
};
