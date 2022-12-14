import { GET_CATEGORY_CLASSES, ASSIGN_CLASS } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_CLASSES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case ASSIGN_CLASS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    default:
      return state;
  }
};
