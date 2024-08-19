import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

/**
 * Makes an HTTP request to the backend.
 *
 * NOTE: This call does not handle errors.
 * @returns The data received from the backend.
 */
const makeRequest = async <ResType>(
    config: AxiosRequestConfig
): Promise<ResType> => {
    const response: AxiosResponse<ResType> = await axiosInstance(config);
    return response.data;
};

export default makeRequest;
