import { HIGHLIGHT_PROJECT, GLOW_PAGE_BORDER, SET_ACTIVE_SKILLS } from './actionTypes';

export const highlightProject = (projectRef) => ({
  type: HIGHLIGHT_PROJECT,
  payload: projectRef,
});

export const glowPageBorder = (shouldGlow) => ({
  type: GLOW_PAGE_BORDER,
  payload: shouldGlow,
});

export const setActiveSkills = (skills) => ({
  type: SET_ACTIVE_SKILLS,
  payload: skills,
});