/** @type {import("framer-motion").AnimationProps} */
export const fadeInOutAnimation = {
    initial:    {opacity: 0},
    animate:    {opacity: 1},
    exit:       {opacity: 0},
    transition: {duration: 0.3},
}

/** @type {import("framer-motion").AnimationProps} */
export const openAnimation = {
    initial:    {opacity: 0, origin: '50% -30px'},
    animate:    {opacity: 1, origin: '0 0'},
    exit:       {opacity: 0, origin: '50% -30px'},
    transition: {duration: 0.27},
}
