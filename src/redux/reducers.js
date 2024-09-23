import { combineReducers } from 'redux';
import { HIGHLIGHT_PROJECT, GLOW_PAGE_BORDER } from './actionTypes';

const initialHighlightState = {
  highlightedProject: null,
};

const initialGlowState = {
  glowPageBorder: false,
};

const highlightReducer = (state = initialHighlightState, action) => {
  switch (action.type) {
    case HIGHLIGHT_PROJECT:
      return { ...state, highlightedProject: action.payload };
    default:
      return state;
  }
};

const glowReducer = (state = initialGlowState, action) => {
  switch (action.type) {
    case GLOW_PAGE_BORDER:
      return { ...state, glowPageBorder: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  highlight: highlightReducer,
  glow: glowReducer,
});

export default rootReducer;