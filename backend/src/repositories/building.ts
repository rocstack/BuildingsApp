import { BuildingAddDTO, BuildingFindDTO } from '../dtos/building';
import { Building } from '../models/building';

/*
	This would usually hold DB specific queries to the ORM / SQL queries
*/

export class BuildingRepository {
  private buildings: Building[];

  constructor(buildings: Building[] = []) {
    this.buildings = buildings;
  }

  find(buildingFindDTO: BuildingFindDTO): Building[] {
    const { searchQuery } = buildingFindDTO;
    if (searchQuery) {
      return this.buildings.filter(
        (building) =>
          building.name.includes(searchQuery) ||
          building.address.includes(searchQuery)
      );
    } else {
      return this.buildings;
    }
  }

  add(buildingAddDTO: BuildingAddDTO) {
    this.buildings.push(buildingAddDTO);
  }
}
