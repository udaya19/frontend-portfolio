import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/UserComponents/Login";
import Home from "./components/UserComponents/Home";
import { getLoggedInUserApi } from "./api/userApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadUserFailed,
  loadUserRequest,
  loadUserSuccess,
} from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
