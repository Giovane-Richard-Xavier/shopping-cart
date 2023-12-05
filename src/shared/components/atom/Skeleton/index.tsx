import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './styles.module.css';

export const SkeletonCard = () => {
  // Criando um array de dados fictícios para determinar quantas vezes repetir
  const numberOfSkeletons = 30;
  const dummyData = Array.from({ length: numberOfSkeletons });

  return (
    <SkeletonTheme baseColor="#ddd" highlightColor="#888">
      <div className={`container ${style.skeleton_container}`}>
        {dummyData.map((_, index) => (
          <div key={index} className={`container ${style.skeleton_item}`}>
            <Skeleton count={1} height={300} width={250} />
            <Skeleton count={1} height={150} width={250} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};
