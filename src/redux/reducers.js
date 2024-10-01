import { combineReducers } from 'redux';
import {
  HIGHLIGHT_PROJECT,
  GLOW_PAGE_BORDER,
  SET_ACTIVE_SKILLS,
} from './actionTypes';

const initialHighlightState = {
  highlightedProject: null,
};

const initialGlowState = {
  glowPageBorder: false,
};

const initialSkillsState = {
  activeSkills: [],
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

const skillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SKILLS:
      return { ...state, activeSkills: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  highlight: highlightReducer,
  glow: glowReducer,
  skills: skillsReducer,
});

export default rootReducer;