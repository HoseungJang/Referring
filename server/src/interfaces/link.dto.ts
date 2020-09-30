export interface createDTO {
  name: string;
  link: string;
}

export interface getListDTO {
  page: string;
  limit: string;
}

export interface updateDTO {
  id: number;
  name: string;
  link: string;
}

export interface removeDTO {
  id: number;
}
