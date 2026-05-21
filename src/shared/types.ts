import type {ReactNode} from "react";

export interface LayoutProps {
    children:
        React.ReactNode;
    addClasses?: string;
}

export type ButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

export type IconButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    icon: ReactNode;
    addClasses?: string;
}