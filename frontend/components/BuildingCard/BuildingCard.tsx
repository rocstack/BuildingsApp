import React, { FunctionComponent } from 'react';

import Card from '@/components/Card/Card';
import DividerLine from '@/components/DividerLine/DividerLine';

import styles from './BuildingCard.module.scss';

interface Props {
  imgLink: string;
  name: string;
  address: string;
  users: number;
  offices: number;
}

const BuildingCard: FunctionComponent<Props> = ({ imgLink, name, address, users, offices }) => {
  return (
    <Card imgLink={imgLink}>
      <div className={styles.BuildingCard}>
				<p className={styles.Title}>{name}</p>
				<div className={styles.Body}>
					<p>{address}</p>
					<div className={styles.Bottom}>
						<span>{users} Users</span>
						<span>{offices} Offices</span>
					</div>
					<DividerLine />
				</div>
      </div>
    </Card>
  );
};

export default BuildingCard;
