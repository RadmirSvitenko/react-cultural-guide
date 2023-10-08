import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRegister, companyRegister } from "./registrationAPI";

// Создание асинхронного экшена для регистрации пользователя
export const userRegisterAsync = createAsyncThunk(
  "register/user",
  async (userData) => {
    const response = await userRegister(userData);
    return response.user;
  }
);

// Создание асинхронного экшена для регистрации компании
export const companyRegisterAsync = createAsyncThunk(
  "register/company",
  async (companyData) => {
    const response = await companyRegister(companyData);
    return response.company;
  }
);

const initialState = {
  user: {
    isLoading: false,
  },
  company: {
    isLoading: false,
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterAsync.pending, (state) => {
        state.user.isLoading = true;
      })
      .addCase(userRegisterAsync.fulfilled, (state) => {
        state.user.isLoading = false;
      })
      .addCase(userRegisterAsync.rejected, (state) => {
        state.user.isLoading = false;
      })
      .addCase(companyRegisterAsync.pending, (state) => {
        state.company.isLoading = true;
      })
      .addCase(companyRegisterAsync.fulfilled, (state) => {
        state.company.isLoading = false;
      })
      .addCase(companyRegisterAsync.rejected, (state) => {
        state.company.isLoading = false;
      });
  },
});

export const registerSelectors = {
  isUserRegisterLoading: (state) => state.register.user.isLoading,
  isCompanyRegisterLoading: (state) => state.register.company.isLoading,
};

export default registerSlice.reducer;
