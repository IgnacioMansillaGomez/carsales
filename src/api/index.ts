import { Car } from '@/types/Car.types';
import { FilterProps } from '@/types/filter.types';
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

const getCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        manufacturer: manufacturer,
        model: model,
        year: year,
        limit: limit,
        fuel: fuel,
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

const generateCarImageUrl = (car: Car, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export const CarsAPI = {
  getCars,
  generateCarImageUrl,
  updateSearchParams,
  deleteSearchParams,
};
