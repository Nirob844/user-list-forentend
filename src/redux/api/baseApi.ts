import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../config/envConfig";
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../teg-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
