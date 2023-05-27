const CompanyMap = ({ lat, lng }) => {
  const imageUrl = `https://i.stack.imgur.com/HILmr.png`;

  return (
    <div className="map-wrapper">
      <img className="map" src={imageUrl} alt="Map" />
      <div className="coordinate-details">
        <span className="coordinate">
          Lat:<span className="coordinate-value-pad">{lat}</span>
        </span>
        <span className="coordinate">
          Long:<span className="coordinate-value">{lng}</span>
        </span>
      </div>
    </div>
  );
};
export default CompanyMap;
