import {CSSProperties} from "react";

export interface ShiftCardProps {
	positionColor?: CSSProperties['borderColor']
	time: string
	employeePosition: string
	shift: string
}

