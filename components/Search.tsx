import React from 'react';
import SearchStyles from '../styles/Search.module.css';

type SearchProps = {
  filter(arg: string): void;
  value: string;
};

const Search: React.FC<SearchProps> = ({ filter, value }) => {
  return (
    <div className={SearchStyles.filter}>
      <label>
        <input
          value={value}
          placeholder='Filter by car type'
          onChange={(e) => {
            filter(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default Search;
