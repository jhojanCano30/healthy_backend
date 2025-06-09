import prisma from '../config/prisma.js';

export const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock, imagenUrl, categoria, subcategoria } = req.body;

  try {
    const nuevoProducto = await prisma.producto.create({
      data: {
        nombre,
        descripcion,
        precio,
        stock,
        imagenUrl,
        categoria,
        subcategoria
      }
    });

    res.status(201).json({ mensaje: 'Producto creado exitosamente', producto: nuevoProducto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
};

export const listarProductos = async (req, res) => {
    try {
      const productos = await prisma.producto.findMany();
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener los productos' });
    }
  };

  export const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, imagenUrl, categoria, subcategoria } = req.body;
  
    try {
      const actualizado = await prisma.producto.update({
        where: { id: Number(id) },
        data: { nombre, descripcion, precio, stock, imagenUrl, categoria, subcategoria }
      });
  
      res.json({ mensaje: 'Producto actualizado', producto: actualizado });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar el producto' });
    }
  };

  export const eliminarProducto = async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.producto.delete({ where: { id: Number(id) } });
      res.json({ mensaje: 'Producto eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el producto' });
    }
  };
  