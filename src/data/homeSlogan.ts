// Home标语数据

const homeSlogan: HomeSlogan = {
  title: "让我们一起进步吧！",
  description1: "您是否有过想学习一个知识，却无从下手的困惑？",
  description2: "欢迎加入我们，让我们",
  val_words: ["一起进步", "共享知识", "一起成长", "同步想法"],
};

interface HomeSlogan {
  title: string;
  description1: string;
  description2: string;
  val_words: string[];
}

export default homeSlogan;
