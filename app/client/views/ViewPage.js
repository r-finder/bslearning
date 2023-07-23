// const tmpl = require('./dataPage.pug');
import tmpl from './dataPage.pug';


class ViewPage {
  static render = (data) => {
    const dtElement = document.querySelector('.dataTable');
    dtElement.innerHTML = tmpl({data: data});
  }
}

export default ViewPage;
