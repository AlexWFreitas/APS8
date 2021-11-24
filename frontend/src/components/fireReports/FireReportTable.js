import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap';

import FireReportTableRow from "./FireReportTableRow";

import ReportService from "../../services/report.service";
import UserService from "../../services/user.service";

import EventBus from "../../common/EventBus";

const FireReportTable = () => {

	const [reports, setReports] = useState([]);
	const [userReports, setUserReports] = useState([]);
	const [content, setContent] = useState("");
	const { user: currentUser } = useSelector((state) => state.auth);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [dataLoadedTwo, setDataLoadedTwo] = useState(false);

	useEffect(() => {
		ReportService.getReports().then(
		  (response) => {
			setReports(response.data);
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

	useEffect(() => {
		UserService.getUserReports(currentUser.id).then(
		  (response) => {
			setUserReports(response.data);			
			setDataLoaded(true);
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

	useEffect(() => {
		getQueryStatus();
	  }, []);
	
	const getQueryStatus = () => {
		ReportService.getReports().then(
			(response) => {
				setReports(response.data);
				setDataLoadedTwo(true);
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
	}

	dataLoaded ? console.log(userReports) : console.log("notLoaded");

	return (

		<Table striped bordered hover style={{marginTop: "5rem"}}>
			<thead>
			<tr>
				<th>#</th>
				<th>Relato</th>
				<th>Criador</th>
				<th>Data do Relato</th>
				<th>Ações</th>
			</tr>
			</thead>
			
			<tbody>
			{
				dataLoaded && dataLoadedTwo ? ( reports.map( (report, index) =>  (<FireReportTableRow key={report.id} report={report} getQueryStatus={getQueryStatus} userReports={userReports}/>))) 
							: null 
			} 
			</tbody>
		</Table>

	)
}

export default FireReportTable;