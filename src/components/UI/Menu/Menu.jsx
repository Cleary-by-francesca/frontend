import style from "./Menu.module.scss";
import RelativePortal from "../Portal/RelativePortal.jsx";
import {useState} from "react";
import Portal from "../Portal/Portal.jsx";
import Backdrop from "../Backdrop/Backdrop.jsx";
import {Icon, Typography} from "../index.jsx";
import Divider from "../Divider/Divider.jsx";
import {AnimatePresence, motion} from "framer-motion";
import {openAnimation} from "../Utils/utils.js";

/**
 * @param props {import("../UI").MenuProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = (props) => {
    const {children, menuPlacement, onSelect, options, offsetX, offsetY, itemHeight, width, openOnClick} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <Portal>
                    <Backdrop
                        isTransparent
                        active={isOpen}
                        onClick={() => setIsOpen(false)}/>
                </Portal>
            )}

            <AnimatePresence>
                <RelativePortal
                    offsetX={offsetX}
                    offsetY={offsetY}
                    elementWrapperProps={{
                        onClick: () => {
                            openOnClick && setIsOpen(!isOpen)
                        },
                    }}
                    isOpen={isOpen}
                    placement={menuPlacement}
                    portalContent={
                        <motion.div
                            {...openAnimation}
                            style={{width}}
                            className={style.menu}>
                            {
                                options.map((option, index) => (
                                    <div className="w-full" key={index}>
                                        <div
                                            onClick={() => {
                                                onSelect(option)
                                                setIsOpen(false)
                                            }}
                                            style={{height: itemHeight}}
                                            className={`${style.menuItem} ${index === 0 ? style.firstMenuItem : ''} ${index === options.length - 1 ? style.lastMenuItem : ''}`}>

                                            <Icon
                                                flip={option.flipIcon}
                                                size={20}
                                                color={'#515151'}
                                                className="pr-20">
                                                {option.icon}
                                            </Icon>

                                            <Typography
                                                variant={'body2'}>
                                                {option.label}
                                            </Typography>
                                        </div>

                                        {
                                            index < options.length - 1 && (
                                                <Divider horizontal color={'#E1E1E1'} opacity={0.25}/>)
                                        }
                                    </div>
                                ))
                            }
                        </motion.div>
                    }>
                    {children}
                </RelativePortal>
            </AnimatePresence>
        </>
    )
}

Menu.defaultProps = {
    openOnClick: false,
    onSelect:    () => '',
    itemHeight:  74,
    width:       224
}

export default Menu
