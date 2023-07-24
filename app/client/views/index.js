//require('./dataPage.js');

import ViewPage from './ViewPage.js';

//import Bullshit from './bullshit.js';

class App {
    static init() {

    }

    static run() {

    }

    static updatePage = () => {
      const url = 'http://localhost:3000/getdata';

      fetch(url, {
        method: 'GET',
        //mode: 'no-cors',
      }).then((response) => {
        return response.json();
      }).then(data => {
        console.log('\n#### RES: ', {data});

        ViewPage.render(data); //TODO

      }).catch(error => {
        console.error('Unable to fetch data:', error);
      });


    }
}

App.init();
App.run();

window.App = App;
