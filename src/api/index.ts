import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.BASE_URL;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

const headers = {
  'X-RapidAPI-Key': RAPIDAPI_KEY,
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
};

const config: AxiosRequestConfig = {
  headers: headers,
};

const getCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?model=corolla`, {
      params: {
        model: 'corolla',
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const CarsAPI = {
  getCars,
};
