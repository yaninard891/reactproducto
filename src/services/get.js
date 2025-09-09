export const PRODUCTOS_API = import.meta.env.VITE_PRODUCTOS_API;

export const getProductos = async () => {
  try {
    const response = await fetch(PRODUCTOS_API);
    if (!response.ok) throw new Error('Error al obtener productos');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error en getProductos:', error);
    return [];
  }
};