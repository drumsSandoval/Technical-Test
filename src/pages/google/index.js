import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Page from "./page";

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	height: 100%;
	align-items: center;
	margin-top: 5%;
	@media (max-width: 800px) {
		margin-top: 20%;
	}
	flex-direction: column;
`;

const Logo = styled.img`
	width: 18%;
	@media (max-width: 800px) {
		width: 200px;
	}
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	padding: 0.8em 3em;
	border-radius: 30px;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background: transparent;
	transition: all 0.3s ease;
	font-size: 16px;
	word-wrap: break-word;
	&:hover {
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
		border-color: transparent;
	}
`;

const Form = styled.form`
	width: 584px;
	margin: 25px;
	@media (max-width: 800px) {
		width: 320px;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	position: relative;
	top: -35px;
	font-size: 16px;
	left: 550px;
	color: gray;
	cursor: pointer;
	@media (max-width: 800px) {
		left: 280px;
	}
	&:hover {
		color: red;
	}
`;

const Button = styled.button`
	border-radius: 4px;
	border: 1px solid transparent;
	padding: 0 16px;
	margin: 11px 4px;
	min-width: 54px;
	height: 36px;
	outline: none;
	user-select: none;
	text-align: center;
	text-transform: capitalize;
	font-size: 14px;
	line-height: 24px;
	display: inline-block;
	cursor: pointer;
	&:hover {
		color: "#f2f2f2";
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
		opacity: 0.85;
		border-color: "#f2f2f2";
	}
`;

const Google = () => {
	const [search, setSearch] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		return window.location.replace(`https://www.google.com/search?q=${search}`);
	};
	return (
		<Page>
			<Container>
				<Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" />
				<Form onSubmit={handleSubmit}>
					<div>
						<FontAwesomeIcon
							icon={faSearch}
							style={{
								position: "relative",
								top: 40,
								fontSize: 16,
								color: "gray",
								left: 20,
								cursor: "pointer",
							}}
						/>
						<Input onChange={e => setSearch(e.target.value)} />
						<Icon icon={faMicrophone} />
					</div>
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Button type="submit">Google Search</Button>
						<Button type="button">I'm feeling lucky</Button>
					</div>
				</Form>
			</Container>
		</Page>
	);
};

export default Google;
