export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const addOneDay = (inputDate) => {
  const date = new Date(inputDate);

  date.setDate(date.getDate() + 1);

  return date;
};

export const formatTime = (inputDate) => {
  const date = new Date(inputDate);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = String(minutes).padStart(2, "0");

  const formattedTime = `${hours}:${minutes} ${amPm}`;

  return formattedTime;
};

export const tileDisabled = ({ activeStartDate, date, view }) => {
  return date < new Date();
};

export function getLastDateOfCurrentMonth() {
  const today = new Date(); // Get current date
  const year = today.getFullYear(); // Get current year
  const month = today.getMonth() + 1; // Get current month (0 indexed, so add 1)
  // To get the last date of the month, set the day to 0 of the next month
  const lastDate = new Date(year, month, 0);
  return lastDate; // Return the day part of the last date
}

export function formatDateFull(inputDate) {
  // Parse the input date
  const date = new Date(inputDate);

  // Array of day names and month names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day of the week, month, and date
  const dayName = days[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  // Format the date as desired
  return `${dayName}, ${monthName} ${day}`;
}
