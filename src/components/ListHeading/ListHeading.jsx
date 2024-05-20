import useGetBookingValues from "../../hooks/useGetBookingValues";
import styles from "./listHeading.module.css";

const ListHeading = () => {
  const { date, selectRange, slotsAvailable, isLoading } =
    useGetBookingValues();

  return (
    <>
      {slotsAvailable?.length > 0 ? (
        <>
          {date?.length > 0 && selectRange ? (
            <p className="text-center">
              {date[0].toDateString()}
              &nbsp;-&nbsp;
              {date[1].toDateString()}
            </p>
          ) : (
            <p className={styles.right_top_heading}>AVAILABLE SLOTS</p>
          )}
        </>
      ) : (
        <>
          {!isLoading && (
            <p className={styles.right_top_heading}>
              Please select a date to check available slot
            </p>
          )}
        </>
      )}
    </>
  );
};

export default ListHeading;
