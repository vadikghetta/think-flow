import type { InputHTMLAttributes, ReactNode } from "react";

export type IInputProps = {
	children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
