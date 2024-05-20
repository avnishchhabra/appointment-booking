import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOneDay, formatDate } from "../../utils";
import { getSlotsApi } from "../../api/api";

const initialState = {
  number: 0,
  slotsAvailable: [],
  date: new Date(),
  isActive: false,
  selected: "30 min",
  currentSelected: null,
  isSlotSelected: false,
  currentStep: 1,
  isLoading: false,
  currentSelectedDate: "",
  selectRange: false,
};

export const fetchSlots = createAsyncThunk(
  "booking/fetchSlots",
  async (date, { rejectWithValue }) => {
    try {
      const formattedDate = formatDate(date);
      const endDate = formatDate(addOneDay(date));
      const result = await getSlotsApi(formattedDate, endDate);
      if (result?.status === 200) {
        return result.data;
      }
      return rejectWithValue("Failed to fetch slots");
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setIsSelected: (state, action) => {
      state.selected = action.payload;
    },
    setIsActive: (state, action) => {
      console.log("acc", action);
      state.isActive = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setIsSlotSelected: (state, action) => {
      state.isSlotSelected = action.payload;
    },
    setSelectRange: (state, action) => {
      state.selectRange = action.payload;
    },
    clearState: () => {
      return initialState;
    },
    handleSelect: (state, action) => {
      console.log("ac", action);
      state.isSlotSelected = true;
      state.currentSelectedDate = {
        date: action.payload.date,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
      };
      state.currentSelected = action.payload.index;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlots.pending, (state, action) => {
        state.currentSelected = null;
        state.isSlotSelected = false;
        state.isLoading = true;
        state.date = action.payload;
        state.selectRange = true;
      })
      .addCase(fetchSlots.fulfilled, (state, action) => {
        state.isLoading = false;
        state.slotsAvailable = action.payload;
      })
      .addCase(fetchSlots.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error fetching slots:", action.payload);
      });
  },
});

export const {
  setDate,
  setIsSelected,
  setIsActive,
  setCurrentStep,
  setIsSlotSelected,
  setSelectRange,
  clearState,
  handleSelect,
} = bookingSlice.actions;

const bookingReducer = bookingSlice.reducer;
export default bookingReducer;
