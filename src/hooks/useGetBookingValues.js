import { useSelector } from "react-redux";

const useGetBookingValues = () => {
  const date = useSelector((state) => state.booking.date);
  const slotsAvailable = useSelector((state) => state.booking.slotsAvailable);
  const isActive = useSelector((state) => state.booking.isActive);
  const selected = useSelector((state) => state.booking.selected);
  const currentSelected = useSelector((state) => state.booking.currentSelected);
  const isSlotSelected = useSelector((state) => state.booking.isSlotSelected);
  const currentStep = useSelector((state) => state.booking.currentStep);
  const isLoading = useSelector((state) => state.booking.isLoading);
  const currentSelectedDate = useSelector(
    (state) => state.booking.currentSelectedDate
  );
  const selectRange = useSelector((state) => state.booking.selectRange);
  return {
    slotsAvailable,
    date,
    isActive,
    selected,
    currentSelected,
    isSlotSelected,
    currentStep,
    isLoading,
    currentSelectedDate,
    selectRange,
  };
};

export default useGetBookingValues;
