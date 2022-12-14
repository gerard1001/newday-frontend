import { GET_PRODUCTS, POST_PRODUCT } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case POST_PRODUCT:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };

    default:
      return state;
  }
};
