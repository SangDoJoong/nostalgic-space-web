import { useState } from 'react';
import styled from 'styled-components';
import { Box, Icon } from '@mui/material';

const GalleryTab = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0 16px;

  .tabmenu {
    // tab style
    display: flex;
    justify-content: space-evenly;
    width: calc(100% / 3);
  }

  .MuiBox-root {
    width: 100%;
    padding: 8px 0;
  }

  .focused {
    // 선택된 tab style
    .MuiBox-root {
      border-color: rgb(0, 0, 0);
      border-bottom-style: solid;
      font-weight: bold;
      height: 100%;
    }
  }
`;

const Tab = (): JSX.Element => {
  const [currentTab, clickTab] = useState(0);

  const tabMenuArr = [
    { name: 'image', content: 'Images' },
    { name: 'map', content: 'Map' },
    { name: 'settings', content: 'Settings' },
  ];

  const selectTabMenuHandler = (idx: number) => {
    clickTab(idx);
  };

  return (
    <>
      <GalleryTab>
        {tabMenuArr.map((elem, idx) => (
          <li
            className={idx === currentTab ? 'tabmenu focused' : 'tabmenu'}
            onClick={() => selectTabMenuHandler(idx)}
          >
            <Box>
              <span
                className={
                  idx === currentTab
                    ? 'material-icons'
                    : 'material-icons-outlined'
                }
              >
                {elem.name}
              </span>
            </Box>
          </li>
        ))}
      </GalleryTab>
      <p>{tabMenuArr[currentTab].content}</p>
    </>
  );
};

export default Tab;
