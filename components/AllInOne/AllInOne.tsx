import { useIntersection } from "@/hooks/useIntersection";
import AllInOnePresenter from "./AllInOnePresenter";

const AllInOne = () => {
  useIntersection({
    parentId: "all-in-one-wrapper",
    observables: [
      { className: "all-in-one-sliding-feature-1", id: "feature-container-1" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-1",
      },
      { className: "all-in-one-sliding-feature-2", id: "feature-container-2" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-2",
      },
      { className: "all-in-one-sliding-feature-3", id: "feature-container-3" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-3",
      },
      { className: "all-in-one-sliding-feature-4", id: "feature-container-4" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-4",
      },
      { className: "all-in-one-sliding-title", id: "all-in-one-title" },
      {
        className: "all-in-one-fade-in-background",
        id: "all-in-one-background-wrapper",
      },
    ],
  });
  return <AllInOnePresenter />;
};

export default AllInOne;
