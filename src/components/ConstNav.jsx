import { categories } from "../utils/constants";

const ConstNav = ({ onCategoryClick }) => {
  return (
    <div className="p-4">
      {categories.slice(0, 5).map((category, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer mb-4"
          onClick={() => onCategoryClick(category.name)}
        >
          <div className="mb-2 ml-1 w-[100%] cursor-pointer px-1 py-3 rounded-lg hover:bg-[#313131]">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center text-3xl">
                {category.icon}
              </div>
              <div className="text-xs mt-1">{category.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConstNav;
