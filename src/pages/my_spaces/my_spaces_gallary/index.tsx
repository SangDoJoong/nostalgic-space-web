import Tab from 'src/pages/my_spaces/my_spaces_gallary/tab';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 0 32px;
`;

const MySpaceGallery = (): JSX.Element => {
  return (
    <GalleryContainer>
      <Tab />
    </GalleryContainer>
  );
};

export default MySpaceGallery;
