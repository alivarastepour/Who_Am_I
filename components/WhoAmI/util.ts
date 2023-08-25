import { get } from "@/common/get";

export function handleHeaderInViewport(
  targetElementID: string
): IntersectionObserver | null {
  function intersectionCallback(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (!entry || !entry.isIntersecting) return;

    const header = document.querySelector("#who-am-i-title");
    if (!header) return;

    header.classList.add("sliding-header");
  }

  const observer = new IntersectionObserver(intersectionCallback, {
    root: null,
    threshold: [1.0],
    rootMargin: "30px 0px 0px",
  });

  const elementToObserve = get(targetElementID);

  if (!elementToObserve) return null;

  observer.observe(elementToObserve);

  return observer;
}
