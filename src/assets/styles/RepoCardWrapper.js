import styled from "styled-components";

const RepoCardWrapper = styled.div`
	div.r-card:first-of-type {
		border-top: 1px solid #e1e4e8;
	}
	h4.name {
		color: #0366d6;
		font-weight: 600;
		font-size: 20px;

		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
	p.fork {
		font-size: 12px;
		display: inline-block;
		margin-bottom: 0.5rem;
		color: #586069;
	}

	button {
		color: #24292e;
		background-color: #fafbfc;
		box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
			inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
		transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
		transition-property: color, background-color, border-color;
		position: relative;
		display: inline-block;
		padding: 5px 16px;
		font: inherit;
		font-size: 12px;
		font-weight: 500;
		line-height: 20px;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		user-select: none;
		border: 1px solid #d1d5da;
		border-radius: 6px;
		appearance: none;
	}

	span.language-color {
		position: relative;
		top: 1px;
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	div.additional-info {
		font-size: 12px;
	}
`;

export default RepoCardWrapper;
