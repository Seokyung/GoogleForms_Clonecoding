import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const PreviewFooter = () => {
	const onSubmit = () => {
		console.log("submit survey");
	};

	const onRemove = () => {
		console.log("remove input data");
	};

	return (
		<Container>
			<Button
				variant="contained"
				onClick={onSubmit}
				sx={{
					padding: "0 1.5rem",
					minHeight: "36px",
				}}
			>
				제출
			</Button>
			<Button onClick={onRemove}>양식 지우기</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default PreviewFooter;
