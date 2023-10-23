import React, { useState, useEffect, useCallback } from 'react';
import { auth } from '../../../auth/firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReservationForm = (props) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [numberOfPerson, setNumberOfPerson] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const userCurrentEmail = auth.currentUser ? auth.currentUser.email : '';

  const totalPrice = props.price * numberOfPerson;

  const fetchUserData = useCallback(async () => {
    try {
      if (userCurrentEmail) {
        const response = await axios.get(`http://localhost:5000/user/getOne/${userCurrentEmail}`);
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [userCurrentEmail]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleNumberOfPersonChange = (event) => {
    const newNumberOfPerson = parseInt(event.target.value, 10);

    if (newNumberOfPerson > props.maxGroupSize) {
      setNumberOfPerson(props.maxGroupSize);
    } else if (newNumberOfPerson <= 0) {
      setNumberOfPerson(1);
    } else {
      setNumberOfPerson(newNumberOfPerson);
    }
  };

  const handleReservationSubmit = async (event) => {
    event.preventDefault();

    if (!auth.currentUser) {
      alert("You need to login first!");
      navigate('/login'); 
      return;
    }
    const reservationData = {
      userId: userData._id,
      tourId: props.tourId,
      startDate: startDate,
      endDate: endDate,
      packageName: props.packageName,
      location: props.location,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      numberOfPerson: numberOfPerson,
      price: totalPrice,
    };

    try {
      if (window.confirm("Are you sure that the details you entered are correct?")) {
        await axios.post('http://localhost:5000/reserve/create', reservationData);
        alert('You have successfully created a reservation!');
      }
    } catch (error) {
      alert('Error creating reservation');
    }
  };

  return (
    <form onSubmit={handleReservationSubmit}>
      <label htmlFor="startTime">Start Date: </label>
      <input
        name="startTime"
        type="datetime-local"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)} 
        required
      />
      <label htmlFor="endTime">End Date: </label>
      <input
        name="endTime"
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)} 
        required
      />
      <label htmlFor="numberOfPerson">Number of Person</label>
      <input
        name="numberOfPerson"
        type="number"
        value={numberOfPerson}
        onChange={handleNumberOfPersonChange}
        required
      />
      <p>Price per person: {props.price}</p>
      <p>Total Price: {props.price * numberOfPerson}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReservationForm;
