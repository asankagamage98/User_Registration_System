import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../api/AuthService";

/**
 * login action
 */
export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    // get login response
    const response = await AuthService.login(credentials);
    return response;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
});