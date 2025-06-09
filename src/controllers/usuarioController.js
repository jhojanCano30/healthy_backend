// src/controllers/usuarioController.js
import prisma from '../config/prisma.js';

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: { id: true, nombre: true, correo: true, rol: true, creadoEn: true }
    });
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};
