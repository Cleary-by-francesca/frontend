import { Card, Typography } from "./UI/index.jsx";

/**
 *
 * @param props {ShiftCardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ShiftCard = (props) => {
    const { positionColor, time, status, employeePosition, shift } = props

    return (
        <Card
            className={`${status === "published" ? "pl-23": "pl-12"} justify-center`}
            width={'100%'}
            height={'100%'}
            rounded={8}
            hasShadow={false}
            hasIndicator={status !== "published"}
            hasBorder
            borderWidth={status === "published" ? 2 : 1}
            borderColor={status === "published" ? positionColor : ''}
            indicatorColor={positionColor}>
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
        </Card>
    )
}

export default ShiftCard
