let users = [];
let nextId = 1;

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function addUser(userData) {
  const user = {
    id: nextId++,
    nomeUser: userData.nomeUser,
    telefone: userData.telefone,
    enderenco: userData.enderenco,
    complemento: userData.complemento,
    numeroResidencia: userData.numeroResidencia
  };

  users.push(user);
  return user;
}

function updateUser(id, userData) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return null;
  }

  const updatedUser = {
    ...users[index],
    nomeUser: userData.nomeUser,
    telefone: userData.telefone,
    enderenco: userData.enderenco,
    complemento: userData.complemento,
    numeroResidencia: userData.numeroResidencia
  };

  users[index] = updatedUser;
  return updatedUser;
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};