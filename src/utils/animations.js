const transition = { 
    duration: 0.4, 
    ease: [0.43, 0.13, 0.23, 0.96],
};




export const staggeredUp = {
    hidden: { y: '100%'  },
    show: {
      y: 0,
      transition: {
        ...transition,
        staggerChildren: .1
      }
    },
    exit: { y: '100%'}
  }
  
export const staggeredRight = {
    hidden: { x: '100%'  },
    show: {
      x: 0,
      transition: {
        duration: .8, 
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: .2
      }
    },
    exit: { x: '100%'}
  }
  


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
    exit: {
        y: '100%',
        transition

    }
}