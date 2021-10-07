import ContentLoader from "react-content-loader";

export const LoadingBlock = () => {
  return (
    <div className="pizza-block">
      <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="120" r="120" />
        <rect x="0" y="255" rx="6" ry="6" width="280" height="39" />
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="412" rx="6" ry="6" width="95" height="35" />
        <rect x="146" y="407" rx="24" ry="24" width="133" height="46" />
      </ContentLoader>
    </div>
  );
};
