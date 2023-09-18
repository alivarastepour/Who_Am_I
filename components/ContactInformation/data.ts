import { IContactInformationDataItem } from "@/interfaces/IContactInformationDataItem";

export const CONTACT_INFORMATION: IContactInformationDataItem[] = [
  {
    category: "social media",
    action: "link",
    members: [
      {
        id: 0,
        platform: "linkedin",
        info: "https://www.linkedin.com/in/ali-varaste-pour/",
        logo: "/linkedin-logo.png",
      },
      {
        id: 1,
        platform: "github",
        info: "https://github.com/alivarastepour",
        logo: "/github-logo.png",
      },
      {
        id: 2,
        platform: "stack overflow",
        info: "https://stackoverflow.com/users/16996769/ali-varaste-pour",
        logo: "/stackoverflow-logo.png",
      },
    ],
  },
  {
    category: "direct contact",
    action: "copy",
    members: [
      {
        id: 5,
        platform: "telegram",
        info: "@Swishswishmdfk",
        logo: "/telegram-logo.png",
      },
      {
        id: 4,
        platform: "email",
        info: "ali.varaste.pour.12122@gmail.com",
        logo: "/gmail-logo.png",
      },

      {
        id: 3,
        platform: "phone number",
        info: "+989900837195",
        logo: "/phone-logo.png",
      },
    ],
  },
];
