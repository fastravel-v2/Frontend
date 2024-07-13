export interface IMenu {
	[key: string]: ReactNode | string | null
}

// 아이콘에 할당할 함수 type
export interface IMenuFunc {
	left_func: MouseEventHandler<HTMLDivElement> | undefined
	right_func: MouseEventHandler<HTMLDivElement> | undefined
}
