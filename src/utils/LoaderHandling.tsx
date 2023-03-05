import { Action } from "redux";

const requestStatus = (state:any,action:any) => {
    switch (action.type) {
      case "loading":
        return {
          loading: true,
        };
      case "success":
        return {
          loading: false,
        };
      case "error":
        return {
          loading: false,
        };
    }
  };
  export type Istate = {
    loading:boolean,
  }

  export const initial_state:Istate = {
    loading: false,
  };
  
  export default requestStatus;