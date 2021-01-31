import React from "react";
import RepoCardWrapper from "../assets/styles/RepoCardWrapper";
import { ReactComponent as Star } from "../assets/images/svg/star.svg";
import { ReactComponent as Fork } from "../assets/images/svg/fork.svg";
import { ReactComponent as License } from "../assets/images/svg/license.svg";
import moment from "moment";

const displayDate = (updatedDate) => {
	const a = moment(updatedDate);
	const b = moment();

	const dayDiff = b.diff(a, "days");

	const returnDate =
		dayDiff < 30
			? `Updated ${dayDiff} days ago`
			: `Updated on ${a.format("MMM D")}`;

	return returnDate;
};

const RepoCard = ({ filteredRepos, search }) => {
	return (
		<RepoCardWrapper>
			{!!search ? (
				<div className="d-flex justify-content-between border-bottom border-top color-border-secondary py-3 mt-4">
					<span>
						<strong>{filteredRepos.length}</strong> results for
						repositories matching <strong>{search}</strong>
					</span>
					<span>Clear filter</span>
				</div>
			) : null}
			{filteredRepos.map((data) => {
				const repo = data.node;
				return (
					<div
						className="r-card d-flex justify-content-between align-items-center py-4 border-bottom color-border-secondary"
						key={repo.id}
					>
						<div>
							<h4 className="name">{repo.name}</h4>
							{repo.parent ? (
								<p className="fork">
									Forked from {repo.parent.nameWithOwner}
								</p>
							) : null}
							<p className="description">{repo.description}</p>

							<div className="additional-info">
								{repo.languages.edges.length ? (
									<span className="mr-3">
										<span
											className="language-color mr-1"
											style={{
												backgroundColor: `${repo.languages.edges[0].node.color}`,
											}}
										></span>
										<span>
											{repo.languages.edges[0].node.name}
										</span>
									</span>
								) : null}

								{repo.forkCount || repo.parent ? (
									<span className="mr-3">
										<span className="mr-1">
											<Fork />
										</span>
										<span>
											{repo.forkCount ||
												repo.parent.forkCount}
										</span>
									</span>
								) : null}

								{repo.licenseInfo ? (
									<span className="mr-3">
										<span className="mr-1">
											<License />
										</span>
										<span>{repo.licenseInfo.name}</span>
									</span>
								) : null}

								<span>{displayDate(repo.pushedAt)}</span>
							</div>
						</div>

						<button>
							<span className="mr-2">
								<Star />
							</span>
							Star
						</button>
					</div>
				);
			})}
		</RepoCardWrapper>
	);
};

export default RepoCard;
