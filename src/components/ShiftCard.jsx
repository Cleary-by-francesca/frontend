import style from './ShiftCard.module.css'
import {Card, Typography, Icon, Col, Menu, Button} from "./UI/index.jsx"

/**
 *
 * @param props {ShiftCardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ShiftCard = (props) => {
    const {
              positionColor, employee, date, time, status, employeePosition, shift, className, isOpen, shiftToEdit,
              shiftToDelete, ...restProps
          } = props

    const editShift = () => {
        shiftToEdit({employee: employee, date, shift: {time, shift, position: employeePosition}})
        isOpen()
    }

    const deleteShift = () => {
        shiftToDelete({id: employee.id, date})
    }

    return (
        <div
            {...restProps}
            className={`${className} ${style.shiftCardWrapper}`}>
            {status !== "published" && (
                <Card
                    className={style.shiftCardIndicator}
                    backgroundColor={positionColor}
                    rounded={8}
                    width={20}
                    height={'100%'}>
                </Card>
            )}
            <Card
                className={`ml-4 flex-row ${status === "published" ? "pl-16" : "pl-16"} align-center justify-between`}
                width={'100%'}
                height={'100%'}
                rounded={8}
                style={{
                    zIndex: 10,
                }}
                hasShadow={false}
                borderWidth={2}
                hasBorder={status === "published"}
                backgroundColor={'#F8F8F8'}
                borderColor={positionColor}
                actionsWidth={40}
                hasActions>
                <Col>
                    <Typography className="whitespace-nowrap font-bold pb-4"
                                variant={'subtitle2'}
                                color={'#2C2C2C'}>
                        {time}
                    </Typography>
                    <Typography className="whitespace-nowrap font-bold"
                                variant={'subtitle2'}
                                color={'#2C2C2C'}>
                        {employeePosition} - {shift}
                    </Typography>
                </Col>

                <Menu
                    width={180}
                    borderRadius={10}
                    offsetY={-50}
                    offsetX={22}
                    openOnClick
                    onSelect={(option) => option.action()}
                    options={[
                        {
                            label:    'Edit Shift',
                            value:    'edit',
                            action:   () => {
                                if (employee) editShift()
                            },
                            icon:     <IconMiEdit/>,
                            flipIcon: true
                        },
                        {
                            label:  'Delete Shift',
                            value:  'delete',
                            action: () => {
                                if (employee) deleteShift()
                            },
                            icon:   <IconRiDeleteBinLine/>,
                        },
                    ]}
                    menuPlacement="top-right">
                    <Button
                        className={`${status === "published" ? 'mr-10' : 'mr-12' }`}
                        icon
                        variant="primary">
                        <Icon
                            width={4}
                            size={20}
                            color={'#515151'}>
                            <IconIcBaselineMoreVert/>
                        </Icon>
                    </Button>
                </Menu>
            </Card>
        </div>
    )
}

export default ShiftCard
