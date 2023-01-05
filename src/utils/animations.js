export const pageHeadAnimation = {
    initial: {
        y: '100%',
    },
    animate: {
        y: '0',
        transition: {
            duration: .4,
           default: { ease: 'easeOut'}
        }
    },
    exit: {
        y: '-100%',

    }
}