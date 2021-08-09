import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import Swal from "sweetalert2";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // alert("loginsuccess");
      history.push("/");
      return Swal.fire({
        icon: "success",
        title: "Login is Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch {
      setError("Failed to log in");
      // return Swal.fire({
      //   icon: "error",
      //   title: "Username/Password is Wrong",
      //   text: "Please try again!",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }

    setLoading(false);
  }

  return (
    <>
      <div className="contanier">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <p>* nb = Fitur yang ada sudah bisa digunakan semua</p>
    </>
  );
}
