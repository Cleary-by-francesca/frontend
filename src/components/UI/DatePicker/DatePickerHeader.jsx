import cssStyle from "./DatePicker.module.css";
import {Col, Row, Typography} from "../index.jsx";
import moment from "moment";

const DatePickerHeader = ({startDate, daysGap}) => {

    return (
        <Row className={`justify-between pt-12 px-12 pb-8 ${cssStyle.datePickerHeader}`}>
            <Col>
                <Typography
                    color={'#515151'}
                    size={15}
                    lineHeight={'16px'}
                    fontFamily={'Harmattan'}
                    variant={'body2'}>
                    Start date
                </Typography>

                <Typography variant={'body2'}>
                    {startDate ? moment(startDate).format('MMMM D, YYYY') : ''}
                </Typography>
            </Col>

            <Col>
                <Typography
                    className="pr-84"
                    color={'#515151'}
                    size={15}
                    lineHeight={'16px'}
                    fontFamily={'Harmattan'}
                    variant={'body2'}>
                    End date
                </Typography>

                <Typography variant={'body2'}>
                    {startDate ? moment(startDate).add(daysGap, 'days').format('MMMM D, YYYY') : ''}
                </Typography>
            </Col>
        </Row>
    )
}

export default DatePickerHeader;
