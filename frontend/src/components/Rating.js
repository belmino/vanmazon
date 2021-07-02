
const getStar = (base, value) => {
  if( value >= base) {
    return 'fas fa-star';
  } else {
    if ( value >= base-0.5) {
      return 'fas fa-star-half-alt';
    } else {
      return 'far fa-star';
    }
  }
}

const Rating = {
  render: (props) => {
    if (!props.value) {
      return '<div></div>';
    }
    return `
      <div class="rating">
        <span>
          <i class="${getStar(1, props.value)}"></i>
        </span>
        <span>
          <i class="${getStar(2, props.value)}"></i>
        </span>
        <span>
          <i class="${getStar(3, props.value)}"></i>
        </span>
        <span>
          <i class="${getStar(4, props.value)}"></i>
        </span>
        <span>
          <i class="${getStar(5, props.value)}"></i>
        </span>
        <span>${props.text || ''}</span>
      </div>
    `;
  },
};

export default Rating;
