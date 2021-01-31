import styled from "styled-components";

const SubNavWrapper = styled.nav`
	a.nav-link {
		color: #24292e;

		&:hover {
			border-bottom: 2px solid rgba(209, 213, 218, 0.8);
		}
	}

	a.nav-link.active {
		font-weight: 600;
		border-bottom: 2px solid rgb(249, 130, 108);
	}

	span.repo-count {
		margin-left: 4px;
		color: #24292e;
		background-color: rgba(209, 213, 218, 0.5);
		font-size: 12px;
		font-weight: 500;
		line-height: 18px;
		border-radius: 2em;
		min-width: 20px;
		padding: 0px 6px;
		border: 1px solid transparent;
	}
`;

export default SubNavWrapper;
