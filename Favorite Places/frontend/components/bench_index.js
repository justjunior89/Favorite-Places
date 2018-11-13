
// ******************************************************************

  // render() {
  //   if (this.props.benches) {
  //     const benchIndexLis = this.props.benches.map((bench, index) => {
  //       return <BenchIndexItem bench={bench} key={bench.description + index}/>;
  //     });
  //     return (<ul>{benchIndexLis}</ul>);
  //   }
  // }
  //
  // }
  // export default BenchIndex;

// *****************************************************
// All working state
import React from 'react';
import { withRouter } from 'react-router-dom';
import {fetchBenches,fetchBench} from '../actions/bench_actions.js';
// import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {

  }

render() {

  var bench = this.props.benches[0] || '';
  var description = bench.description || '';

  return(


    <div className="description">
      { description || "No Description" }
    </div>
  );
}
}
export default BenchIndex;
// ********************************************************************
// import React from 'react';
// import BenchIndexItem from './bench_index_item';
//
// const BenchIndex = ({ benches }) => (
//   <div>
//     <h1>Benches: </h1>
//     {benches.map(bench => (
//       <BenchIndexItem
//         bench={bench}
//         key={bench.id}
//       />
//     ))}
//   </div>
// );
//
// export default BenchIndex;
