// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1500);
//   }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3500);
//   }, 2000);
// });

// Promise.all([promise1, promise2]).then(console.log);

// async function generatetotalPrice() {
//   const startTime = Date.now();
//   const price1 = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1500);
//     }, 2000);
//   });
//   const price2 = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3500);
//     }, 2000);
//   });
//   const endTime = Date.now();
//   console.log(`ElapsedTime ${endTime - startTime}ms`);
//   console.log([price1, price2]);
// }

// async function generatetotalPrice() {
//   const startTime = Date.now();
//   Promise.all([
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1500);
//       }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(3500);
//       }, 2000);
//     }),
//   ])
//     .then(console.log)
//     .then(() => {
//       const endTime = Date.now();
//       console.log(`ElapsedTime ${endTime - startTime}ms`);
//     });
// }

// generatetotalPrice();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Código do primeiro alunos");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Código do primeiro alunos");
  }, 2300);
});

Promise.race([promise1, promise2]).then(console.log);
