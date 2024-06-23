{
  /*跳转弹窗组件 */
}

{
  /*导入第三方库 */
}
import { notification } from "antd";

interface NotificationProps {
  describe: string;
  title: string;
}

const Notification = ({ describe, title }: NotificationProps) => {
  notification.open({
    message: (
      <div className="mt-2">
        即将跳转到{describe}：<span className="text-pink-500">{title}</span>
      </div>
    ),
    duration: 2.5,
    placement: "bottomRight",
  });
};

export default Notification;
