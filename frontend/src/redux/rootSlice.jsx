import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  portfolioData: null,
  reloadData: false,
};

// //Get the data
// export const loadExistingData = createAsyncThunk(
//   ("root/load",
//   async (data, thunkAPI) => {
//     try {
//     } catch (error) {}
//   })
// );

const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    ShowLoading: (state, action) => {
      state.loading = true;
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },

    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
  },

  extraReducers: (builder) => {},
});

export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } =
  rootSlice.actions;

export default rootSlice.reducer;
