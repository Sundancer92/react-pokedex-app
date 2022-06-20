import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Inicio from "./components/Inicio";
import TiposPokemones from "./components/TiposPokemones";
import RandomPokemon from "./components/RandomPokemon";
import Post from "./components/Post";

import Error404 from "./components/Error404";

import "./App.css";
import styled from "styled-components";



const App = () => {
	return (
		<BrowserRouter>
			<ContenedorPrincipal>
        		<Header />

				<Main>
					<Routes>
						<Route path="*" element={<Error404 />} />
						<Route path="/" element={<Inicio />} />
						<Route path="/tipos-pokemones" element={<TiposPokemones />} />
							<Route path="/post/:id" element={<Post />} />
						<Route path="/random-pokemon" element={<RandomPokemon />} />
					</Routes>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`

const Main = styled.main`
  background-color: #fafafa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.1);
`

export default App;
