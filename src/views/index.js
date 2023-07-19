require('./dataPage.js');
require('./bullshit.js');

class App {
    static init() {

    }

    static run() {
        
    }

    static getData = () => {
        const bs = new Bullshit();

        let result = {
          headers: ['x1', 'x1', 'x1', 'x1', 'x1', 'x1', 'x1', 'x1', 'x1'],
          rows: []
        };

        for (let i=0; i<10; i++) {
          let row = [];
          for (let j=0; j<10; j++) {
            row.push(bs.generateName());
          }
          result.rows.push(row);
        }

        return result;
    }

    static updatePage = () => {
      const data = App.getData();
      window.DataPage.render(data);
    }
}

App.init();
App.run();
window.App = App;