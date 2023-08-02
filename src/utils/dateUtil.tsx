export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function getCurrentTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return `${month} ${day}, ${year}, ${hours}:${minutes < 10 ? "0" : ""
        }${minutes}`;
}