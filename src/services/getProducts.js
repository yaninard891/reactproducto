export const PRODUCTOS_API = "https://integradorapi.onrender.com/producto";

export const getProducts = async () => {
  try {
    const response = await fetch("https://integradorapi.onrender.com/producto");
h
    if (!response.ok) throw new Error('Error al obtener productos');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error en getProductos:', error);
    return [];
  }
};
