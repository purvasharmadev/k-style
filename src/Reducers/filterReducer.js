//  Filter reducer
function filterReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "SORT_BY_RANGE":
      return { ...state, range: action.payload };
    case "BY_TSHIRTS":
      return { ...state, TSHIRT: !state.TSHIRT };
    case "BY_POCA":
      return { ...state, POCA: !state.POCA };
    case "BY_ALBUM":
      return { ...state, Album: !state.Album };
    case "BY_LIGHTSTICKS":
      return { ...state, LightSticks: !state.LightSticks };
    case "BY_IDOL_FASHION":
      return { ...state, IdolFashion: !state.IdolFashion };
    case "BY_HOODIES":
      return { ...state, HOODIES: !state.HOODIES };
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
