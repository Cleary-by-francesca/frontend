import {Row, Typography} from "./..";
import style from './Scheduler.module.css';
import {filterDate, generateDates} from "../../../Util/Time";
import {motion, AnimatePresence} from "framer-motion";
import {fadeInOutAnimation} from "../Utils/utils.js";

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
                                fontWeight={500}
                                color={'#515151'}
                                variant="h5">
                                {label}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <AnimatePresence initial={false}>
                    {data.map(({dates, ...restData}, index) => (
                        <motion.tr {...fadeInOutAnimation} key={index}>
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
                        </motion.tr>
                    ))}
                </AnimatePresence>
                </tbody>
            </table>
        </Row>
    )
}

export default Scheduler
