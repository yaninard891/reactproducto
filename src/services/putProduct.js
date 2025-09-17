const PRODUCTOS_API = import.meta.env.VITE_PRODUCTOS_API
const AUTH_API = import.meta.env.VITE_AUTH_API

export const putProducts = async (productId, body) => {

  
    const response = await fetch(`${PRODUCTOS_API}/${productId}`,{
        method: 'PUT',
        headers: {
            "content-type": "application/json",
            
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    return result;
  };