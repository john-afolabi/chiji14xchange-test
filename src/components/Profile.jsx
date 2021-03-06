import React from "react";
import ProfileWrapper from "../assets/styles/ProfileWrapper";
import { ReactComponent as People } from "../assets/images/svg/people.svg";
import { ReactComponent as Star } from "../assets/images/svg/star.svg";
import { ReactComponent as Location } from "../assets/images/svg/location.svg";
import { ReactComponent as Mail } from "../assets/images/svg/mail.svg";
import { ReactComponent as Link } from "../assets/images/svg/link.svg";

const Profile = ({ user }) => {
	return (
		<ProfileWrapper>
			<div className="clearfix d-flex d-md-block align-items-center mb-4 mb-md-0">
				<img
					src={user.avatarUrl}
					alt={user.login}
					className="profile-image img-fluid"
				/>

				<div className="vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3 px-md-0 js-sticky js-user-profile-sticky-fields">
					<h3>{user.name}</h3>
					<p className="username mb-0">{user.login}</p>
				</div>
			</div>

			<p className="bio">{user.bio}</p>
			<button className="mb-3">Edit profile</button>

			<span>
				<span className="px-1">
					<People />
					{user.followers.totalCount} followers
				</span>
				<span className="px-1">
					{user.following.totalCount} following
				</span>
				<span className="px-1">
					<Star />
					{user.starredRepositories.totalCount}
				</span>
			</span>

			<div className="mt-3">
				<p className="mb-1">
					<span className="mr-1 icon">
						<Location />
					</span>
					{user.location}
				</p>
				<p className="mb-1">
					<span className="mr-1 icon">
						<Mail />
					</span>
					{user.email}
				</p>
				<p className="mb-1">
					<span className="mr-1 icon">
						<Link />
					</span>
					{user.websiteUrl}
				</p>
			</div>
		</ProfileWrapper>
	);
};

export default Profile;
