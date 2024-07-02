import _ from 'lodash'
import '../src/scss/styles.scss' // Import scss
import axios from 'axios';
function component () {
  const element = document.createElement('div')
  element.classList.add('container')
  element.innerHTML = _.join(['Hello', 'OnePoint'], ' ')
  return element
}
document.body.appendChild(component())
