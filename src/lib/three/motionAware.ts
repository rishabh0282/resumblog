const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const MOTION_EVENT = 'motion-state-change';

export type MotionChangeHandler = (reduced: boolean) => void;

export function isMotionReduced(): boolean {
  return (
    document.documentElement.classList.contains('motion-paused') ||
    window.matchMedia(REDUCED_QUERY).matches
  );
}

export function onMotionChange(handler: MotionChangeHandler): () => void {
  const mediaQuery = window.matchMedia(REDUCED_QUERY);

  const invoke = (): void => {
    handler(isMotionReduced());
  };

  window.addEventListener(MOTION_EVENT, invoke as EventListener);
  mediaQuery.addEventListener('change', invoke);
  invoke();

  return (): void => {
    window.removeEventListener(MOTION_EVENT, invoke as EventListener);
    mediaQuery.removeEventListener('change', invoke);
  };
}
