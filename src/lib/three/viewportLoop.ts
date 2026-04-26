export type ViewportRenderFn = (deltaSeconds: number, elapsedSeconds: number) => void;

export interface ViewportLoopOptions {
  rootMargin?: string;
  threshold?: number;
}

export interface ViewportLoopControls {
  start: () => void;
  stop: () => void;
  destroy: () => void;
}

export function createViewportLoop(
  canvas: HTMLCanvasElement,
  renderFn: ViewportRenderFn,
  options: ViewportLoopOptions = {},
): ViewportLoopControls {
  let rafId: number | null = null;
  let running = false;
  let startTime = 0;
  let previousTime = 0;

  const tick = (now: number): void => {
    if (!running) {
      return;
    }
    if (startTime === 0) {
      startTime = now;
    }

    const deltaSeconds = previousTime === 0 ? 0 : (now - previousTime) / 1000;
    previousTime = now;

    const elapsedSeconds = (now - startTime) / 1000;
    renderFn(deltaSeconds, elapsedSeconds);
    rafId = window.requestAnimationFrame(tick);
  };

  const start = (): void => {
    if (running) {
      return;
    }
    running = true;
    startTime = 0;
    previousTime = 0;
    rafId = window.requestAnimationFrame(tick);
  };

  const stop = (): void => {
    running = false;
    startTime = 0;
    previousTime = 0;
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  let observer: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      },
      {
        rootMargin: options.rootMargin ?? '0px',
        threshold: options.threshold ?? 0,
      },
    );
    observer.observe(canvas);
  } else {
    start();
  }

  const destroy = (): void => {
    stop();
    observer?.disconnect();
  };

  return { start, stop, destroy };
}
