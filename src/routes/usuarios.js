import express from 'express';
import { listarUsuarios, eliminarUsuario, actualizarPerfil } from '../controllers/usuarioController.js';
import { verificarToken, verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verificarToken, verificarAdmin, listarUsuarios);
router.delete('/:id', verificarToken, verificarAdmin, eliminarUsuario);
router.put('/perfil', verificarToken, actualizarPerfil);

export default router;