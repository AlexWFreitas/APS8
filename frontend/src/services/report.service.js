import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/reports/";

const getReports = () => {
  return axios.get(API_URL, { headers: authHeader() }

  );
};

const postReport = (reportTitle, reportContent, location, idUser) => {
	return axios.post(API_URL, 
		{ 
			reportTitle,
			reportContent,
			location,
			idUser,
		},
		{
			headers: authHeader(),
		}
	);
};

const updateReport = (reportTitle, reportContent, location, idReport) => {
	return axios.put(API_URL + `${idReport}`, 
		{ 
			reportTitle,
			reportContent,
			location,
		},
		{
			headers: authHeader(),
		}
	);
};


const getReport = (id) => {
	return axios.get(API_URL + `${id}`, 
		{ 
			headers: authHeader() 
		}
	);

}

const deleteReport = (id) => {
	return axios.delete(API_URL + `${id}` ,
		{
			headers: authHeader()
		}
	);	
}

export default {
  getReports,
  postReport,
  getReport,
  deleteReport,
  updateReport,
};
