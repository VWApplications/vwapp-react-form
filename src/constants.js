export const FLEX = {
  flexbox: 'd-flex',
  inlineFlexbox: 'd-inline-flex',
  wrap: 'flex-nowrap',
  wrapReverse: 'flex-wrap-reverse',
  noWrap: 'flex-nowrap',
  horizontalDirectionReverse: 'flex-row-reverse',
  verticalDirection: 'flex-column',
  verticalDirectionReverse: 'flex-column-reverse',
  horizontalAlignStart: 'justify-content-start',
  horizontalAlignEnd: 'justify-content-end',
  horizontalAlignCenter: 'justify-content-center',
  horizontalAlignBetween: 'justify-content-between',
  horizontalAlignAround: 'justify-content-around',
  verticalBlockAlignStart: 'align-content-start',
  verticalBlockAlignEnd: 'align-content-end',
  verticalBlockAlignCenter: 'align-content-center',
  verticalBlockAlignAround: 'align-content-around',
  verticalBlockAlignStretch: 'align-content-stretch',
  verticalLineAlignStart: 'align-items-start',
  verticalLineAlignEnd: 'align-items-end',
  verticalLineAlignCenter: 'align-items-center',
  verticalLineAlignBaseline: 'align-items-baseline',
  verticalLineAlignStretch: 'align-items-stretch',
  itemAlignStart: 'align-self-start',
  itemAlignEnd: 'align-self-end',
  itemAlignCenter: 'align-self-center',
  itemAlignBaseline: 'align-self-baseline',
  itemAlignStretch: 'align-self-stretch',
  itemFill: 'flex-fill',
  itemGrow: 'flex-grow-1',
  itemShrink: 'flex-shrink-1',
  itemOrder1: 'order-1',
  itemOrder2: 'order-2',
  itemOrder3: 'order-3',
  itemOrder4: 'order-4',
  itemOrder5: 'order-5',
  itemOrder6: 'order-6',
  itemOrder7: 'order-7',
  itemOrder8: 'order-8',
  itemOrder9: 'order-9',
  itemOrder10: 'order-10',
  itemOrder11: 'order-11',
  itemOrder12: 'order-12',
  itemRight: 'mr-auto',
  itemLeft: 'ml-auto'
}

const TEXT_COLORS = {
  textPrimary: 'text-primary',
  textSuccess: 'text-success',
  textInfo: 'text-info',
  textWarning: 'text-warning',
  textDanger: 'text-danger',
  textSecundary: 'text-secondary',
  textWhite: 'text-white',
  textDark: 'text-dark'
}

const BACKGROUND_COLORS = {
  backgroundPrimary: 'bg-primary',
  backgroundSuccess: 'bg-success',
  backgroundInfo: 'bg-info',
  backgroundWarning: 'bg-warning',
  backgroundDanger: 'bg-danger',
  backgroundSecundary: 'bg-secondary',
  backgroundDark: 'bg-dark',
  backgroundLight: 'bg-light'
}

export const COLORS = { ...TEXT_COLORS, ...BACKGROUND_COLORS };

export const TYPOGRAPHY = {
  bold: 'font-weight-bold',
  italic: 'font-italic',
  light: 'font-weight-light',
  small: 'small',
  big: 'lead',
  alignLeft: 'text-left',
  alignRight: 'text-right',
  alignCenter: 'text-center',
  justify: 'text-justify',
  break: 'text-break',
  noDecoration: 'text-decoration-none',
  lowercase: 'text-lowercase',
  uppercase: 'text-uppercase',
  capitalize: 'text-capitalize',
  listUnstyled: 'list-unstyled'
}

export const BORDER = {
  fillBorder: 'border',
  noBorder: 'border-0',
  noTopBorder: 'border-top-0',
  noBottomBorder: 'border-top-0',
  noLeftBorder: 'border-top-0',
  noRightBorder: 'border-top-0',
  roundedBorder: 'rounded',
  circleBorder: 'rounded-circle',
  roundedTop: 'rounded-top',
  roundedBottom: 'rounded-bottom',
  roundedLeft: 'rounded-left',
  roundedRight: 'rounded-right'
}

export const MEASURES = {
  width_25: 'w-25',
  width_50: 'w-50',
  width_75: 'w-75',
  width_100: 'w-100',
  height_25: 'h-25',
  height_50: 'h-50',
  height_75: 'h-75',
  height_100: 'h-100'
}

// xs, sm, md, lg, xl (xx-*-x)
export const SPACING = {
  marginTop_0: 'mt-0',
  marginTop_25: 'mt-1',
  marginTop_50: 'mt-2',
  marginTop_100: 'mt-3',
  marginTop_150: 'mt-4',
  marginTop_300: 'mt-5',
  marginTopAuto: 'mt-auto',
  marginBottom_0: 'mb-0',
  marginBottom_25: 'mb-1',
  marginBottom_50: 'mb-2',
  marginBottom_100: 'mb-3',
  marginBottom_150: 'mb-4',
  marginBottom_300: 'mb-5',
  marginBottomAuto: 'mb-auto',
  marginLeft_0: 'ml-0',
  marginLeft_25: 'ml-1',
  marginLeft_50: 'ml-2',
  marginLeft_100: 'ml-3',
  marginLeft_150: 'ml-4',
  marginLeft_300: 'ml-5',
  marginLeftAuto: 'ml-auto',
  marginRight_0: 'mr-0',
  marginRight_25: 'mr-1',
  marginRight_50: 'mr-2',
  marginRight_100: 'mr-3',
  marginRight_150: 'mr-4',
  marginRight_300: 'mr-5',
  marginRightAuto: 'mr-auto',
  paddingTop_0: 'pt-0',
  paddingTop_25: 'pt-1',
  paddingTop_50: 'pt-2',
  paddingTop_100: 'pt-3',
  paddingTop_150: 'pt-4',
  paddingTop_300: 'pt-5',
  paddingTopAuto: 'pt-auto',
  paddingBottom_0: 'pb-0',
  paddingBottom_25: 'pb-1',
  paddingBottom_50: 'pb-2',
  paddingBottom_100: 'pb-3',
  paddingBottom_150: 'pb-4',
  paddingBottom_300: 'pb-5',
  paddingBottomAuto: 'pb-auto',
  paddingLeft_0: 'pl-0',
  paddingLeft_25: 'pl-1',
  paddingLeft_50: 'pl-2',
  paddingLeft_100: 'pl-3',
  paddingLeft_150: 'pl-4',
  paddingLeft_300: 'pl-5',
  paddingLeftAuto: 'pl-auto',
  paddingRight_0: 'pr-0',
  paddingRight_25: 'pr-1',
  paddingRight_50: 'pr-2',
  paddingRight_100: 'pr-3',
  paddingRight_150: 'pr-4',
  paddingRight_300: 'pr-5',
  paddingRightAuto: 'pr-auto'
}

export const SHADOW = {
  noShadow: 'shadow-none',
  smallShadow: 'shadow-sm',
  shadow: 'shadow',
  bigShadow: 'shadow-lg'
}

export const VISIBILITY = {
  visible: 'visible',
  invisible: 'invisible'
}

export const POSITION = {
  fixedTop: 'fixed-top',
  fixedBottom: 'fixed-bottom',
  stickyTop: 'sticky-top'
}

// xs, sm, md, lg, xl (d-*-)
export const DISPLAY = {
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
