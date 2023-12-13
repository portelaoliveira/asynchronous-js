// const travel = true;
const travel = false;

const promise = new Promise((resolve, reject) => {
  console.log("Viagem");
  setTimeout(() => {
    if (travel) {
      resolve("Vamos viajar");
    } else {
      reject("Não vamos viajar");
    }
  }, 2000);
});

promise
  .then(response => {
    console.log(response);
    console.log("Massa");
  })
  .catch(error => console.log(error));
