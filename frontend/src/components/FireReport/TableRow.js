import React, { useState, useEffect } from "react";
const TableRow = (props) => {

	let dateString = props.report.createdDate;
	let dateParse = Date.parse(dateString);
	let date = new Date(dateParse);

	return (
	<tr>
		<td>{props.report.id}</td>
		<td>{props.report.reportTitle}</td>
		<td>{props.report.creatorName}</td>
		<td>{(date.getUTCMonth() + 1 )+ "/" + date.getUTCDate()  + "/" + date.getUTCFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)}</td>
	</tr>
	)
}

export default TableRow;