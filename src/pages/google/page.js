import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import NavBar from "./navBar";
import Footer from "./footer";

const { Header } = Layout;

const Content = styled(Layout.Content)`
	display: flex;
	background: #fff;
	padding: 0 50px;
	@media (max-width: 800px) {
		padding: 0 10px;
	}
`;

const Page = props => {
	return (
		<Layout style={{ minHeight: "100vh" }} theme={"light"}>
			<Header style={{ background: "#fff", padding: 0 }}>
				<NavBar />
			</Header>
			<Content>
				<div
					style={{
						flex: 1,
					}}>
					{props.children}
				</div>
			</Content>
			<Layout.Footer style={{ background: "#f2f2f2" }}>
				<Footer />
			</Layout.Footer>
		</Layout>
	);
};

export default Page;
