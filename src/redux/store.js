import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slices/bookingSlice";

export default configureStore({
  reducer: {
    booking: bookingSlice,
  },
});
