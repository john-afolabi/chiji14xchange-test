import React, { useState } from "react";
import RepoContainerWrapper from "../assets/styles/RepoContainerWrapper";
import RepoCard from "./RepoCard";
import { ReactComponent as Repositories } from "../assets/images/svg/repositories.svg";

const RepoContainer = ({ repos }) => {
	const [search, setSearch] = useState("");

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const filteredRepos = repos.filter((repo) => {
		return repo.node.name
			.toLocaleLowerCase()
			.indexOf(search.toLocaleLowerCase()) !== -1
			? repo
			: null;
	});

	return (
		<RepoContainerWrapper>
			<div className="my-4 d-block d-md-flex">
				<input
					name="search"
					type="search"
					autoComplete="off"
					placeholder="Find a repository..."
					className="form-control form-control-sm mb-3 mb-md-0 mr-md-3 flex-auto"
					onChange={handleChange}
				/>

				<div className="d-flex">
					<select
						className="form-control form-control-sm  mr-2"
						defaultValue={1}
					>
						<option value={1} disabled>
							Type: All
						</option>
						<option></option>
						<option>Public</option>
						<option>Private</option>
						<option>Sources</option>
						<option>Forks</option>
					</select>

					<select
						className="form-control form-control-sm flex-auto mr-2"
						defaultValue={1}
					>
						<option value={1} disabled>
							Language: All
						</option>
						<option>JavaScript</option>
						<option>HTML</option>
						<option>SCSS</option>
						<option>TypeScript</option>
						<option>Python</option>
					</select>

					<button className="new col">
						<span className="mr-1">
							<Repositories />
						</span>
						New
					</button>
				</div>
			</div>

			<RepoCard filteredRepos={filteredRepos} search={search} />
		</RepoContainerWrapper>
	);
};

export default RepoContainer;
