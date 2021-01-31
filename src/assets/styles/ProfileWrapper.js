import styled from "styled-components";

const ProfileWrapper = styled.div`
	img.profile-image {
		width: 260px;
		border-radius: 50%;
		height: auto;
		display: inline-block;
		overflow: hidden;
		line-height: 1;
		vertical-align: middle;
		margin: 16px 0;
	}
	h3 {
		font-weight: 600;
		font-size: 26px;
		line-height: 1.25;
	}
	p.username {
		font-size: 20px;
		font-style: normal;
		font-weight: 300;
		line-height: 24px;
		color: #586069;
	}

	p.bio {
		font-size: 16px;
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
		width: 100%;
	}

	span > span:not(:last-of-type)::after {
		content: "·";
		position: relative;
		left: 4px;
	}

	span.icon {
		color: #6a737d;
	}
`;

export default ProfileWrapper;
