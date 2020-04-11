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

export default (styles = []) => {
  let className = '';
  styles.map((style, index) => {
    if (index === 0) {
      className += `${style}`;
    } else {
      if (style) {
        className += ` ${style}`;
      } else {
        className += `${style}`;
      }
    }
  });

  return className;
}
