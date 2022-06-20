import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const TiposPokemones = () => {
	const [namePokemonTypes, setNamePokemonTypes] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/type/")
			.then((res) => res.json())
			.then((data) => {
				setNamePokemonTypes(data.results);
			});
	}, []);

	return (
		<Container>
			<h2>Tipos de Pokemon</h2>
			<Row xs={2} s={6} md={4} lg={3} xl={3}>
			{namePokemonTypes.map((namePokemonType) => (
					<Col key={namePokemonType.name}>
						<NombreTipo>{namePokemonType.name}</NombreTipo>
					</Col>
			))}
			</Row>
		</Container>
	);
};

const NombreTipo = styled.h2`
	text-align: center;
	margin-botton: 10px;
	font-size: 15px;
	text-transform: uppercase;
`;

export default TiposPokemones;
