import { apiUrl } from "./config"

export const getProduct = async (id) => {
  try {
    const rawResponse = await fetch(`${apiUrl}/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const content  = await rawResponse.json();
    if (rawResponse.statusText !== 'OK') {
      throw new Error(content.message);
    }
    return content;
  } catch(err) {
    console.log(err);
    return { error: err.message };
  }
}
