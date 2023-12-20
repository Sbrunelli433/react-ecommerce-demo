import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const {imageUrl, title } = category;

    return (
        <div className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          {/* <img /> */}
          <div className="category-body-container">
            <h2 className="">{title}</h2>
            <p className="">Shop Now</p>
          </div>
        </div>
    );
}

export default CategoryItem