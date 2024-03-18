interface SVGIconProps {
	icon: string
	size?: number
	width?: number
	height?: number
	color?: string
}
const SVGIcon = ({
	icon,
	size = 24,
	width,
	height,
	color,
	...restProps
}: SVGIconProps) => {
	const iconStyles = { width: width ?? size, height: height ?? size, color }

	return (
		<svg aria-hidden="true" style={iconStyles} {...restProps}>
			<use href={`/icons/sprite.svg#${icon}`} />
		</svg>
	)
}

export default SVGIcon
