import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

const FireReportView = (props) => {
	const [content, setContent] = useState("");

	useEffect(() => {
		UserService.getUserBoard().then(
			(response) => {
			setContent(response.data);
			},
			(error) => {
			const _content =
				(error.response &&
				error.response.data &&
				error.response.data.message) ||
				error.message ||
				error.toString();

			setContent(_content);

			if (error.response && error.response.status === 401) {
				EventBus.dispatch("logout");
			}
			}
		);
	}, []);
	
	if (content != "Authenticated")
	{
	return (
		<div className="container">
			<header className="jumbotron">
				<h3>{content}</h3>
			</header>
		</div>
		);
	}

	return (
		<div class="card text-center">
			<div class="card-header">
				Featured
			</div>
			<div class="card-body">
				<h5 class="card-title">Special title treatment</h5>
				<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
			<div class="card-footer text-muted">
				2 days ago
			</div>
		</div>

	)
}

export default FireReportView;