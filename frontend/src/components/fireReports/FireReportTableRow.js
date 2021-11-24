import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReportService from "../../services/report.service";

const FireReportTableRow = (props) => {

	const dateString = props.report.createdDate;
	const dateParse = Date.parse(dateString);
	const date = new Date(dateParse);
	const { user: currentUser } = useSelector((state) => state.auth);

	const handleSubmitDelete = (id) => {
		ReportService.deleteReport(id).then(() => 
		{ 
		  props.getQueryStatus();
		});
	}

	const handleSubmitEdit = (report) => {

	}

	// Handle Click to Route
	const history = useHistory();

	const HandleClickEdit = (id, report) => {
		history.push(
			{
				pathname: `/reports/${id}/edit`,
				state: { report: report }
			}
		);
	};

	const filteredReports = props.userReports.filter(report => report.id === props.report.id);
		
	return (
		<tr>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.id}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.reportTitle}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.creatorName}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{(date.getUTCMonth() + 1 )+ "/" + date.getUTCDate()  + "/" + date.getUTCFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)}</Link></td>
			<td style={{display:"flex", gap:"0.5rem"}}>
				
				{
					( currentUser.roles.includes("ROLE_ADMIN") || (filteredReports.length > 0 && filteredReports[0].id === props.report.id) ? 
					<>
						<button className="btn btn-dark btn-block" onClick={() => HandleClickEdit(props.report.id, props.report)}>
							<span>Editar</span>
						</button>
					
						<button className="btn btn-dark btn-block" onClick={() => handleSubmitDelete(props.report.id)} >
							<span>Excluir</span>
						</button> 
					</> : null)
				}

			</td>
		</tr>
	)
}

export default FireReportTableRow;