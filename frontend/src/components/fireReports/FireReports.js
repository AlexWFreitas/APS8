import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import FireReportTable from "../../components/fire_reports/FireReportTable";

const FireReports = () => {

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
    <div className="container">
      <FireReportTable/>
    </div>
  );
};

export default FireReports;
