import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/UserComponents/Login";
import Home from "./components/UserComponents/Home";
import { getLoggedInUserApi } from "./api/userApi";

import {
  loadUserFailed,
  loadUserRequest,
  loadUserSuccess,
} from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const getLoggedInUser = async () => {
      dispatch(loadUserRequest());
      const response = await (await getLoggedInUserApi()).data;
      if (response.success) {
        dispatch(loadUserSuccess(response));
      } else {
        dispatch(loadUserFailed(response));
      }
    };
    if (localStorage.getItem("token")) getLoggedInUser();
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            {!isAuthenticated ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
