const tmpl = require('./dataPage.pug');

class DataPage {
  static render = (data) => {
    const dtElement = document.querySelector('.dataTable');
    dtElement.innerHTML = tmpl({data: data});
  }
}

window.DataPage = DataPage;