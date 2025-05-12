import {
  AUTHECTICATION_FAILED,
  AUTHECTICATION_PENDING,
  AUTHECTICATION_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
} from "../actionTypes/auth";

import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
export const Authentication = (userData) => async (dispatch) => {
  dispatch({ type: AUTHECTICATION_PENDING });

  try {
    const res = await axios.post(`${baseURL}/auth/login`, userData);

    dispatch({ type: AUTHECTICATION_SUCCESS, payload: res.data });
    localStorage.setItem("User", JSON.stringify(res.data));
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.error("Login error:", error);
    dispatch({ type: AUTHECTICATION_FAILED });
  }
};

export const LogoutUser = () => async (dispatch) => {
  dispatch({ type: AUTHECTICATION_PENDING });

  try {
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Logout error:", error);
    dispatch({ type: AUTHECTICATION_FAILED });
  }
};

export const SignupUser = (userData) => async (dispatch) => {
  dispatch({ type: SIGNUP_PENDING });

  try {
    const res = await axios.post(`${baseURL}/auth/signup`, userData);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    localStorage.setItem("User", JSON.stringify(res.data));
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.error("Signup error:", error);
    dispatch({ type: SIGNUP_FAILED });
  }
};

