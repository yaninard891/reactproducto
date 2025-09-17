const PRODUCTOS_API = import.meta.env.VITE_PRODUCTOS_API
const AUTH_API = import.meta.env.VITE_AUTH_API

export const postProducts = async (body) => {

  
    const response = await fetch(`${PRODUCTOS_API}`,{
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer ${AUTH_API}"
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    return result;
  };