import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {

	let dateString = props.report.createdDate;
	let dateParse = Date.parse(dateString);
	let date = new Date(dateParse);

	return (
	<tr>
		<td>{props.report.id}</td>
		<td><Link to={`/reports/${props.report.id}`}>{props.report.reportTitle}</Link></td>
		<td>{props.report.creatorName}</td>
		<td>{(date.getUTCMonth() + 1 )+ "/" + date.getUTCDate()  + "/" + date.getUTCFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)}</td>
	</tr>
	)
}

export default TableRow;