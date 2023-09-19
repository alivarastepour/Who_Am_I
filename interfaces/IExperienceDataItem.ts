import { ICompany } from "./ICompany";
import { IDuration } from "./IDuration";
import { ILocation } from "./ILocation";

export interface IExperienceDataItem {
  id: number;
  duration: IDuration;
  company: ICompany;
  location: ILocation;
  description: string;
  techStack: string[];
}
