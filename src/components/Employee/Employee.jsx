import {Typography, Row, Button, Col, Icon} from "../UI";
import style from './Employee.module.css';

/**
 *
 * @param {props}
 * @returns {JSX.Element}
 * @constructor
 */
const Employee = ( {name, position, selected, onSelect}) => {

    return (
        <div className={`flex-row` }>
            <div className={`${style.employee} ${selected? style.selected: ''}`}>
            <Row>
            <button className={`${style.btn}`} onClick={onSelect}>  
                <Icon color="#515151" backgroundColor="#FFFFFF"
                    size={20}>
                   { selected ? <IconMdiCheckboxMarkedCircleOutline/> : <IconIcBaselineAddCircleOutline/> }
                </Icon>
            </button>
            <Typography className={`${style.title}`} variant={'body1'}>
                {name}
            </Typography>
            </Row>
            </div>
        </div>
    )
}

Employee.defaultProps = {
    className:      '',
    indicatorColor: '#1CB2B2'
}

export default Employee