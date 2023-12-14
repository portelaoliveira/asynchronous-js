//user <= {}
//friends => ['joão', 'bruna', 'felipe', 'Lira'];
//photos <= ['egito', 'bahamas', 'maldivas', 'suécia']

const clc = require("cli-color");

function getUser() {
  console.log(clc.green("Recuperando informações do usuário"));
  const promise1 = new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 0, name: "Daniel", surname: "Porto" });
    }, 2000);
  });
  return promise1;
}

function getFriendList(user) {
  console.log(
    clc.green(
      "Recuperando lista de amigos do usuário ",
      clc.blue(`${user.name} ${user.surname}`)
    )
  );
  const promise2 = new Promise(resolve => {
    setTimeout(() => {
      resolve(["joão", "bruna", "felipe", "Lira"]);
    }, 2000);
  });
  return promise2;
}

// function getPhotos(username) {
//   console.log(
//     clc.green(
//       "Recuperando lista de fotos do usuário ",
//       clc.blue(`${username}`)
//     )
//   );
//   const promise3 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(["egito", "bahamas", "maldivas", "suécia"]);
//     }, 2000);
//   });
//   return promise3;
// }

function getPhotos(username) {
  console.log(
    clc.green(
      "Recuperando lista de fotos do usuário ",
      clc.blue(`${username}`)
    )
  );
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        "Não foi possível acessar as fotos. Usuário desabilitou o perfil."
      );
    }, 2000);
  });
  return promise3;
}

// Para usar o async/await, tem que ser criada uma função.

async function displayLiraPhotos() {
  try {
    const user = await getUser();
    const friends = await getFriendList(user);
    const photos = await getPhotos(friends[3]);
    console.log(clc.blue(photos));
  } catch (error) {
    console.log(clc.red(error));
  } finally {
    console.log(clc.yellow("Esse é o fim da comunicação com o instagram."));
  }
}

displayLiraPhotos();
