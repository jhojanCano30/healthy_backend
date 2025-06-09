import { Router } from 'express';
import { crearProducto, listarProductos,
    actualizarProducto,
    eliminarProducto } from '../controllers/productController.js';
import { verificarToken } from '../middleware/authMiddleware.js';
import { esAdmin } from '../middleware/rolMiddleware.js';

const router = Router();

router.post('/crear', verificarToken, esAdmin, crearProducto);
router.get('/listar', listarProductos);
router.put('/actualizar/:id', verificarToken, esAdmin, actualizarProducto);
router.delete('/eliminar/:id', verificarToken, esAdmin, eliminarProducto);

export default router;
