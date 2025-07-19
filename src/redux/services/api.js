import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "YOUR_API_BASE_URL", // Replace with your actual API base URL
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log("token12345: ", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  tagTypes: [],
   endpoints: (builder) => ({
    // Super Admin Login
    superAdminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useSuperAdminLoginMutation,
} = api;
