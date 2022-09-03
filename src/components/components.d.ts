import {CSSProperties} from "react";

export interface ShiftCardProps {
	positionColor?: CSSProperties['borderColor']
	time: string
	employeePosition: string
	shift: string
}

interface ArchiveEmployeeDialogProps {
	employee: { id: number, name: string } & { [key: string]: any }
	closeDialogAction: () => void
}

interface EmployeeFormData {
	firstName: string
	lastName: string
	role: { label: string, value: string }
	dateOfBirth: string
	mobileNumber: string
	email: string
}

interface AddEmployeeDialogProps {
	initialData?: EmployeeFormData
	closeDialogAction: () => void
}

interface AddEmployeeFormProps {
	initialData?: EmployeeFormData
	onSubmit: () => void
	onClose: () => void
}
