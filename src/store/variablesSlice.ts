import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Variable {
  id: string;
  name: string;
  description: string;
  active: boolean;
}

interface VariablesState {
  variables: Variable[];
}

const initialState: VariablesState = {
  variables: [],
};

const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    setVariables(state, action: PayloadAction<Variable[]>) {
      state.variables = action.payload;
    },
    toggleVariable(state, action: PayloadAction<string>) {
      const variable = state.variables.find((v) => v.id === action.payload);
      if (variable) {
        variable.active = !variable.active;
      }
    },
  },
});

export const { setVariables, toggleVariable } = variablesSlice.actions;
export default variablesSlice.reducer; 