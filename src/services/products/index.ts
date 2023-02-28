import axios from 'axios';

const baseUrl = 'http://localhost:3004';

export const getProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/products`);
  return data;
}

export const getProduct = async (id: any) => {
    const { data } = await axios.get(`${baseUrl}/products/${id}`);
    return data;
    }

export const createProduct = async (product: any) => {
    const { data } = await axios.post(`${baseUrl}/products/`, product);
    return data;
    }

export const updateProduct = async (id: any, product: any) => {
    const { data } = await axios.put(`${baseUrl}/products/${id}`, product);
    return data;
    }

export const deleteProduct = async (id: any) => {
    const { data } = await axios.delete(`${baseUrl}/products/${id}`);
    return data;
    }
    