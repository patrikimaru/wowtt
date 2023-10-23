import "./CartPage.css";
import SearchBar from "../../../components/shared/SearchBar/SearchBar";
import React, { useState, useEffect, useCallback } from 'react';
import { auth } from "../../../auth/firebase";
import axios from "axios";

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(dateString);
  return date.toLocaleString(undefined, options);
};

const CartPage = () => {
  const [userData, setUserData] = useState({});
  const [userReservations, setUserReservations] = useState([]);
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

  const fetchUserReservations = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/reserve/getAll`
      );
      // Filter reservations for the current user
      const reservations = response.data.filter(reservation => reservation.userId === userData._id);
      setUserReservations(reservations);
    } catch (error) {
      console.error("Error fetching user reservations:", error);
    }
  }, [userData._id]);

  useEffect(() => {
    fetchUserData();
    fetchUserReservations();
  }, [fetchUserData, fetchUserReservations]);

  return (
    <section className="PageContainer">
      <h1>My Reservations</h1>
      <SearchBar />
      <section className="reservations">
        {userReservations.map((reservation) => (
          <div key={reservation._id}>
            <p>Package Name: {reservation.packageName}</p>
            <p>Location: {reservation.location}</p>
            <p>Start Date: {formatDate(reservation.startDate)}</p>
            <p>End Date: {formatDate(reservation.endDate)}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CartPage;
