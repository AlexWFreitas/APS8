import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import FireReportTableRow from "./FireReportTableRow";
import ReportService from "../../services/report.service";
import EventBus from "../../common/EventBus";

const FireReportTable = () => {

	const [reports, setReports] = useState([]);
	const [userReports, setUserReports] = useState([]);
	const [content, setContent] = useState("");

	useEffect(() => {
		ReportService.GetReports().then(
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


	return (

		<Table striped bordered hover style={{marginTop: "5rem"}}>
			<thead>
			<tr>
				<th>#</th>
				<th>Relato</th>
				<th>Criador</th>
				<th>Data do Relato</th>
			</tr>
			</thead>
			
			<tbody>
			{
			reports.map( (report) =>  (
				<FireReportTableRow key={report.id} report={report}/>
			))
			}
			</tbody>
		</Table>

	)
}

export default FireReportTable;