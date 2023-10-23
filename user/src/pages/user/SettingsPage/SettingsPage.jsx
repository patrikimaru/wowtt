import { useState, useEffect, useCallback } from "react";
import "./SettingPage.css";
import { auth } from "../../../auth/firebase";
import { updateEmail } from "firebase/auth";

import axios from "axios";

const SettingsPage = () => {
  const [userData, setUserData] = useState({});
  const userCurrentEmail = auth.currentUser.email;

  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user/getOne/${userCurrentEmail}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [userCurrentEmail]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      phoneNumber: e.target.elements.phoneNumber.value,
    };

    try {
      await axios.put(`http://localhost:5000/user/update/${userCurrentEmail}`, updatedData);
      fetchUserData();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="user-panel">
        <p>{userData.firstName} {userData.lastName}</p>
        <p>{userData.email}</p>
        <p>{userData.phoneNumber}</p>
        <div className="container">
          <label>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            defaultValue={userData.firstName}
          />
        </div>
        <div className="container">
          <label>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            defaultValue={userData.lastName}
          />
        </div>

        <div className="container">
          <label>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+639123456789"
            defaultValue={userData.phoneNumber}
          />
        </div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default SettingsPage;
