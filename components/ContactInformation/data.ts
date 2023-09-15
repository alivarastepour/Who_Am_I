export const CONTACT_INFORMATION_ACTION = {
  link: "link",
  copy: "copy",
};

export const CONTACT_INFORMATION = [
  {
    category: "social media",
    action: CONTACT_INFORMATION_ACTION.link,
    members: [
      {
        id: 0,
        platform: "linkedin",
        info: "https://www.linkedin.com/in/ali-varaste-pour/",
        logo: "/",
      },
      {
        id: 1,
        platform: "github",
        info: "https://github.com/alivarastepour",
        logo: "/",
      },
      {
        id: 2,
        platform: "stack overflow",
        info: "https://stackoverflow.com/users/16996769/ali-varaste-pour",
        logo: "/",
      },
    ],
  },
  {
    category: "direct contact",
    action: CONTACT_INFORMATION_ACTION.copy,
    members: [
      {
        id: 3,
        platform: "phone number",
        info: "+989900837195",
        logo: "/",
      },
      {
        id: 4,
        platform: "email",
        info: "ali.varaste.pour.12122@gmail.com",
        logo: "/",
      },
      {
        id: 4,
        platform: "telegram",
        info: "@Swishswishmdfk",
        logo: "/",
      },
    ],
  },
];
