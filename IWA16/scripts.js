const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: new Date('2022-11-18T20:00:00.000Z'),
              time: [9, 7, 8, 6],
            },
            {
              date: new Date('2022-12-02T20:00:00.000Z'),
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: new Date('2022-11-18T20:00:00.000Z'),
              time: [10, 8, 3, 12],
            },
            {
              date: new Date('2022-11-25T20:00:00.000Z'),
              time: [6, 8, 9, 11],
            },
            {
              date: new Date('2022-12-02T20:00:00.000Z'),
              time: [10, 11, 4, 8],
            },
            {
              date: new Date('2022-12-09T20:00:00.000Z'),
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    // Extracts data from the 'response' object for the athlete
    const extractFrom = data.response.data[athlete];
    const firstName = extractFrom.firstName;
    const surname = extractFrom.surname;
    const races = extractFrom.races.length;
    // Creates a new document fragment to hold the HTML elements
    const fragment = document.createDocumentFragment();
    const list = document.createElement('dl');
    // Extracts the date of the latest race
    const date = new Date(extractFrom.races[races - 1].date);
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    // Extracts the time of the latest race and calculates the total time in minutes
    const [first, second, third, fourth] = extractFrom.races[races - 1].time;
    const total = first + second + third + fourth;
    // Calculates the hours and minutes of the total time
    const hours = Math.floor(total / 60);
    const minutes = total ;
    // Adds the athlete's information to the description list element
    list.innerHTML = `
      <dt><h2>Athlete:</h2> ${extractFrom.id}</dt>
      <dd>${firstName} ${surname}</dd>
      <dt>Total Races:</dt>
      <dd>${races}</dd>
      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>
      <dt>Total Time (Latest):</dt>
      <dd>${hours}:${minutes}</dd>
    `;
    // Appends the description list element to the document fragment
    fragment.appendChild(list);
    // Returns the HTML fragment with the athlete's information
    return fragment;
  }

  document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
  document.querySelector('[data-athlete = "SV782"]').appendChild(createHtml('SV782'));




















// // scripts.js

// const MONTHS = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ]
  
//   const data = {
//     response: {
//       requestType: "FETCH_ATHLETE_DATA",
//       requestBy: "ALL_MATCHING_ATHLETES",
//       forDisplay: "BEST_RACES",
  
//       data: {
//         NM372: {
//           firstName: "Nwabisa",
//           surname: "Masiko",
//           id: "NM372",
//           races: [
//             {
//               date: '2022-11-18T20:00:00.000Z',
//               time: [9, 7, 8, 6],
//             },
//             {
//               date: '2022-12-02T20:00:00.000Z',
//               time: [6, 7, 8, 7],
//             },
//           ],
//         },
  
//         SV782: {
//           firstName: "Schalk",
//           surname: "Venter",
//           id: "SV782",
//           races: [
//             {
//               date: '2022-11-18T20:00:00.000Z',
//               time: [10, 8, 3, 12],
//             },
//             {
//               date: '2022-11-25T20:00:00.000Z',
//               time: [6, 8, 9, 11],
//             },
//             {
//               date: '2022-12-02T20:00:00.000Z',
//               time: [10, 11, 4, 8],
//             },
//             {
//               date: '2022-12-09T20:00:00.000Z',
//               time: [9, 8, 9, 11],
//             },
//           ],
//         },
//       },
//     },
//   };
  
//   // Only edit below this comment
  
//   const createHtml = (athlete) => {
//     firstName, surname, id, races = athlete
//     [date], [time] = races.reverse()
  
//     const fragment = document.createDocumentFragment();
  
//     title = document.createElement(h2);
//     title= id;
//     fragment.appendChild(title);
  
//     const list = document.createElement(dl);
  
//     const day = date.getDate();
//     const month = MONTHS[date.month];
//     const year = date.year;
  
//     first, second, third, fourth = timeAsArray;
//     total = first + second + third + fourth;
  
//     const hours = total / 60;
//     const minutes = total / hours / 60;
  
//     list.innerHTML = /* html */ `
//       <dt>Athlete</dt>
//       <dd>${firstName surname}</dd>
  
//       <dt>Total Races</dt>
//       <dd>${races}</dd>
  
//       <dt>Event Date (Latest)</dt>
//       <dd>${day month year}</dd>
  
//       <dt>Total Time (Latest)</dt>
//       <dd>${hours.padStart(2, 0) minutes}</dd>
//     `;
  
//     fragment.appendChild(list);
//   }
  
//   [NM372], [SV782] = data
//   document.querySelector(NM372).appendChild(createHtml(NM372));
//   document.querySelector(SV782).appendChild(createHtml(SV782));