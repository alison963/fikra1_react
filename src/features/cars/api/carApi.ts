import api from "../../../shared/api/axios"

const BASE_URL = "http://localhost:8082";

export const getAllCars = async () => {

  const response = await api.get(`${BASE_URL}/api/cars-renting`);
  if (!response) {
    throw new Error("Failed to fetch cars");
  }
  return response.data;

}

export const getCarById = async (id : number) => {
  const response = await api.get(`${BASE_URL}/api/${id}`)

  if (!response) {
    throw new Error("Failed to fetch cars by Id");
  }
  return response.data;
}


