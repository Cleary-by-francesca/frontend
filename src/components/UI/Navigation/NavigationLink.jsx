import {Link} from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import cssStyle from "./Navigation.module.css";

/**
 *
 * @param props {import("../UI").NavigationLinkProps}
 * @returns {JSX.Element}
 * @constructor
 */
const NavigationLink = ({isActive, icon, activeIcon, ...restProps}) => {

    return (
        <Link
            {...restProps}
            className={cssStyle.navigationLink}>
            <Icon
                color={isActive ? '#53326C' : '#515151'}>
                {isActive ? activeIcon : icon}
            </Icon>
        </Link>
    )
}

export default NavigationLink
