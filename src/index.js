import 'bootstrap/dist/css/bootstrap.min.css';
import { onlyNumbers } from './utils';
import { validateCpf, validateCnpj, validateEmail, validatePhone, validatePhoto, isNumber } from './validations';
import {
  normalizeDate, normalizeTime, normalizeDatetime, normalizeCPF, normalizeCNPJ,
  normalizeValue, normalizePhone, normalizeZipCode
} from './normalizers';

export { InputField } from './fields/InputField';
export { CheckField } from './fields/CheckField';
export { TextAreaField } from './fields/TextAreaField';
export { SelectField } from './fields/SelectField';
export { RangeField } from './fields/RangeField';
export { ImageField } from './fields/ImageField';
export { FileField } from './fields/FileField';
export { InputGroupField } from './fields/InputGroup';
export { DateTimePicker } from './fields/DateTimeField';
export { ColorField } from './fields/ColorField';
export { DataListField } from './fields/DataListField';
export { Json, Fieldset } from './components';

export class Utilities {
  static normalize(type, data) {
    switch (type) {
      case 'date':
        return normalizeDate(data);
      case 'time':
        return normalizeTime(data);
      case 'datetime':
        return normalizeDatetime(data);
      case 'cpf':
        return normalizeCPF(data);
      case 'cnpj':
        return normalizeCNPJ(data);
      case 'value':
        return normalizeValue(data);
      case 'phone':
        return normalizePhone(data);
      case 'zipCode':
        return normalizeZipCode(data);
      case 'number':
        return onlyNumbers(data);
      default:
        return null;
    }
  }

  static validate(type, data) {
    switch (type) {
      case 'cpf':
        return validateCpf(data);
      case 'cnpj':
        return validateCnpj(data);
      case 'email':
        return validateEmail(data);
      case 'phone':
        return validatePhone(data);
      case 'photo':
        return validatePhoto(data);
      case 'number':
        return isNumber(data);
      default:
        return null;
    }
  }
}
