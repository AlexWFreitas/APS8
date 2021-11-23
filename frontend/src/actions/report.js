import {

	SET_MESSAGE,

  } from "./types";
  
import ReportService from "../services/report.service";

export const getReports = () => (dispatch) => {
	return ReportService.getReports().then(
		(response) => {

		return Promise.resolve();
		},
		(error) => {
		const message =
			(error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message ||
			error.toString();

		dispatch({
			type: SET_MESSAGE,
			payload: message,
		});

		return Promise.reject();
		}
	);
};

export const getReport = (id) => (dispatch) => {
	return ReportService.getReport(id).then(
		(response) => {

		return Promise.resolve();
		},
		(error) => {
		const message =
			(error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message ||
			error.toString();

		dispatch({
			type: SET_MESSAGE,
			payload: message,
		});

		return Promise.reject();
		}
	);
};

export const register = (reportTitle, reportContent, location, idUser) => (dispatch) => {
	return ReportService.PostReport(reportTitle, reportContent, location, idUser).then(
		(response) => {
	
			dispatch({
			type: SET_MESSAGE,
			payload: response.data.message,
			});
	
			return Promise.resolve();
		},
		(error) => {
			
			const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString();
	
			dispatch({
			type: SET_MESSAGE,
			payload: message,
			});
	
			return Promise.reject();
		}
	);	
};
