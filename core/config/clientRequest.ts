import axios from "axios";
import { site } from "./site";
import { signOut } from "next-auth/react";

/**
 * Creates an Axios instance with a predefined base URL.
 */
const instance = axios.create({
  baseURL: site.urls.public.api,
});

/**
 * Axios request interceptor.
 * - Removes empty query parameters (`""` or `undefined` values).
 */
instance.interceptors.request.use(
  async (request) => {
    if (request.params && Object.keys(request.params).length) {
      for (const key of Object.keys(request.params)) {
        if (request.params[key] === "" || request.params[key] === undefined) {
          delete request.params[key]; // Remove empty parameters
        }
      }
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Axios response interceptor.
 * - Directly returns the response.
 * - Handles errors by forwarding them for centralized error handling.
 */
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.data?.statusCode === 401) {
      await signOut();
    }

    return Promise.reject(error);
  }
);

export { instance as clientRequest };
