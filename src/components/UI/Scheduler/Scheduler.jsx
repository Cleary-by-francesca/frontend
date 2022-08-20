import {Row, Typography} from "./..";
import style from './Scheduler.module.css';

const dates = [
    {label: 'Mon 9/11'},
    {label: 'Mon 10/11'},
    {label: 'Mon 11/11'},
    {label: 'Mon 12/11'},
    {label: 'Mon 13/11'},
    {label: 'Mon 14/11'},
    {label: 'Mon 15/11'},
]

const Scheduler = (props) => {
    const {data, tdContentComp, profileComp} = props

    return (
        <Row className={style.schedulerWrapper}>
            <table className={`w-full h-full ${style.schedulerMain}`}>
                <thead>
                <tr>
                    <th className={style.boxBorder}/>
                    {dates.map(({label}, index) => (
                        <th className={style.boxBorder} key={index}>
                            <Typography
                                className="pt-20 pb-30"
                                color={'#6F6F6F'}
                                size={24}
                                variant="h5">
                                {label}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((data, index) => (
                    <tr key={index}>
                        <td style={{width: 200}} className={style.boxBorder}>
                            {profileComp(data)}
                        </td>

                        {data.dates.map(({date, ...restData}, index) => (
                            <td className={style.boxBorder} key={index}>
                                {tdContentComp({...restData, date})}
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
