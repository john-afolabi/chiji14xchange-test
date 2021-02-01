import React, { useState } from "react";
import { ReactComponent as LogoWhite } from "../assets/images/svg/logo-white.svg";
import { ReactComponent as Notification } from "../assets/images/svg/notification.svg";
import { ReactComponent as Plus } from "../assets/images/svg/plus.svg";
import DefaultProfile from "../assets/images/png/profile.png";
import NavigationWrapper from "../assets/styles/NavigationWrapper";

const Navigation = ({ profileImage, username }) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<NavigationWrapper className="navbar navbar-expand-lg navbar-dark">
			<button
				className="navbar-toggler border-0"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded={!isNavCollapsed ? true : false}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<a className="navbar-brand" href="/">
				<span>
					<LogoWhite />
				</span>
			</a>

			<span className="d-lg-none">
				<Notification />
			</span>
			<div
				className={`${
					isNavCollapsed ? "collapse" : ""
				} navbar-collapse`}
				id="navbarSupportedContent"
			>
				<form className="form-inline my-lg-0">
					<span></span>
					<input
						placeholder="Search or jump to..."
						className="form-control form-control-sm"
						type="search"
						aria-label="Search"
					/>
				</form>

				<ul className="navbar-nav mr-auto">
					<li className="nav-item d-block d-lg-none">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Dashboard
							</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Pulls
							</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Issues
							</span>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Codespaces
							</span>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Marketplace
							</span>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Explore
							</span>
						</a>
					</li>
					<li className="nav-item d-block d-lg-none">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								Settings
							</span>
						</a>
					</li>
					<li className="nav-item d-block d-lg-none">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								<img
									src={
										profileImage
											? profileImage
											: DefaultProfile
									}
									alt="profile"
									className="profile-image mr-2"
								/>
								{username}
							</span>
						</a>
					</li>
				</ul>
				<div className="d-none d-lg-flex align-items-center justify-content-between">
					<div className="px-2">
						<Notification />
					</div>
					<div className="px-2">
						<Plus />
						<span className="dropdown-caret ml-1"></span>
					</div>
					<div className="px-2">
						<img
							src={profileImage ? profileImage : DefaultProfile}
							alt="profile"
							className="profile-image"
						/>
						<span className="dropdown-caret ml-1"></span>
					</div>
				</div>
			</div>
		</NavigationWrapper>
	);
};

export default Navigation;
