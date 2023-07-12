import { UserI } from "../models/user";

let users: UserI[] = [];
let ids = 1;

export const getAllUsers = () => {
  return users;
};

export const save = (user: UserI) => {
  user.id = ids++;
  users.push(user);
};

export const getById = (id: number) => {
  return users.find(user => {
    return id === user.id;
  });
};
