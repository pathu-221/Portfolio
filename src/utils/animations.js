const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };


export const bottomToTop = {
    initial: {
        y: '100%',
        transition
    },
    animate: {
        y: '0',
        transition
    },
    exit: {
        y: '-100%',
        transition

    }
}

export const topToBottom = {
    initial: {
        y: '-100%',
        transition
    },
    animate: {
        y: '0',
        transition
    },
    // exit: {
    //     y: '100%',
    //     transition

    // }
}