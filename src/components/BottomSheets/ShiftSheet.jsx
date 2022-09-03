import {useEffect, useState} from "react";
import {getRoles} from "../../services/Roles/Roles.js";
import {Avatar, Col, Divider, Icon, Row, Typography} from "../UI/index.jsx";
import moment from "moment";
import ShiftForm from "../Forms/ShiftForm.jsx";

const ShiftSheet = (props) => {
    const {
              date, employee,
              initialData,
          } = props

    const [rolesList, setRolesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            const roles = await getRoles()
            setRolesList(roles)
            setIsLoading(false)
        })()
    }, [])

    return (
        isLoading ? <div>Loading...</div> : (
            <Row className="w-full h-full align-center pt-58 pb-42">
                <Col style={{width: 545}} className="justify-center align-center">
                    <Typography
                        className="font-bold mb-50"
                        color="#515151"
                        variant="h4">
                        {moment(date).format('dddd')}
                    </Typography>

                    <Typography
                        className="font-bold"
                        color="#515151"
                        variant="h4">
                        {moment(date).format('DD/MM, YYYY')}
                    </Typography>
                </Col>

                <Divider/>

                <Col className="border-left pt-6 pl-90 w-full h-full">
                    <Row className="align-center">
                        <Typography
                            color={'#515151'}
                            fontWeight={500}
                            variant={'h5'}>
                            Employee
                        </Typography>

                        <Icon
                            color={'#515151'}
                            className="px-14"
                            size={18}>
                            <IconIonChevronRight/>
                        </Icon>

                        <Avatar
                            className="mr-7"
                            src={employee.image}
                            borderWidth={2}
                            borderColor={(rolesList.find(role => role.title === employee.position)).color}
                            size={32}/>

                        <Typography
                            color={'#515151'}
                            fontWeight={500}
                            variant={'h5'}>
                            {employee.firstName} {employee.lastName}
                        </Typography>
                    </Row>

                    <Col className="pt-60 h-full w-full">
                        <ShiftForm initialData={{
                            ...initialData,
                            position: employee.position
                        }}/>
                    </Col>
                </Col>
            </Row>
        )
    )
}

export default ShiftSheet
