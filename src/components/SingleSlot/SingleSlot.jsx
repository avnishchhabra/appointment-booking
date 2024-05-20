import React from "react";
import styles from "./singleSlot.module.css";
import CheckCircle from "../../assets/CheckCircle";
import { formatTime } from "../../utils";
import { useDispatch } from "react-redux";
import useGetBookingValues from "../../hooks/useGetBookingValues";
import { handleSelect } from "../../redux/slices/bookingSlice";
const SingleSlot = ({ slot, index, date }) => {
  const dispatch = useDispatch();
  const { currentSelected } = useGetBookingValues();
  const selected = index === currentSelected;
  const startTime = slot?.start_time;
  const endTime = slot?.end_time;
  return (
    <div
      className={`${styles.slot_wrapper} ${
        selected ? styles.selected_slot : ""
      }`}
      onClick={() =>
        dispatch(handleSelect({ index, date, startTime, endTime }))
      }
    >
      <div className={`${styles.left} ${selected ? styles.selected_text : ""}`}>
        {formatTime(slot?.start_time)} - {formatTime(slot?.end_time)}
      </div>
      {selected && <CheckCircle />}
    </div>
  );
};

export default SingleSlot;
