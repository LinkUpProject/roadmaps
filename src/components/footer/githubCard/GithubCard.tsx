{
  /*Github 卡片组件 */
}

{
  /*导入 第三方库 */
}
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
{
  /*导入 数据 */
}
import siteInfo from "../../../config/siteInfo";
import githubCard from "../../../data/githubCard";

const GithubCard: React.FC = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="知途 logo"
          height={40}
          radius="sm"
          src={siteInfo.logo}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{githubCard.title}</p>
          <p className="text-small text-default-500">{siteInfo.siteUrl}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{githubCard.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={siteInfo.github}>
          {githubCard.visitToGithub}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GithubCard;
