import { BuildingAddDTO, BuildingFindDTO } from '../dtos/building';
import { Building } from '../models/building';
import { BuildingRepository } from '../repositories/building';

export class BuildingService {
  constructor(protected readonly buildingRepository: BuildingRepository) {}

  async find(buildingFindDTO: BuildingFindDTO): Promise<Building[]> {
    try {
      return this.buildingRepository.find(buildingFindDTO);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addBuilding(buildingAddDTO: BuildingAddDTO) {
    try {
      this.buildingRepository.add(buildingAddDTO);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
