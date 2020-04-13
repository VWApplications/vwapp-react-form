import React, { Fragment, Component } from 'react';
import { Form, Image } from 'react-bootstrap';
import { ImgContainer, FileLabel } from '../styles';
import user from '../assets/img/user.png';

export class ImageField extends Component {
  componentDidMount() {
    const { input } = this.props;

    if (typeof input.value === 'string' && input.value) {
      this.__handlePreview(input.value);
    }
  }

  static defaultProps = {
    previewLogoUrl: user,
    mimeType: 'image/jpeg, image/png'
  };

  __handleChange(event, input) {
    event.preventDefault();
    const imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();
      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      this.__handlePreview(localImageUrl);
    }
  }

  __handlePreview(imgURL) {
    const previewImageDom = document.querySelector('.preview-image');
    previewImageDom.src = imgURL;
  }

  render() {
    const { input, className, mimeType, previewLogoUrl, placeholder, disabled, label, attrLabel } = this.props;
    const { error, invalid } = this.props.meta;

    return (
      <Fragment>
        {label && <FileLabel {...attrLabel}>{label}</FileLabel>}
        <ImgContainer>
          <Image thumbnail fluid src={previewLogoUrl} className='preview-image' alt='Visualização' />
        </ImgContainer>

        <Fragment>
          <Form.File
            custom
            name={input.name}
            type={input.type}
            label={input.value ? input.value.name : placeholder}
            accept={mimeType}
            disabled={disabled || false}
            className={className}
            onChange={event => this.__handleChange(event, input)}
            feedback={error}
            isInvalid={invalid && error && !disabled}
            isValid={invalid && !error && !disabled}
          />
          <Form.Control.Feedback type='valid' />
          <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        </Fragment>
      </Fragment>
    )
  }
}
