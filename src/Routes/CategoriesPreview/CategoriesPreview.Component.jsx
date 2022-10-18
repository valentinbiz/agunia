import { Fragment } from "react";

import { useSelector } from "react-redux/es/exports";

import { selectCategoriesMap } from "../../Store/Categories/CategorySelector";


import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.Component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
