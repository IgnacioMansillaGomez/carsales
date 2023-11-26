'use client';

import React from 'react';
import { SearchManuFacturer } from '../searchmanufacturer/searchmanufacturer.component';

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = React.useState('');

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
