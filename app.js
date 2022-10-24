let users = [];

function register(
  username,
  email,
  password,
  suscriptionStatus,
  discordId,
  lessonsCompleted
) {
    let user = {
        username: username,
        email: email,
        password: password,
        suscriptionStatus: suscriptionStatus,
        discordId: discordId,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}

register(
  "molberda",
  "davidmollera@hotmail.com",
  "1234",
  "VIP",
  "Molberda#1234",
  [0, 1, 2]
  );
  
  register(
    "damolber",
    "danielmollera@hotmail.com",
    "1234555",
    "VIP",
    "damolber#1234",
    [0, 1, 2]
    );

  console.log(users[0]);