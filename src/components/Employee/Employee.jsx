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
        <Row
            onClick={onSelect}
            className="pl-16 cursor-pointer py-14">
            <Icon color="#515151"
                  size={20}>
                {selected ? <IconLocalCheckCircledOutlined/> : <IconLocalPlusCircledOutlined/>}
            </Icon>
            <Typography
                className="ml-12"
                variant={'body1'}>
                {name}
            </Typography>
        </Row>
    )
}

Employee.defaultProps = {
    className:      '',
    indicatorColor: '#1CB2B2'
}

export default Employee
