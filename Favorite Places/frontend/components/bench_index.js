
// ******************************************************************
// import React from 'react';
// import BenchIndexItem from './bench_index_item.js';

import React from 'react';
import { withRouter } from 'react-router-dom';
import {fetchBenches,fetchBench} from '../actions/bench_actions.js';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    fetchBenches();
  }

  render () {
    // const bench = this.props.benches.map(function(one,idx) {
    var bench = this.props.benches[0] || '';
    var description = bench.description || '';
      return(
          <div>
            { description || "No Description" }
          </div>
      );
    // });
    // return(
    //     <div>
    //       { bench.description }
    //     </div>
    // );
  }
}
export default BenchIndex;
// *****************************************************
// All working state
// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import {fetchBenches,fetchBench} from '../actions/bench_actions.js';
// import BenchIndexItem from './bench_index_item';
//
// class BenchIndex extends React.Component {
//   componentDidMount() {
//
//   }
//
// render() {
//
//   var bench = this.props.benches[0] || '';
//   var description = bench.description || '';
//
//   return(
//
//
//     <div className="description">
//       { description || "No Description" }
//     </div>
//   );
// }
// }
// export default BenchIndex;
// ********************************************************************
