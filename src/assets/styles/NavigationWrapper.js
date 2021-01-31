import styled from "styled-components";

const NavigationWrapper = styled.nav`
	background-color: #24292e;
	padding: 0.5rem 1.5rem;
	color: white;
	input {
		background-color: #24292e;
		font-weight: 400;
		padding: 4px 12px;
		border-radius: 6px;
		outline: none;
		width: 240px;
		border: 1px solid #444d56;
		margin-right: 8px;
	}

	a.navbar-brand > span {
		color: white;
	}

	a.nav-link {
		color: #fff;
		font-weight: 600;
	}

	img.profile-image {
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
`;

export default NavigationWrapper;
