import { IMeta, ITeam } from "../../types";
import { tagTypes } from "../teg-types";
import { baseApi } from "./baseApi";

const TEAM_URL = "/team";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    teams: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (arg: Record<string, any>) => {
        return {
          url: TEAM_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ITeam[], meta: IMeta) => {
        return {
          teams: response,
          meta,
        };
      },
      providesTags: [tagTypes.team],
    }),
    // teams: build.query({
    //   query: () => {
    //     return {
    //       url: TEAM_URL,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: [tagTypes.team],
    // }),

    team: build.query({
      query: (id) => ({
        url: `${TEAM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.team],
    }),

    addTeam: build.mutation({
      query: (Data) => ({
        url: TEAM_URL,
        method: "POST",
        data: Data,
      }),
      invalidatesTags: [tagTypes.team],
    }),

    updateTeam: build.mutation({
      query: (data) => ({
        url: `${TEAM_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.team],
    }),

    deleteTeam: build.mutation({
      query: (id) => ({
        url: `${TEAM_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.team],
    }),
  }),
});

export const {
  useTeamsQuery,
  useTeamQuery,
  useAddTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamApi;
