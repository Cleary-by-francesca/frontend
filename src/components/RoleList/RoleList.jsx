import {Role} from "../Role/Role";
import style from './RoleList.module.css';
import {Row} from "../UI";

/**
 *
 * @param {props}
 * @returns {JSX.Element}
 * @constructor
 */

const RoleList = ({arrayObj}) => {
    return (
    <div className={`flex-row`}>
        {arrayObj.map((role) => (
        <Row>
            <Role key={role.position}
            title={role.position}
            roleColor={role.color} />
        </Row>
    
        ))}
    </div>
    )
}

RoleList.defaultProps = {
    className:      ''
}

export default RoleList