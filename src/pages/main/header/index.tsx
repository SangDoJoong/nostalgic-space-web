import styled from 'styled-components';

import { WebPageTitle } from 'src/constants/constants';

const NostalgicHeader = styled.header`
  // <header> html 태그 스타일 정의
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 72px;
`;

const NostalgicHeaderContent = styled.div`
  display: flex;
  padding: 0 16px 0 16px;
  align-items: center;
  justify-content: space-between;
`;

const NostalgicTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  align-items: center;
`;

const NostalgicNavigator = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
  }
`;

const Header = (): JSX.Element => {
  return (
    <NostalgicHeader>
      <NostalgicHeaderContent>
        <NostalgicTitle>{WebPageTitle}</NostalgicTitle>
        <NostalgicNavigator>
          <ul>
            <li>WORLDS</li>
            <li>MY SPACES</li>
          </ul>
        </NostalgicNavigator>
      </NostalgicHeaderContent>
    </NostalgicHeader>
  );
};

export default Header;
