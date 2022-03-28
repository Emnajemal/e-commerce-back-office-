export interface Email {
  id: number;
  from: {
    email: string;
    name: string;
    avatar: string;
  };
  to: [
    {
      name: string;
      email: string;
    }
  ];
  subject: string;
  cc: Array<any>;
  bcc: Array<any>;
  message: string;
  attachments: [
    {
      fileName: string;
      thumbnail: string;
      url: string;
      size: string;
    }
  ];
  isStarred: boolean;
  labels: Array<any>;
  time: string;
  replies: Array<any>;
  folder: string;
  isRead: boolean;
}
