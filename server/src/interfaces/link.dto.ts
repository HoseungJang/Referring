export interface createLinkDTO {
  link: string;
}

export interface getLinkListDTO {
  page: string;
  limit: string;
}

export interface updateLinkDTO {
  id: number;
  link: string;
}
