// Logo 组件
import siteInfo from "../../config/siteInfo";

const Logo = () => {
  return <img src={siteInfo.logo} alt={siteInfo.title} className="w-16"/>;
};
export default Logo;
