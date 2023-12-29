import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
    const {imageUrl, title } = category;

    return (
        <div className="directory-item-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          {/* <img /> */}
          <div className="body">
            <h2 className="">{title}</h2>
            <p className="">Shop Now</p>
          </div>
        </div>
    );
}

export default DirectoryItem