import Navigation from "./components/Navigation";
import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Profile from "./components/Profile";

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
				return (
					<div className="App">
						<Navigation profileImage={data.user.avatarUrl} />
						<Profile user={data.user} />
					</div>
				);
			}}
		</Query>
	);
};

export default App;
