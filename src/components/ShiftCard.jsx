import {Card, Typography} from "./UI/index.jsx";

/**
 *
 * @param props {ShiftCardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ShiftCard = (props) => {
    const {positionColor, time, employeePosition} = props

    return (
        <Card
            className="pl-12 justify-center"
            width={'100%'}
            height={'100%'}
            rounded={8}
            hasShadow={false}
            hasIndicator
            hasBorder
            indicatorColor={positionColor}>
            <Typography className="whitespace-nowrap font-bold pb-4" size={13}
                        variant={'subtitle2'}
                        color={'#2C2C2C'}>
                {time}
            </Typography>
            <Typography className="whitespace-nowrap font-bold" size={13}
                        variant={'subtitle2'}
                        color={'#2C2C2C'}>
                {employeePosition} - {'Morning'}
            </Typography>
        </Card>
    )
}

export default ShiftCard
