export const Flexbox = {
  container: {
    total: 'd-flex',
    partial: 'd-inline-flex'
  },
  direction: {
    horizontal: {
      this: 'flex-row',
      reverse: 'flex-row-reverse'
    },
    vertical: {
      this: 'flex-column',
      reverse: 'flex-column-reverse'
    }
  },
  align: {
    vertical: {
      block: {
        up: 'align-content-start',
        down: 'align-content-end',
        center: 'align-content-center',
        spaceAround: 'align-content-around',
        fill: 'align-content-stretch'
      },
      line: {
        up: 'align-items-start',
        down: 'align-items-end',
        center: 'align-items-center',
        baseline: 'align-items-baseline',
        fill: 'align-items-stretch'
      }
    },
    horizontal: {
      line: {
        start: 'justify-content-start',
        end: 'justify-content-end',
        center: 'justify-content-center',
        spaceBetween: 'justify-content-between',
        spaceAround: 'justify-content-around'
      },
      drag: {
        left: 'ml-auto',
        right: 'mr-auto'
      }
    },
    wrap: {
      this: 'flex-wrap',
      none: 'flex-nowrap',
      reverse: 'flex-wrap-reverse'
    }
  },
  item: {
    fill: 'flex-fill',
    grow: 'flex-grow-1',
    shrink: 'flex-shrink-1',
    align: {
      start: 'align-self-start',
      end: 'align-self-end',
      center: 'align-self-center',
      baseline: 'align-self-baseline',
      fill: 'align-self-stretch'
    },
    order: {
      first: 'order-1',
      second: 'order-2',
      third: 'order-3',
      fourth: 'order-4',
      fifth: 'order-5',
      sixth: 'order-6',
      seventh: 'order-7',
      eighth: 'order-8',
      ninth: 'order-9',
      tenth: 'order-10',
      eleventh: 'order-11',
      twelfth: 'order-12'
    }
  }
}

export const Colors = {
  text: {
    primary: 'text-primary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    danger: 'text-danger',
    secundary: 'text-secondary',
    white: 'text-white',
    dark: 'text-dark'
  },
  background: {
    primary: 'bg-primary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    danger: 'bg-danger',
    secundary: 'bg-secondary',
    dark: 'bg-dark',
    light: 'bg-light'
  }
}

export const Typography = {
  bold: 'font-weight-bold',
  italic: 'font-italic',
  light: 'font-weight-light',
  small: 'small',
  big: 'lead',
  justify: 'text-justify',
  break: 'text-break',
  noDecoration: 'text-decoration-none',
  lowercase: 'text-lowercase',
  uppercase: 'text-uppercase',
  capitalize: 'text-capitalize',
  align: {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
  }
}

export const Others = {
  listUnstyled: 'list-unstyled'
}

export const Border = {
  fill: 'border',
  circle: 'rounded-circle',
  remove: {
    all: 'border-0',
    top: 'border-top-0',
    bottom: 'border-bottom-0',
    left: 'border-left-0',
    right: 'border-right-0'
  },
  rounded: {
    full: 'rounded',
    top: 'rounded-top',
    bottom: 'rounded-bottom',
    left: 'rounded-left',
    right: 'rounded-right'
  }
}

export const Measures = {
  width: {
    oneQuarter: 'w-25',
    half: 'w-50',
    twoQuarter: 'w-75',
    whole: 'w-100'
  },
  height: {
    oneQuarter: 'h-25',
    half: 'h-50',
    twoQuarter: 'h-75',
    whole: 'h-100'
  }
}

// xs, sm, md, lg, xl (xx-*-x)
export const Spacing = {
  margin: {
    top: {
      _0: 'mt-0',
      _25: 'mt-1',
      _50: 'mt-2',
      _100: 'mt-3',
      _150: 'mt-4',
      _300: 'mt-5',
      auto: 'mt-auto'
    },
    bottom: {
      _0: 'mb-0',
      _25: 'mb-1',
      _50: 'mb-2',
      _100: 'mb-3',
      _150: 'mb-4',
      _300: 'mb-5',
      auto: 'mb-auto'
    },
    left: {
      _0: 'ml-0',
      _25: 'ml-1',
      _50: 'ml-2',
      _100: 'ml-3',
      _150: 'ml-4',
      _300: 'ml-5',
      auto: 'ml-auto'
    },
    right: {
      _0: 'mr-0',
      _25: 'mr-1',
      _50: 'mr-2',
      _100: 'mr-3',
      _150: 'mr-4',
      _300: 'mr-5',
      auto: 'mr-auto'
    }
  },
  padding: {
    top: {
      _0: 'pt-0',
      _25: 'pt-1',
      _50: 'pt-2',
      _100: 'pt-3',
      _150: 'pt-4',
      _300: 'pt-5',
      auto: 'pt-auto'
    },
    bottom: {
      _0: 'pb-0',
      _25: 'pb-1',
      _50: 'pb-2',
      _100: 'pb-3',
      _150: 'pb-4',
      _300: 'pb-5',
      auto: 'pb-auto'
    },
    left: {
      _0: 'pl-0',
      _25: 'pl-1',
      _50: 'pl-2',
      _100: 'pl-3',
      _150: 'pl-4',
      _300: 'pl-5',
      auto: 'pl-auto'
    },
    right: {
      _0: 'pr-0',
      _25: 'pr-1',
      _50: 'pr-2',
      _100: 'pr-3',
      _150: 'pr-4',
      _300: 'pr-5',
      auto: 'pr-auto'
    }
  }
}

export const Shadow = {
  none: 'shadow-none',
  small: 'shadow-sm',
  medium: 'shadow',
  big: 'shadow-lg'
}

export const Visibility = {
  visible: 'visible',
  invisible: 'invisible'
}

export const Position = {
  fixedTop: 'fixed-top',
  fixedBottom: 'fixed-bottom',
  stickyTop: 'sticky-top'
}

// xs, sm, md, lg, xl (d-*-)
export const Display = {
  block: 'd-block',
  hidden: 'd-none',
  inline: 'd-inline',
  inlineBlock: 'd-inline-block',
  table: 'd-table',
  tableCell: 'd-table-cell',
  tableRow: 'd-table-row',
  flexbox: 'd-flex',
  inlineFlexbox: 'd-inline-flex'
}
