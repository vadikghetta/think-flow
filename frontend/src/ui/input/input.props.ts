import type { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	children: ReactNode;
}
