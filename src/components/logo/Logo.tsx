{
  /*Logo 组件 */
}
import siteInfo from "../../config/siteInfo";

export default function Logo() {
  return (
    <p className="text-2xl text-black dark:text-white/90">{siteInfo.title}</p>
  );
}
