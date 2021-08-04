const getRecievedEmail = (users, userLogedIn) =>
  users
    ?.filter((userToFilter) => userToFilter !== userLogedIn?.email)
    .toString();
export default getRecievedEmail;
