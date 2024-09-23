import { HIGHLIGHT_PROJECT, GLOW_PAGE_BORDER } from './actionTypes';

export const highlightProject = (projectRef) => ({
  type: HIGHLIGHT_PROJECT,
  payload: projectRef,
});

export const glowPageBorder = (shouldGlow) => ({
  type: GLOW_PAGE_BORDER,
  payload: shouldGlow,
});