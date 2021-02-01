import Navigation from "./components/Navigation";
import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Profile from "./components/Profile";
import SubNav from "./components/SubNav";
import RepoContainer from "./components/RepoContainer";

const githubUsername = process.env.REACT_APP_GITHUB_USERNAME;

const query = gql`{
	user(login: "${githubUsername}") {
		avatarUrl
		bio
		email
		followers {
		  totalCount
		}
		following {
		  totalCount
		}
		location
		login
		name
		websiteUrl
		repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, affiliations: OWNER) {
		  edges {
			node {
			  id
			  description
			  name
			  parent {
				nameWithOwner
				forkCount
			  }
			  licenseInfo {
				name
			  }
			  languages(orderBy: {field: SIZE, direction: DESC}, first: 1) {
				edges {
				  node {
					color
					name
				  }
				}
        }
			  pushedAt
			}
		  }
		  totalCount
		}
		starredRepositories {
		  totalCount
		}
  }
}
`;

const App = () => {
	return (
		<Query query={query}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Looks like we've got a problem...</p>;
				const { user } = data;
				return (
					<div className="App">
						<Navigation
							profileImage={user.avatarUrl}
							username={user.login}
						/>

						<div className="mt-4 position-sticky top-0 d-none d-md-block bg-white width-full border-bottom color-border-secondary">
							<div className="container-xl px-3 px-md-4 px-lg-5">
								<div className="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
									<div className="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0"></div>
									<div className="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
										<SubNav
											totalRepos={
												user.repositories.totalCount
											}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="container-xl px-3 px-md-4 px-lg-5">
							<div className="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
								<div className="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0 h-card mt-md-n5">
									<Profile user={user} />
								</div>

								<div className="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
									<RepoContainer
										repos={user.repositories.edges}
									/>
								</div>
							</div>
						</div>

						{console.log(user)}
					</div>
				);
			}}
		</Query>
	);
};

export default App;
