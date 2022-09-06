import {Typography, Row} from "../UI";
import style from './Role.module.css';

/**
 *
 * @param props {import("../components").RoleProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Role = (props) => {
    const {title, roleColor, height, width, selected, onSelect} = props

    return (
        <button
            style={{height, width}}
            className={`flex-row justify-between align-center px-16  ${style.role} ${selected ? style.selected : ''}`}
            onClick={onSelect}>

            <Row>
                <span
                    className={`${style.dot} mr-18`}
                    style={{
                        backgroundColor: roleColor,
                    }}/>

                <Typography
                    variant={'h6'}>
                    {title}
                </Typography>
            </Row>

            <Typography className="mr-16" variant={'h6'}>
                Edit
            </Typography>
        </button>
    )
}

Role.defaultProps = {
    className:      '',
    indicatorColor: '#1CB2B2',
    height:         36,
    width: 386
}

export default Role
