import { IContactInformationMember } from "./IContactInformationMember";
import type { TContactInformationAction } from "@/types/TContactInformationAction";

export interface IContactInformationDataItem {
  category: string;
  action: TContactInformationAction;
  members: IContactInformationMember[];
}
