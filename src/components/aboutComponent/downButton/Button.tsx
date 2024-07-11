// 按钮框架组件

// 导入类型定义
import type { CSSProperties, ReactNode } from "react";
// 定义按钮组件的 props 类型
interface AnimatedShinyTextProps {
  children: ReactNode; // 按钮内的文字
  className?: string; // 扩展样式
  shimmerWidth?: number; // 闪光宽度
}

const Button: React.FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={`
        "mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        ${className}
      `}
    >
      {children}
    </p>
  );
};

export default Button;
