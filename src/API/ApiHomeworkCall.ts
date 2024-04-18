import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ApiResponseModel } from '../Interfaces';


const ApiHomeworkCall= async (input: string): Promise<ApiResponseModel> => {
  try {
    const response = await axios.get<ApiResponseModel>(`https://localhost:7138/WeatherForecast/GetDataByString?request=${input}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default ApiHomeworkCall;