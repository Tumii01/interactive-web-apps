const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Log the holiday name for the given ID or a message indicating the ID has not been created
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

// Make a copy of Christmas
let copied = {...holidays[christmas] };

// Change the name to X-mas
copied.name = "X-mas Day";

// Set the time to midnight
let correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);

// Check if the new date is earlier than the current date
let isEarlier = correctDate.getTime() < holidays[christmas].date.getTime();
console.log("New date is earlier:", isEarlier);

// If the new date is earlier, update the copied object
if (isEarlier) copied.date = correctDate;

// Log the changes made to the copied object
console.log(
  `ID change: ${copied.id !== holidays[christmas].id}\n`,
`Name change: ${copied.name}\n`,
`Date change: ${copied.date.toLocaleDateString("en-ZA")}`
);

// Find the first and last holiday in the year and a random holiday date
let firstHoliday, lastHoliday, randomHoliday;
for (const holiday of Object.values(holidays)) {
  const holidayDate = new Date(holiday.date);
  if (!firstHoliday || holidayDate < firstHoliday) {
    firstHoliday = holidayDate;
  }
  if (!lastHoliday || holidayDate > lastHoliday) {
    lastHoliday = holidayDate;
  }
}
randomHoliday = new Date(firstHoliday.getTime() + Math.random() * (lastHoliday.getTime() - firstHoliday.getTime()));

// Log the dates in the required format
const CurrentYear = new Date().getFullYear();
console.log(`First holiday: ${firstHoliday.toLocaleDateString("en-ZA", { day: "2-digit", month: "2-digit", year: "numeric" })}/${CurrentYear}`);
console.log(`Last holiday: ${lastHoliday.toLocaleDateString("en-ZA", { day: "2-digit", month: "2-digit", year: "numeric" })}/${CurrentYear}`);

console.log(`Random holiday:${randomHoliday.toLocaleDateString("en-ZA",{day: "2-digit",month: "2-digit", year: "numeric"})}/${CurrentYear}`)

