import {Typography, Row, Button, Col} from "../UI";
import style from './Role.module.css';

/**
 *
 * @param {props}
 * @returns {JSX.Element}
 * @constructor
 */
const Role = ( {title, roleColor, selected, onSelect}) => {

    return (
        <div className={`flex-row` }>
            <div className={`${style.role} ${selected? style.selected: ''}`}>
            <Row>
            <button className={`${style.btn}`} onClick={onSelect}>  
            <div className={`${style.position}`}>
            <span className={`${style.dot}`}
            style={{
                backgroundColor: roleColor, marginRight: "17.44px"
            }}/>
            <Typography className={`${style.title}`} variant={'h6'}>
                {title}
            </Typography>
            </div>
            <Typography className={`${style.edit}`} variant={'h6'}>
                Edit
            </Typography>
            </button>
            </Row>
            </div>
        </div>
    )
}

Role.defaultProps = {
    className:      '',
    indicatorColor: '#1CB2B2'
}

export default Role