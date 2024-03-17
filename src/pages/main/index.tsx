import styled from 'styled-components';

import Header from 'src/pages/main/header';
import MapViewer from 'src/pages/main/map_viewer';

const MainView = styled.div`
  height: 100vh;
`;

const HeaderDiv = styled.div`
  height: 72px;
`;

const MapViewerDiv = styled.div`
  height: calc(100% - 72px);
`;

const Main = (): JSX.Element => {
  return (
    <MainView>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <MapViewerDiv>
        <MapViewer />
      </MapViewerDiv>
    </MainView>
  );
};

export default Main;
