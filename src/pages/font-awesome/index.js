import React, { useState } from "react";
import { Layout, Row, Input, Col } from "antd";
import styled from "styled-components";
import Icons from "./icons";
import Icon from "./icon";
const { Header } = Layout;
const { Search } = Input;

const Content = styled(Layout.Content)`
	display: flex;
	background: #fff;
	padding: 0 50px;
	@media (max-width: 800px) {
		padding: 0 10px;
	}
`;

const Page = () => {
	const [icons, setIcons] = useState(Icons);
	const onSearch = text => {
		const lower = text.toLowerCase();
		console.log(lower);
		const data = Icons.filter(({ name }) => name.toLocaleLowerCase().includes(lower));
		setIcons(data);
	};
	return (
		<Layout style={{ minHeight: "100vh" }} theme={"light"}>
			<Content>
				<div
					style={{
						flex: 1,
					}}>
					<Row justify="center" style={{ margin: 30 }}>
						<Col md={15} xs={24}>
							<Search
								placeholder="input search text"
								allowClear
								onSearch={onSearch}
								onChange={e => onSearch(e.target.value)}
								style={{ width: "100%" }}
							/>
						</Col>
					</Row>
					<Row gutter={24}>
						{icons.map(icon => (
							<Icon name={icon.name} icon={icon.icon} />
						))}
					</Row>
				</div>
			</Content>
			<Layout.Footer style={{ background: "#f2f2f2" }}>@ Oscar Sandoval</Layout.Footer>
		</Layout>
	);
};

export default Page;
