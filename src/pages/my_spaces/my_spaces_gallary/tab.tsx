import { useState } from 'react';
import styled from 'styled-components';

const Tab = (): JSX.Element => {
  const [currentTab, clickTab] = useState(0);

  const tabMenuArr = [
    { name: 'images', content: 'Images' },
    { name: 'map', content: 'map' },
    { name: 'setting', content: 'Settings' },
  ];

  const selectTabMenuHandler = (idx: number) => {
    clickTab(idx);
  };

  return (
    <div>
      {tabMenuArr.map((elem, idx) => (
        <li
          className={idx === currentTab ? 'submenu focused' : 'submenu'}
          onClick={() => selectTabMenuHandler(idx)}
        >
          {elem.name}
        </li>
      ))}
      <div>
        <p>{tabMenuArr[currentTab].content}</p>
      </div>
    </div>
  );
};

export default Tab;
