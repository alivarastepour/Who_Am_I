import { get } from "@/common/get";

export function handleHeaderInViewport(
  targetElementID: string
): IntersectionObserver | null {
  function intersectionCallback(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (!entry || !entry.isIntersecting) return;

    const header = document.querySelector("#who-am-i-title");
    const body = document.querySelector("#who-am-i-body");
    if (!header || !body) return;

    header.classList.add("sliding-header");
    body.classList.add("sliding-body");
  }

  const observer = new IntersectionObserver(intersectionCallback, {
    root: null,
    threshold: [0.75],
  });

  const elementToObserve = get(targetElementID);

  if (!elementToObserve) return null;

  observer.observe(elementToObserve);

  return observer;
}
