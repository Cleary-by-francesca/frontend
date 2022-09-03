import style from "./Table.module.css";
import {Row, Typography} from "../index.jsx";
import {AnimatePresence} from "framer-motion";
import TableRow from "./TableRow.jsx";

/**
 *
 * @param props {TableProps}
 * @constructor
 */
const Table = (props) => {
    const {headers, components, data, hasActions, actionsTitle, actionsWidth, actionsComp} = props

    return (
        <Row className={style.schedulerWrapper}>
            <table className={`w-full h-full ${style.schedulerMain}`}>
                <thead>
                <tr>
                    {headers.map(({display, key, width}) => (
                        <th
                            style={{width, height: 80}}
                            key={key}>
                            <Typography
                                className="pl-24 py-24"
                                width={'fit-content'}
                                fontWeight={500}
                                color={'#515151'}
                                variant="h5">
                                {display}
                            </Typography>
                        </th>
                    ))}

                    {hasActions && <th style={{width: actionsWidth}}>{actionsTitle}</th>}
                </tr>
                </thead>

                <tbody>
                <AnimatePresence initial={false}>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}>
                            {headers.map(({display, key}, index) => (
                                <td
                                    style={{height: 80}}
                                    className={`pl-24 ${style.boxBorder}`}
                                    key={index}>
                                    {Object.keys(item).length > -1 && (
                                        components[key] ? components[key](item) : (
                                            <Typography
                                                color={'#515151'}
                                                spacing={0.1}
                                                variant={'button1'}>
                                                {item[key]}
                                            </Typography>
                                        )
                                    )}
                                </td>
                            ))}

                            {hasActions && (
                                <td
                                    className={`${style.boxBorder}`}
                                    style={{width: actionsWidth}}>{actionsComp(item)}</td>
                            )}
                        </TableRow>
                    ))}
                </AnimatePresence>
                </tbody>
            </table>
        </Row>
    )
}

Table.defaultProps = {
    actionsWidth: 120
}

export default Table
