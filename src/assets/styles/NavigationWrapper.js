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

		@media (max-width: 767px) {
			margin: 1rem 0;
			width: 100% !important;
		}
	}

	a.navbar-brand > span {
		color: white;
	}

	a.nav-link {
		color: #fff !important;
		font-weight: 600;

		@media (max-width: 767px) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.15);
			padding: 8px 0;
		}
	}

	a.nav-link:first-of-type {
		@media (max-width: 767px) {
			border-top: 1px solid rgba(255, 255, 255, 0.15);
		}
	}

	img.profile-image {
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
`;

export default NavigationWrapper;
