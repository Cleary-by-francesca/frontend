import {Button, Col, Icon, Row, Typography} from "../UI/index.jsx";
import {useEmployeesContext} from "../../context/EmployeesContext.jsx";


/**
 *
 * @param props {import("../components").ArchiveEmployeeDialogProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ArchiveEmployeeDialog = (props) => {
    const {employee, closeDialogAction} = props

    const {archiveEmployee} = useEmployeesContext()

    return (
        <Col className="justify-center align-center">
            <Row className="justify-center pt-88">
                <Icon
                    size={35}
                    color={'#E74C3C'}>
                    <IconPhWarningCircleThin/>
                </Icon>
            </Row>

            <Row className="pt-20">
                <Typography
                    size={20}
                    fontWeight={300}
                    variant={'h6'}>
                    Are you sure you want Archive
                </Typography>
            </Row>
            <Row className="pt-4">
                <Typography
                    size={20}
                    fontWeight={400}
                    variant={'h6'}>
                    {employee.firstName} {employee.lastName}?
                </Typography>
            </Row>

            <Row className="pt-70 justify-between">
                <Button
                    className="mx-32"
                    onClick={() => closeDialogAction()}
                    width={162}>
                    <Typography
                        size={13}
                        fontWeight={400}
                        color={'white'}
                        variant={'button1'}>
                        Cancel
                    </Typography>
                </Button>

                <Button
                    className="mx-32 px-12"
                    outlined
                    variant="default"
                    onClick={() => {
                        archiveEmployee(employee.id)
                        closeDialogAction()
                    }}
                    borderColor={'#2C2C2C'}
                    width={162}>
                    <Row className="align-center">
                        <Typography
                            className="pr-10"
                            size={13}
                            fontWeight={400}
                            color={'#2C2C2C'}
                            variant={'button1'}>
                            Move to archive
                        </Typography>

                        <Icon
                            color={'#2C2C2C'}
                            size={20}>
                            <IconBytesizeArchive/>
                        </Icon>
                    </Row>
                </Button>
            </Row>
        </Col>
    )
}

export default ArchiveEmployeeDialog
