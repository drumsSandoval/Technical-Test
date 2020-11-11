import React from "react";
import { Avatar, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => {
	return (
		<Col>
			<Row>
				<Avatar shape="square" size={140} icon={<FontAwesomeIcon icon={props.icon} />} style={{ cursor: "pointer" }} />
			</Row>
			<Row>
				<p style={{ textAlign: "center" }}>{props.name}</p>
			</Row>
		</Col>
	);
};

export default Icon;
