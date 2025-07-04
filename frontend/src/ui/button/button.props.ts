import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IButtonProps = {
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
