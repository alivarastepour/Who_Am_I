import { get } from "@/common/get";
import { log } from "console";
import { useEffect } from "react";

export const useIntersection = ({
  observables,
  parentId,
}: {
  observables: { id: string; className: string }[];
  parentId: string;
}) => {
  function checkElementExistence(elements: (HTMLElement | null)[]): boolean {
    return elements.every((element) => !!element);
  }

  function intersectionCallback(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (!entry || !entry.isIntersecting) return;

    const elements = observables.map((observable) => ({
      element: get(observable.id),
      className: observable.className,
    }));

    const allElementsPresent = checkElementExistence(
      elements.map((element) => element.element)
    );

    if (!allElementsPresent) return;

    elements.forEach((element) =>
      element.element!.classList.add(element.className)
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      threshold: [0.75],
    });
    const elementToObserve = get(parentId);
    if (elementToObserve) observer.observe(elementToObserve);

    return () => {
      if (elementToObserve) observer.unobserve(elementToObserve);
      observer.disconnect();
    };
  }, []);

  return null;
};
