import {Avatar, Col, Typography} from "./index.jsx";

/**
 *
 * @param props {ProfileProps}
 * @returns {JSX.Element}
 * @constructor
 */
const Profile = (props) => {
    const {name, rating, image, ratingScale, indicatorColor, className, ...restProps} = props

    return (
        <div className={`flex-row ${className}`} {...restProps}>
            <Avatar
                hasIndicator
                src={image}
                borderWidth={2}
                borderColor={indicatorColor}
                size={32}/>
            <Col className="pl-12">
                <Typography size={14} className="font-bold whitespace-nowrap" variant={'subtitle2'}>
                    {name}
                </Typography>
                <Typography size={14} variant={'body2'}>
                    {rating} / {ratingScale}
                </Typography>
            </Col>
        </div>
    )
}

Profile.defaultProps = {
    className:      '',
    ratingScale:    5,
    indicatorColor: '#1CB2B2'
}

export default Profile
