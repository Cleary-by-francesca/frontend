import style from './ShiftCard.module.css'
import {Card, Typography} from "./UI/index.jsx"

/**
 *
 * @param props {ShiftCardProps}
 * @returns {JSX.Element}
 * @constructor
 */
const ShiftCard = (props) => {
    const {positionColor, time, status, employeePosition, shift, className, ...restProps} = props

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
                className={`ml-4 ${status === "published" ? "pl-16" : "pl-16"} justify-center`}
                width={'100%'}
                height={'100%'}
                rounded={8}
                style={{
                    zIndex: 10,
                }}
                borderWidth={2}
                hasBorder={status === "published"}
                backgroundColor={'#F8F8F8'}
                borderColor={positionColor}>
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
        </div>
    )
}

export default ShiftCard
