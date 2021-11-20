import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/reports/";

const GetReports = () => {
  return axios.get(API_URL, { headers: authHeader() }

  );
};

const PostReport = (reportTitle, reportContent, location, idUser) => {
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

const GetReport = (id) => {
	return axios.get(API_URL + `${id}`, 
		{ 
			headers: authHeader() 
		}
	);

}

export default {
  GetReports,
  PostReport,
  GetReport
};
