import Portal from "../Portal/Portal"
import Card from "../Card/Card"
import Backdrop from "../Backdrop/Backdrop";


/**
 *
 * @param props {ModalProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Dialog = (props) => {
    const {children, className, centered, height, width, onBackdropClick, ...restProps} = props

    return (
        <Portal>
            <div
                style={{zIndex: 1300}}
                className={`${centered ? ' flex-col justify-center items-center' : ''} h-full w-full fixed relative ${className}`}>
                <Backdrop
                    onClick={onBackdropClick}
                    active/>
                <div style={{zIndex: 1300}}>
                    <Card
                        {...restProps}
                        className="relative"
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        style={{
                            margin: 'auto'
                        }}
                        {...{height, width}}>
                        {children}
                    </Card>
                </div>
            </div>
        </Portal>
    )
}

Dialog.defaultProps = {
    className:       '',
    height:          "400px",
    width:           "400px",
    onBackdropClick: () => {
    },
    centered:        false,
}

export default Dialog
