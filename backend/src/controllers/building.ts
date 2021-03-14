import { RequestHandler } from 'express';
import { Building } from '../models/building';
import { BuildingRepository } from '../repositories/building';
import { BuildingService } from '../services/building';
import { BuildingAddDTO, BuildingFindDTO } from '../dtos/building';

import buildingsData from '../data/buildings.json';

const buildingRepository = new BuildingRepository(buildingsData);
const buildingService = new BuildingService(buildingRepository);

export const getFindBuildings: RequestHandler = async (req, res, next) => {
  const buildingFindDTO: BuildingFindDTO = {
    searchQuery: req.query.searchQuery?.toString() ?? '',
  };
  try {
    const buildings: Building[] = await buildingService.find(buildingFindDTO);
    res.json(buildings);
  } catch (error) {
    next(error);
  }
};

export const postAddBuilding: RequestHandler = async (req, res, next) => {
  const buildingAddDTO: BuildingAddDTO = req.body;
  try {
    await buildingService.addBuilding(buildingAddDTO);
    res.json({ message: 'Building Successfully added' });
  } catch (error) {
    next(error);
  }
};
