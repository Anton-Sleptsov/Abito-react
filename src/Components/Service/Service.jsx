import "./Service.css";

export const Service = ({ title, text, imagePath }) => {
  return (
    <div className="service">
      <img className="service-img" src={imagePath} alt="service-img" />
      <h5 className="service-title">{title}</h5>
      <p className="service-text">{text}</p>
    </div>
  );
};
