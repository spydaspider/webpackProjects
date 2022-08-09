import _ from 'lodash';
import './styles.css';
import Icon from './dickson.JPG';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Dickson'], ' ');
  element.classList.add('hello');
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
