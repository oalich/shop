import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash is required for this line to work
  element.innerHTML = _.join(['Hello', 'World'], ' ');

  return element;
}

document.body.appendChild(component());
