import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Form} from "react-bootstrap";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div class="card" style={{width: "28rem"}}>
        <div class="card-body">
          <h5 class="card-title">Profile Page</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">User - {currentUser.username}</li>
          <li class="list-group-item">Name - {currentUser.fullName}</li>
          <li class="list-group-item">Email - {currentUser.email}</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
