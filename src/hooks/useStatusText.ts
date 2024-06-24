// 根据知识点完成状态输出不同的文字
// status：
//          1 ：未开始
//          2 ：学习中
//          3 ：已完成

interface StatusTextResult {
  text: string;
  color: string;
}

const useStatusText = (status: string): StatusTextResult => {
  switch (status) {
    case "1":
      return { text: "未开始", color: "bg-blue-100 text-blue-700" };
    case "2":
      return { text: "学习中", color: "bg-yellow-100 text-yellow-800" };
    case "3":
      return { text: "已完成", color: "bg-green-100 text-green-700" };
    default:
      return { text: "未知状态", color: "text-gray-500" };
  }
};

export default useStatusText;
