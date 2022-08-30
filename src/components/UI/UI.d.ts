import {ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {HTMLMotionProps} from "framer-motion";
import {StateManagerProps} from "react-select/dist/declarations/src/useStateManager";
import {LinkProps} from "react-router-dom";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	rounded?: CSSProperties["borderRadius"]
	size?: CSSProperties["fontSize"]
	width?: CSSProperties["width"]
	height?: CSSProperties["height"]
	borderColor?: CSSProperties["borderColor"]
	variant?: "primary" | 'default' | 'icon'
	outlined?: boolean
}

interface RowProps extends HTMLMotionProps<"div"> {
	grid?: boolean
}

interface ColProps extends HTMLMotionProps<"div"> {
	cols?: CSSProperties["flex"]
}

interface AppBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
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

type TypographyParagraphTypes = | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'button1'

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
	spacing?: CSSProperties['letterSpacing']
	lineHeight?: CSSProperties['lineHeight']
	fontFamily?: CSSProperties['fontFamily']
	fontWeight?: CSSProperties['fontWeight']
}

interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: CSSProperties['fontSize']
	color?: CSSProperties['color']
	height?: CSSProperties['height']
	width?: CSSProperties['width']
}

interface SideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

interface CardProps extends HTMLMotionProps<"div"> {
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

export interface TextFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	height?: CSSProperties['height']
	width?: CSSProperties['width']
	beforeIcon?: ReactNode
	beforeIconSize?: CSSProperties['fontSize']
	beforeIconColor?: CSSProperties['color']
	rounded?: CSSProperties['borderRadius']
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

type SchedulerDateData = ({ date: string } & Record<string, any>)

type SchedulerData = ({
	dates: SchedulerDateData[]
} & Record<string, any>)

export interface SchedulerProps {
	startDate?: string
	data: SchedulerData[]
	tdContentComp: (data: SchedulerDateData) => ReactNode
	profileComp: (data: any) => ReactNode
}


export interface TextFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}


interface ModalProps extends HTMLMotionProps<"div"> {
	height?: `${number}px` | `${number}%`
	width?: `${number}px` | `${number}%`
	onBackdropClick?: () => void
	centered?: boolean
	animationDuration?: number
}

interface BackdropProps extends HTMLMotionProps<"div"> {
	isTransparent?: boolean
	active: boolean
	animationTime?: number
}

interface SelectProps extends StateManagerProps {
	singleValueVariant?: TypographyVariantOptions
	singleValueColor?: CSSProperties['color']
	singleValueWeight?: CSSProperties['fontWeight']
	singleValueFontFamily?: CSSProperties['fontFamily']
	singleValueSize?: CSSProperties['fontSize']
	singleValueSpacing?: CSSProperties['letterSpacing']
	dropdownIconColor?: `#${string}`,
	dropdownIconSize?: CSSProperties['fontSize'],
	menuAnchorPoint?: 'left' | 'right'
	menuWidth?: CSSProperties['width']
	isSelectable?: boolean,
	noBorder?: boolean
}


interface DatePickerProps {
	onSelect?: (date) => void
	onSet?: (date) => void
	onClear?: () => void
	currentDate: string
	yearsOptions: { label: string, value: string }[]
	daysToEndDate?: number
	width?: CSSProperties['width']
	height?: CSSProperties['height']
	rounded?: CSSProperties['borderRadius']
	hasIcon?: boolean
	beforeIconColor?: CSSProperties['color']
	beforeIconSize?: CSSProperties['fontSize']
	hasBorder?: boolean
	borderColor?: CSSProperties['borderColor']
	borderWidth?: CSSProperties['borderWidth']
	color?: CSSProperties['color']
	calendarMarginTop?: CSSProperties['marginTop']
	calendarMarginLeft?: CSSProperties['marginLeft']
	calendarMarginRight?: CSSProperties['marginRight']
	calendarMarginBottom?: CSSProperties['marginBottom']
	hasDropdownIndicator?: boolean
	dropdownIndicatorColor?: CSSProperties['borderColor']
	dropdownIndicatorSize?: CSSProperties['fontSize']
}

interface NavigationProps<Options extends Record<string, any>[]> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	horizontal?: boolean
	navigationOptions: Options
	navigationItem: (activeIndex: number, setActiveIndex: (index: number) => void, option: Record<string, any>, index: number) => ReactNode
}

interface NavigationLinkProps extends LinkProps {
	icon: ReactNode
	activeIcon: ReactNode
	isActive: boolean
}
