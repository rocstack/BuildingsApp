import { BuildingRepository } from '../repositories/building';
import { BuildingService } from '../services/building';
import { Building } from '../models/building';
import { BuildingFindDTO } from '../dtos/building';
jest.mock('../repositories/building');

describe('Building Service', () => {
  it('should return data from the repository', async () => {
    const dto: BuildingFindDTO = { searchQuery: ''};
    const data: Building[] = [{name: '', address: '', users: 1, offices: 1, cardImgUrl: ''}];
    const buildingRepository = new BuildingRepository();
    buildingRepository.find = () => data;

    const buildingService = new BuildingService(buildingRepository);
    const result = await buildingService.find(dto);

    expect(BuildingRepository).toHaveBeenCalledTimes(1);
    expect(result).toBe(data);
  });

  it.todo('should throw dto validation error on passing a short name on find');
  it.todo('should save to DB on adding building');
  it.todo('should throw dto validation error on passing a short name on add');
});
