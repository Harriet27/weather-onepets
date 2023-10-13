export const formatDate = (inputDate) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateObj = new Date(inputDate);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const amOrPm = hours >= 12 ? 'P.M' : 'A.M';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDate = `${day} ${month} ${year}, ${formattedHours}:${formattedMinutes} ${amOrPm}`;

  return formattedDate;
}
