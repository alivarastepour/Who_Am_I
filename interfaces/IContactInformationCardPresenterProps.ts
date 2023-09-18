import { IContactInformationMember } from "./IContactInformationMember";

export interface IContactInformationCardPresenterProps {
  handleCopyLink: (link: string) => void;
  openLink: (link: string) => void;
  mouseOutHandler: () => void;
  members: IContactInformationMember[];
  copyVisible: boolean;
  showInfo: boolean;
}
