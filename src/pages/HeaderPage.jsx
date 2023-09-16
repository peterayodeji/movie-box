import HeaderBar from "../components/HeaderBar";
import HeaderDescription from "../components/HeaderDescription";
import Banner from "../img/john-wick.jpg";

function HeaderPage() {
  const containerStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('${Banner}')`,
  };

  return (
    <div className="header" style={containerStyle}>
      <div className="header__layer">
        <HeaderBar />
      </div>

      <HeaderDescription />
    </div>
  );
}

export default HeaderPage;
