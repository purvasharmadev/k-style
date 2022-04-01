//  Filter reducer
function filterReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "SORT_BY_RANGE":
      return { ...state, range: action.payload };
    case "BY_Tshirt":
      return { ...state, Tshirt: !state.Tshirt };
    case "BY_POCA":
      return { ...state, POCA: !state.POCA };
    case "BY_Albums":
      return { ...state, Album: !state.Album };
    case "BY_LightSticks":
      return { ...state, LightSticks: !state.LightSticks };
    case "BY_IdolFashion":
      return { ...state, IdolFashion: !state.IdolFashion };
    case "BY_Hoodies":
      return { ...state, Hoodies: !state.Hoodies };
    case "BY_RATING":
      return { ...state, rating: action.payload };
    case "search_query":
      return { ...state, search_query: action.payload };
    case "CLEAR_FILTERS":
      return {
        sort: "",
        range: 0,
        rating: "",
        search_query: "",
        POCA: false,
        Album: false,
        LightSticks: false,
        IdolFashion: false,
        TSHIRT: false,
        HOODIES: false,
      };

    default:
      return state;
  }
}

export { filterReducer };
