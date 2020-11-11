import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
`;

const Text = styled.div`
	margin-right: 20px;
	font-size: 12px;
	margin-top: 4px;
	@media (max-width: 800px) {
		font-size: 10px;
	}
	&:hover {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
`;

const Footer = () => {
	return (
		<Container>
			<Row>
				<Text>Mexico</Text>
			</Row>
			<Row justify="space-between" style={{ borderTop: "1px solid rgba(0,0,0,0.2)" }}>
				<Col>
					<Row>
						<Text>Publicidad</Text>
						<Text>Negocios</Text>
						<Text>Sobre Google</Text>
						<Text>Cómo funciona la Búsqueda</Text>
					</Row>
				</Col>

				<Col>
					<Row>
						<Text>Privacidad</Text>
						<Text>Condiciones</Text>
						<Text>Prefencias</Text>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
