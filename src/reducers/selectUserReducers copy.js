const initialState = {
  items: [],
  selected: [],
  sorted: [],
};

const selectUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, items: action.payload };

    case "USER_SELECTED":
      return { ...state, selected: action.payload };

    case "DELETE_USER":
      return {
        ...state,
        selected: state.selected.filter((item) => item.id !== action.payload),
      };

    case "ASC_USERS":
      return {
        ...state,
        sorted: action.payload.sort((a, b) =>
          a.company.name > b.company.name ? 1 : -1
        ),
      };

    case "DESC_USERS":
      return {
        ...state,
        sorted: action.payload.sort((a, b) =>
          a.company.name > b.company.name ? -1 : 1
        ),
      };

    default:
      return state;
  }
};
export default selectUserReducer;
