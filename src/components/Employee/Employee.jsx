import {Typography, Row, Button, Col, Icon} from "../UI";
import style from './Employee.module.css';

/**
 *
 * @param {props}
 * @returns {JSX.Element}
 * @constructor
 */
const Employee = ({name, position, selected, onSelect}) => {

    return (
        <div className={`flex-row cursor-pointer`} onClick={onSelect}>
            <div className={`${selected ? style.selected : ''}`}>
                <Row>
                    <Icon color="#515151"
                          size={20}>
                        {selected ? <IconMdiCheckboxMarkedCircleOutline/> : <IconIcBaselineAddCircleOutline/>}
                    </Icon>
                    <Typography
                        className="ml-12"
                        variant={'body1'}>
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
