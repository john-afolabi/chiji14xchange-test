import styled from "styled-components";

const RepoContainerWrapper = styled.div`
	button.new {
		color: #fff;
		background-color: #2ea44f;
		border-color: rgba(27, 31, 35, 0.15);
		box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
			inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
		transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
		transition-property: color, background-color, border-color;
		position: relative;
		display: inline-block;
		padding: 5px 16px;
		font: inherit;
		font-size: 14px;
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
`;

export default RepoContainerWrapper;
