import styled from 'styled-components';

import Header from 'src/pages/components/Header';
import Copyright from 'src/pages/components/Copyright';
import MySpaceGallery from 'src/pages/my_spaces/my_spaces_gallary';

const MainView = styled.div`
  height: 100vh;
`;

const HeaderDiv = styled.div`
  height: 72px;
`;

const ProfileView = styled.div`
  height: calc(100% - 72px - 32px);
  width: 100%;
  margin: 0 auto;
  position: absolute;
`;

const ProfileImageView = styled.div`
  margin: 100px auto;
`;

const ProfileImageContainer = styled.img`
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
`;

const MySpacesView = styled.div``;

const CopyrightView = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
`;

const MySpace = (): JSX.Element => {
  return (
    <MainView>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <ProfileView>
        <ProfileImageView>
          <ProfileImageContainer src="/resources/blank_profile.png"></ProfileImageContainer>
        </ProfileImageView>
        <MySpacesView>
          <MySpaceGallery />
        </MySpacesView>
        <CopyrightView>
          <Copyright />
        </CopyrightView>
      </ProfileView>
    </MainView>
  );
};

export default MySpace;
