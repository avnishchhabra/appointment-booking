import { useDispatch } from "react-redux";
import useGetBookingValues from "../../hooks/useGetBookingValues";
import { fetchSlots } from "../../redux/slices/bookingSlice";
import { tileDisabled } from "../../utils";
import styles from "./calendar.module.css";
import Calendar from "react-calendar";

const CustomCalendar = () => {
  const { date } = useGetBookingValues();
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Calendar
        onChange={(newDate) => dispatch(fetchSlots(newDate))}
        values={date}
        tileDisabled={tileDisabled}
      />
    </div>
  );
};

export default CustomCalendar;
