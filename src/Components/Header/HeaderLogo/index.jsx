export const HeaderLogo = ({ logoSvg, title, subTitle }) => {
  return (
    <div className="header__logo">
      <img width="38" src={logoSvg} alt="Pizza logo" />
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};
