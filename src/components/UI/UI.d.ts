import {ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	backgroundColor?: CSSProperties["backgroundColor"]
	rounded?: CSSProperties["borderRadius"]
	size?: CSSProperties["fontSize"]
	width?: CSSProperties["width"]
	height?: CSSProperties["height"]
	color?: CSSProperties["color"]
	borderColor?: CSSProperties["borderColor"]
	outlined?: boolean
}

interface RowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

interface ColProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

interface AppBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	src: string
	alt?: string
	size: number
	borderColor?: CSSProperties['borderColor']
	borderWidth?: CSSProperties['borderWidth']
	hasIndicator?: boolean
}


interface HRProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
	horizontal?: boolean;
	color?: CSSProperties['borderColor']
	opacity?: CSSProperties['opacity']
}

type TypographyParagraphTypes = | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button'

type TypographyVariantOptions =
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | TypographyParagraphTypes

type TypographyVariant<Variant extends TypographyVariantOptions> = Variant extends TypographyParagraphTypes
	?
	DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
	:
	DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>


type TypographyProps<Variant extends TypographyVariantOptions> = TypographyVariant<Variant> & {
	variant: Variant
	color?: CSSProperties['color']
	size?: number
}

interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: number
	color?: CSSProperties['color']
	height?: CSSProperties['height']
	width?: CSSProperties['width']
}

interface SideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	height?: CSSProperties['height']
	width?: CSSProperties['width']
	backgroundColor?: CSSProperties['backgroundColor']
	rounded?: number
	hasShadow?: boolean
	hasIndicator?: boolean
	indicatorColor: CSSProperties['borderColor']
	indicatorPosition: 'left' | 'right'
	hasBorder?: boolean
	borderColor?: CSSProperties['borderColor']
	borderWidth?: CSSProperties['borderWidth']
}

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}


interface DrawerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isOpen: boolean
	position?: 'left' | 'right'
	labelContent?: ReactNode
	labelColor?: CSSProperties['color']
	top?: CSSProperties['top']
	height?: CSSProperties['height']
	onLabelClick?: () => void
}


interface ProfileProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
	name: string
	image: string
	rating: number
	ratingScale?: number
	indicatorColor?: CSSProperties['borderColor']
}
