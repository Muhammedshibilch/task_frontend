import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';

const Auth = ({ setUser, insideRegister }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    number: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (userInput.username && userInput.password && userInput.email) {
      try {
        const result = await registerAPI(userInput);
        if (result.status === 200) {
          alert(`Welcome ${result.data?.username}, Please login to explore!`);
          navigate("/");
          setUserInput({ username: "", email: "", password: "" });
        } else if (result.response.status === 406) {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (userInput.password && userInput.email) {
      try {
        const result = await loginAPI(userInput);
        if (result.status === 200) {
          const userData = result.data.user;
          
          sessionStorage.setItem("user", JSON.stringify(userData));
          sessionStorage.setItem("token", result.data.token);
          setUser(userData);

          navigate("/userprofile");
          setUserInput({ username: "", email: "", password: "" });
        } else if (result.response.status === 404) {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-300 w-96">
        <h2 className="text-xl font-semibold text-center mb-4">
          {insideRegister ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Please {insideRegister ? 'sign up' : 'log in'} to continue
        </p>

        {insideRegister && (
          <>
            <MDBInput
              value={userInput.username}
              onChange={e => setUserInput({ ...userInput, username: e.target.value })}
              label="Username"
              type="text"
              className="mt-2"
            />
            <MDBInput
              value={userInput.number}
              onChange={e => setUserInput({ ...userInput, number: e.target.value })}
              label="Phone Number"
              type="text"
              className="mt-2"
            />
          </>
        )}

        <MDBInput
          value={userInput.email}
          onChange={e => setUserInput({ ...userInput, email: e.target.value })}
          label="Email"
          type="text"
          className="mt-2"
        />
        <MDBInput
          value={userInput.password}
          onChange={e => setUserInput({ ...userInput, password: e.target.value })}
          label="Password"
          type="password"
          className="mt-2"
        />

        {insideRegister ? (
          <div className="mt-4">
            <button onClick={register} className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-800 transition duration-300">
              Create Account
            </button>
            <p className="mt-2 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 font-medium hover:underline">
                Login here
              </Link>
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <button onClick={login} className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-800 transition duration-300">
              Login
            </button>
            <p className="mt-2 text-center text-gray-600">
              Create a new account?{" "}
              <Link to="/register" className="text-blue-500 font-medium hover:underline">
                Click here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
