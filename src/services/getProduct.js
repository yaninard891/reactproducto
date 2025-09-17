const PRODUCTOS_API = import.meta.env.VITE_PRODUCTOS_API


export const getProduct = async (ProductId) => {
  
    const response = await fetch(`${PRODUCTOS_API}/${ProductId}`);

    const result = await response.json();
    return result;
  };
