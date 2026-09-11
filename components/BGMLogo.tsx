import React from "react";
import Image from "next/image";

interface BGMLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export const BGMLogo: React.FC<BGMLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const logoDimensions = {
    sm: { width: 36, height: 40 },
    md: { width: 44, height: 50 },
    lg: { width: 60, height: 68 },
  };

  const dim = logoDimensions[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Official BGM Logo Image Only (No side text) */}
      <div className="relative shrink-0 transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/logo_bgm.png"
          alt="Logo BGM"
          width={dim.width}
          height={dim.height}
          className="object-contain filter drop-shadow-md"
          priority
        />
      </div>
    </div>
  );
};
