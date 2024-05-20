import React from "react";
import styles from "./form.module.css";
import IconRight from "../../assets/IconRight";
import IconDown from "../../assets/IconDown";
import SingleSlot from "../SingleSlot/SingleSlot";
import Loader from "../Loader/Loader";
import { formatDate, formatDateFull, formatTime } from "../../utils";
import CustomCalendar from "../Calendar/Calendar";
import ListHeading from "../ListHeading/ListHeading";
import useGetBookingValues from "../../hooks/useGetBookingValues";
import {
  clearState,
  setCurrentStep,
  setIsActive,
  setIsSelected,
} from "../../redux/slices/bookingSlice";
import { useDispatch } from "react-redux";

const availableSlots = [
  {
    id: 1,
    text: "30 min",
    value: 30,
  },
  {
    id: 2,
    text: "45 min",
    value: 45,
  },
  {
    id: 3,
    text: "60 min",
    value: 60,
  },
];

const Form = () => {
  const {
    isActive,
    selected,
    slotsAvailable,
    currentStep,
    isLoading,
    isSlotSelected,
    currentSelectedDate,
  } = useGetBookingValues();
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.content_container} ${
        currentStep === 2 ? styles.content_center : ""
      }`}
    >
      <div className={styles.main_content}>
        {currentStep === 1 && (
          <>
            <div className={styles.content_left_container}>
              <div className={styles.top}>
                <h3 className={styles.top_heading}>Test Service</h3>
                <p className={styles.region}>
                  <span className={styles.zone}>
                    <span className={styles.timezone}>Timezone</span>:{" "}
                  </span>
                  Asia/Kolkata
                </p>
              </div>
              <CustomCalendar />
            </div>
            <div className={styles.content_right_container}>
              <div className={styles.top}>
                <label className={styles.right_top_heading} for="slots">
                  Select From Variants
                </label>
                <div className={styles.dropdown}>
                  <div
                    onClick={() => {
                      const newValue = !isActive;
                      dispatch(setIsActive(newValue));
                    }}
                    className={styles.dropdown_btn}
                  >
                    {selected}
                    <span
                      className={`${isActive ? "" : styles.icon_down} ${
                        styles.select_icon
                      }`}
                    >
                      <IconDown />
                    </span>
                  </div>
                  <div
                    className={styles.dropdown_content}
                    style={{ display: isActive ? "block" : "none" }}
                  >
                    {availableSlots?.map((slot) => (
                      <div
                        onClick={(e) => {
                          dispatch(setIsSelected(slot?.text));
                          dispatch(setIsActive(!isActive));
                        }}
                        className={styles.item}
                      >
                        {slot?.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.right_bottom}>
                <ListHeading />
                <div className={styles.slot_list}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      {slotsAvailable?.map((slot, index) => {
                        return (
                          <>
                            <p className={styles.date}>
                              {formatDateFull(slot?.date)}
                            </p>
                            {slot?.slots?.map((item, index) => (
                              <>
                                <SingleSlot
                                  slot={item}
                                  date={slot?.date}
                                  index={index}
                                />
                              </>
                            ))}
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {currentStep === 1 && (
        <div className={styles.bottom}>
          <div className={styles.bottom_left}>
            Powered by{" "}
            <a
              target="_blank"
              className={styles.bottom_left_link}
              href="https://google.com"
            >
              APPOINTO
            </a>
          </div>
          {currentStep === 1 && (
            <div className={styles.bottom_right}>
              <button
                onClick={() => dispatch(setCurrentStep(2))}
                className={`${styles.next_btn} ${
                  !isSlotSelected ? styles.disabled_next_btn : ""
                }`}
                disabled={!isSlotSelected}
              >
                <span>Next</span>
                <IconRight />
              </button>
            </div>
          )}
        </div>
      )}

      {currentStep === 2 && (
        <div className={styles.success_container}>
          <h2 className={styles.success_heading}>Congratulations</h2>
          <p className={styles.para}>Your appointment has been booked at : </p>
          <div>
            <p className={styles.time_slot_para}>
              Date :{formatDate(currentSelectedDate?.date)}
            </p>
            <p className={styles.time_slot_para}>
              Time : {formatTime(currentSelectedDate?.startTime)} -{" "}
              {formatTime(currentSelectedDate?.endTime)}
            </p>
          </div>

          <button onClick={dispatch(clearState)} className={styles.back_btn}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
