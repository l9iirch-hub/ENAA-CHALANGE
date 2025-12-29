

// // let taxis = [
// //     { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 },
// //     { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 },
// //     { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 }
// // ];

// // let requests = [
// //     { reqId: 1, position: 10, duration: 3 },
// //     { reqId: 2, position: 3, duration: 4 },
// //     { reqId: 3, position: 18, duration: 2 },
// //     { reqId: 4, position: 7, duration: 5 }
// // ];

// // let waitingQueue = [];


// // function findClosestAvailableTaxi(req) {
// //     const available = taxis.filter(t => t.available);
// //     if (available.length === 0) return null;

// //     return available.reduce((closest, taxi) => {
// //         const d1 = Math.abs(taxi.position - req.position);
// //         const d2 = Math.abs(closest.position - req.position);
// //         return d1 < d2 ? taxi : closest;
// //     });
// // }

// // function assignTaxi(taxi, req, minute) {
// //     console.log(`Minute ${minute}:`);
// //     console.log(`→ Request ${req.reqId} at position ${req.position} → Taxi ${taxi.id} assigned (distance: ${Math.abs(taxi.position - req.position)})`);

// //     taxi.available = false;
// //     taxi.timeRemaining = req.duration;
// //     taxi.totalRides++;
// //     taxi.destination = req.position;
// // }

// // function releaseTaxi(taxi, minute) {
// //     taxi.available = true;
// //     taxi.position = taxi.destination;
// //     taxi.destination = null;

// //     console.log(`Minute ${minute}:\n→ Taxi ${taxi.id} finished ride`);
// // }



// let minute = 0;
// let reqIndex = 0;

// while (reqIndex < requests.length || waitingQueue.length > 0 || taxis.some(t => !t.available)) {


//     if (reqIndex < requests.length) {
//         const req = requests[reqIndex];
//         let taxi = findClosestAvailableTaxi(req);

//         if (taxi) {
//             assignTaxi(taxi, req, minute);
//         } else {
//             console.log(`Minute ${minute}:\n→ Request ${req.reqId} at position ${req.position} → all taxis busy → added to queue.`);
//             waitingQueue.push(req);
//         }
//         reqIndex++;
//     }


//     for (let taxi of taxis) {
//         if (!taxi.available) {
//             taxi.timeRemaining--;

//             if (taxi.timeRemaining === 0) {
//                 releaseTaxi(taxi, minute);

//                 if (waitingQueue.length > 0) {
//                     const next = waitingQueue.shift();
//                     assignTaxi(taxi, next, minute);
//                 }
//             }
//         }
//     }

//     minute++;
// }


// console.log(`Minute ${minute}:\nAll rides completed.`);
// console.log("--- Final Report ---");

// let total = 0;
// taxis.forEach(t => {
//     total += t.totalRides;
//     console.log(`Taxi ${t.id}: ${t.totalRides} rides, position ${t.position}`);
// });

// console.log(`Total rides: ${total}`);



0


let taxis = [
    { id: 1, position: 5, available: true, timeRemaining: 0, totalRides: 0 },
    { id: 2, position: 12, available: true, timeRemaining: 0, totalRides: 0 },
    { id: 3, position: 20, available: true, timeRemaining: 0, totalRides: 0 }
];
let requests = [
    { reqId: 1, position: 10, duration: 3 },
];

function findClosestAvailableTaxi(req) {
    const availble = taxis.filter(t=> t.available)
    if (availble.lenght  === 0 ) return null;0
 
}