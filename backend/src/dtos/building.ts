export interface BuildingAddDTO {
  name: string;
  address: string;
  users: number;
  offices: number;
  cardImgUrl: string;
}

export interface BuildingFindDTO {
  searchQuery: string;
}
