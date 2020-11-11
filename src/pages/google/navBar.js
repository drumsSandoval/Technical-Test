import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	margin-right: 30px;
	@media (max-width: 800px) {
		margin-right: 10px;
	}
`;

const Text = styled.div`
	margin-top: 5px;
	margin-right: 20px;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

const NavBar = () => {
	return (
		<Container>
			<Text>Gmail</Text>
			<Text>Imagenes</Text>
			<FontAwesomeIcon icon={faTh} style={{ fontSize: 18, marginRight: "20px", marginTop: 5, color: "gray", cursor: "pointer" }} />
			<Avatar size="large" style={{ cursor: "pointer" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
		</Container>
	);
};

export default NavBar;
