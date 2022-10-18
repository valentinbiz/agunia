import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 60px;
  padding: 0 25px;
  display: flex;
  flex-direction: column-reverse;
  align-items: bottom;
  justify-content: center;
  ${'' /* background-color: white; */}
  margin: 0 auto
  z-index: 10;
  position: absolute;

  h2 {
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 25%;
  max-width: 25%;
  height: 250px;
  flex: 1 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* border: 0.1px solid black; */}
  margin: 7px 7.5px 15px;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.05);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
