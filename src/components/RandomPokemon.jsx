import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RandomPokemon = () => {
	const [randomPokemon, setRandomPokemon] = useState([]);

    const [randomNumber, setRandomNumber] = useState(0);

    const fetchPokemon = async (a) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`);
        const data = await response.json();
        setRandomPokemon(data);
    }

    const randomNumberGenerator = () => {    
        const number = (Math.floor(Math.random() * 1000) + 1).toString()
        setRandomNumber(number);
        console.log(randomNumber)
    }

    
	useEffect(() => {
        fetchPokemon(randomNumber);
	}, [randomNumber]);

	return (
		<div>
            {randomPokemon ?
            <div>
                {randomPokemon.sprites ?
                <div>
                    <Titulo>{randomPokemon.name}</Titulo>
                    <Sprite src={randomPokemon.sprites.front_default} alt={randomPokemon.name} />
                    <div>
                        <Boton onClick={() => randomNumberGenerator()}>Randomizer</Boton>
                    </div>
                </div>
                    :
                    <Boton onClick={() => randomNumberGenerator()}>Randomizer</Boton>
                }
            </div>
            : 
            <div>
                {randomNumberGenerator()}
            </div>
        }
		</div>
	);
};

const Titulo = styled.header`
	text-align: center;
	margin-botton: 10px;
	font-size: 26px;
	text-transform: uppercase;
`;

const Sprite = styled.img`
    display: block;
    margin: 0 auto;
    width: 170px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000;
`

const Boton = styled.button`
    display: block;
    margin: 10px auto;
    background-color: #165168;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    &:hover {
        background-color: green;
    }
`

export default RandomPokemon;
