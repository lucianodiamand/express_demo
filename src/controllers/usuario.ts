import { Request, Response } from "express";
import { getAllUsers, getById, save } from "../services/user";
import { User } from "../models/user";
import { findAll } from "../repositories/user";

export const getAll = (req: Request, res: Response) => {
  findAll();
  res.end();
};

export const getUser = (req: Request, res: Response) => {
  const user = getById(Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
};

export const saveUser = (req: Request, res: Response) => {
  const { nombre, apellido } = req.body;
  if (!nombre) {
    res.status(400).send("El nombre es requerido");
  } else if (!apellido) {
    res.status(400).send("El apellido es requerido");
  } else {
    const user = new User(nombre, apellido);
    save(user);
    res.status(201).end();
  }
};
