import {Row, Typography} from "./..";
import style from './Scheduler.module.css';
import {filterDate, generateDates} from "../../../modules/Time";

/**
 * @param {SchedulerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
const Scheduler = (props) => {
    const {startDate, data, tdContentComp, profileComp} = props

    const generatedDates = generateDates(startDate)

    return (
        <Row className={style.schedulerWrapper}>
            <table className={`w-full h-full ${style.schedulerMain}`}>
                <thead>
                <tr>
                    <th className={style.boxBorder}/>
                    {generatedDates.map(({label}, index) => (
                        <th className={style.boxBorder} key={index}>
                            <Typography
                                className="py-24"
                                color={'#515151'}
                                variant="h5">
                                {label}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map(({dates, ...restData}, index) => (
                    <tr key={index}>
                        <td style={{width: 200}} className={style.boxBorder}>
                            {profileComp({dates, ...restData})}
                        </td>

                        {generatedDates.map((date, index) => (
                            <td className={style.boxBorder} key={date.label}>
                                {Object.keys(restData).length > 0 && (
                                    tdContentComp({...filterDate(dates, startDate, index), userData: restData})
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </Row>
    )
}

export default Scheduler
