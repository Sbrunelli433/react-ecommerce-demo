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
          <div class="category-body-container">
            <h2 class="">{title}</h2>
            <p class="">Shop Now</p>
          </div>
        </div>
    );
}

export default CategoryItem