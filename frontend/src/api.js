/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { apiUrl } from "./config";

export const getProduct = async (id) => {
  try {
    const rawResponse = await fetch(`${apiUrl}/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const content = await rawResponse.json();
    if (rawResponse.statusText !== "OK") {
      throw new Error(content.message);
    }
    return content;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const signin = async ({ email, password }) => {
  try {
    const rawResponse = await fetch(`${apiUrl}/api/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await rawResponse.json();
    console.log(content);

    if (rawResponse.statusText !== "OK") {
      throw new Error(content.message);
    }
    return content;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const rawResponse = await fetch(`${apiUrl}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const content = await rawResponse.json();
    console.log(content);

    if (rawResponse.statusText !== "OK") {
      throw new Error(content.message);
    }
    return content;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
