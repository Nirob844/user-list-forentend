// teamSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TeamState {
  selectedUsers: string[]; // Assuming user IDs are strings
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  teamDetails: any; // Define the structure based on your requirements
}

const initialState: TeamState = {
  selectedUsers: [],
  teamDetails: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addUserToTeam: (state, action: PayloadAction<string>) => {
      state.selectedUsers.push(action.payload);
    },
    removeUserFromTeam: (state, action: PayloadAction<string>) => {
      state.selectedUsers = state.selectedUsers.filter(
        (userId) => userId !== action.payload
      );
    },
    clearTeam: (state) => {
      state.selectedUsers = [];
      state.teamDetails = null;
    },
  },
});

export const { addUserToTeam, removeUserFromTeam, clearTeam } =
  teamSlice.actions;

export const selectTeam = (state: RootState) => state.team;

export default teamSlice.reducer;
