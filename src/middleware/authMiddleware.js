// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(403).json({ mensaje: 'Token inválido o expirado' });
  }
};

export const verificarAdmin = (req, res, next) => {
  if (req.usuario.rol !== 'ADMIN') {
    return res.status(403).json({ mensaje: 'Acceso denegado, solo admins' });
  }
  next();
};