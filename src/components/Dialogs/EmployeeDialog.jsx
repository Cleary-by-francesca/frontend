import style from './AddEmployeeDialog.module.scss'
import {Col, Icon, Row, Typography} from "../UI/index.jsx";

import EmployeeForm from "../Forms/EmployeeForm.jsx";

/**
 *
 * @param props {import("../components").AddEmployeeDialogProps}
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeDialog = (props) => {
    const {employeeId, closeDialogAction, initialData} = props

    const isEditingMode = Object.keys(initialData).length > 0


    return (
        <Col className="pt-112 align-center h-full w-full">
            <Col>
                <Row>
                    <Typography
                        color={'#515151'}
                        fontWeight={500}
                        variant={'h5'}>
                        Employees
                    </Typography>

                    <Icon
                        color={'#515151'}
                        className="px-22"
                        size={18}>
                        <IconIonChevronRight/>
                    </Icon>

                    <Typography
                        color={'#515151'}
                        fontWeight={500}
                        variant={'h5'}>
                        {isEditingMode ? `${initialData.firstName} ${initialData.lastName}` : 'Add New Employee'}
                    </Typography>
                </Row>

                <EmployeeForm
                    employeeId={employeeId}
                    initialData={initialData}
                    onSubmit={closeDialogAction}
                    onClose={closeDialogAction}/>
            </Col>
        </Col>
    )
}

EmployeeDialog.defaultProps = {
    initialData: {}
}

export default EmployeeDialog
