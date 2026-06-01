import Image from "next/image";

type LogoProps = {
  /** pixel size of the square mark */
  size?: number;
  /** hide the wordmark, show only the shield mark */
  markOnly?: boolean;
  className?: string;
};

export default function Logo({ size = 36, markOnly = false, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo-mark.png"
        alt="Iron Web Studios"
        width={size}
        height={size}
        priority
        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
      />
      {!markOnly && (
        <span className="text-lg font-extrabold tracking-tight leading-none">
          <span className="chrome-text">Iron Web</span>{" "}
          <span className="text-muted font-bold">Studios</span>
        </span>
      )}
    </span>
  );
}
