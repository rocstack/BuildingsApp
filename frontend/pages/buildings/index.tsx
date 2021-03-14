import React, { useState, useEffect } from 'react';

import { backendAPI } from '@/common/axiosInstances';

import Layout from '@/components/Layout/Layout';
import TextInput from '@/components/Input/TextInput/TextInput';
import BuildingCard from '@/components/BuildingCard/BuildingCard';
import CardList from '@/components/CardList/CardList';
import Map from '@/components/Map/Map';

import styles from './index.module.scss';

const Buildings = () => {
  const [buildingData, setBuildingData] = useState([]);

  useEffect(() => {
    search('');
  }, []);

  const search = async (query: string) => {
    try {
      const { data } = await backendAPI.get(
        `building/find?searchQuery=${query}`
      );
      setBuildingData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout pageTitle="Buildings">
      <div className={styles.Container}>
        <div className={styles.OptionsBar}>
          <TextInput
            changeValue={async (e) => search(e.target.value)}
            placeholder="Type to search..."
          />
        </div>
        <div className={styles.BuildingList}>
          <CardList>
            {buildingData.map((building, i) => (
              <BuildingCard
                imgLink={building.cardImgUrl}
                {...building}
                key={'buildingCard' + i}
              />
            ))}
          </CardList>
        </div>
        <div className={styles.Map}>
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default Buildings;
