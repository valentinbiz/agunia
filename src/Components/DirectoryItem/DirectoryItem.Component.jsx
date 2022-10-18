import { useNavigate } from "react-router-dom";

import {DirectoryItemContainer, BackgroundImage, Body} from "./DirectoryItem.Styles.jsx";

const DirectoryItem = ({ category }) => {
  const { image, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler} >
      <BackgroundImage imageUrl={ image } />
      <Body>
        <h2> {title} </h2>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
