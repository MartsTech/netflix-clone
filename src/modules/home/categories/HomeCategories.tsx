import categories from "utils/movieCategories";
import HomeCategoriesItem from "./HomeCategoriesItem";

const HomeCategories = () => {
  return (
    <>
      {categories.map((category) => (
        <HomeCategoriesItem key={category.title} category={category} />
      ))}
    </>
  );
};

export default HomeCategories;
