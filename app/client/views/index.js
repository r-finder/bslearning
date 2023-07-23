//require('./dataPage.js');

import ViewPage from './ViewPage.js';

//import Bullshit from './bullshit.js';

class App {
    static init() {

    }

    static run() {

    }

    // static getData = () => {
    //     const bs = new Bullshit();
    //
    //     let result = {
    //       headers: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10'],
    //       rows: []
    //     };
    //
    //     for (let i=0; i<100; i++) {
    //       let row = bs.generateDataRow([
    //         {type:'int', min:0, max:1000},
    //         {type:'date', daysBack: 1000},
    //         {type:'bool'},
    //         {type:'name', gender: 'male'},
    //         {type:'name', gender: 'female'},
    //         {type:'date', daysBack: 100},
    //         {type:'name'},
    //         {type:'xxx'},
    //         {type:'xxx'},
    //         {type:'xxx'} ])
    //       result.rows.push(row);
    //     }
    //
    //     return result;
    // }

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
