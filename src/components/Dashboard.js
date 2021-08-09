import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import List from "./listdata";
import firebase from "firebase";
import "./Dashbord.css";
// import { List } from "../page";

export default function Dashboard() {
  const [parkir, setParkir] = useState([]);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const ref = firebase.firestore().collection("parkir");

  function getDataParkir() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setParkir(items);
    });
  }

  useEffect(() => {
    getDataParkir();
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      // alert("logOut success");
      history.push("/login");
      return Swal.fire({
        icon: "success",
        title: "LogOut is Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <h1>System Parkir</h1>
      <hr />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      {/* <br></br> */}
      <br></br>
      <div>
        <button className="logout" variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <br></br>
      <List />
      <br />
      <br />
      <br />
      <br />
      <p>
        * nb = Fitur yang ada sudah bisa digunakan semua, Namun belum membuat
        fitur Add, Edit dan Delete
      </p>
    </>
  );
}
