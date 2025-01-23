import { cn } from "@/lib/utils";

export type SpacerProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Spacer = ({size = "md"}: SpacerProps) => {
    return (
        <div className={cn({
            "h-4 lg:h-8": size === "xs",
            "h-8 lg:h-16": size === "sm",
            "h-16 lg:h-24": size === "md",
            "h-24 lg:h-32": size === "lg",
            "h-32 lg:h-40": size === "xl",
        })} />
    );
};