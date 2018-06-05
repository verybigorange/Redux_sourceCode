import React, { Component } from 'react';
import { connect } from 'react-redux'
import Test from './Test'

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap  } from 'rxjs/operators';
// range(1, 200)
//   .pipe(filter(x => x % 2 === 1), map(x => x + x))
//   .subscribe(x => console.log(x));


class App extends Component {
  componentDidMount(){
    // const subject = new Subject();
    // subject.subscribe({
    //   next:v => console.log(v)
    // })
    // const o = Observable.create(function (observer) {
    //   observer.next(222)
    // })
    // o.subscribe(subject)

  }

  render() {
   
    return (
   
        <div className="App">
          <Test></Test>
        </div>
    
     
    );
  }
}



export default App
