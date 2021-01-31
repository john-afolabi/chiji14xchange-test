import React from "react";
import SubNavWrapper from "../assets/styles/SubNavWrapper";
import { ReactComponent as Overview } from "../assets/images/svg/overview.svg";
import { ReactComponent as Repositories } from "../assets/images/svg/repositories.svg";
import { ReactComponent as Projects } from "../assets/images/svg/projects.svg";
import { ReactComponent as Packages } from "../assets/images/svg/packages.svg";

const SubNav = ({ totalRepos }) => {
	return (
		<SubNavWrapper className="navbar navbar-expand">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item px-2">
					<a className="nav-link py-3" href="/">
						<span className="mr-1">
							<Overview />
						</span>
						<span>Overview</span>
					</a>
				</li>
				<li className="nav-item px-2">
					<a className="nav-link active py-3" href="/">
						<span className="mr-1">
							<Repositories />
						</span>
						<span>Repositories</span>
						<span className="repo-count">{totalRepos}</span>
					</a>
				</li>
				<li className="nav-item px-2">
					<a className="nav-link py-3" href="/">
						<span className="mr-1">
							<Projects />
						</span>
						<span>Projects</span>
					</a>
				</li>
				<li className="nav-item px-2">
					<a className="nav-link py-3" href="/">
						<span className="mr-1">
							<Packages />
						</span>
						<span>Packages</span>
					</a>
				</li>
			</ul>
		</SubNavWrapper>
	);
};

export default SubNav;
