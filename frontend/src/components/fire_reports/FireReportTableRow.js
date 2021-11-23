import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FireReportTableRow = (props) => {

	let dateString = props.report.createdDate;
	let dateParse = Date.parse(dateString);
	let date = new Date(dateParse);

	return (
		<tr>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.id}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.reportTitle}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{props.report.creatorName}</Link></td>
			<td><Link to={`/reports/${props.report.id}`} className="text-reset text-decoration-none">{(date.getUTCMonth() + 1 )+ "/" + date.getUTCDate()  + "/" + date.getUTCFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)}</Link></td>
		</tr>
	)
}

export default FireReportTableRow;