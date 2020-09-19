export interface createDTO {
  link: string;
}

export interface getListDTO {
  page: string;
  limit: string;
}

export interface updateDTO {
  id: number;
  link: string;
}

export interface removeDTO {
  id: number;
}
