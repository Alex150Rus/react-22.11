import './TopBlogers.css';

import React, {PureComponent} from 'react';

export default function TopBlogers(props) {
  const {blogers, loading, onLoadMore} = props;
  return (
    <div className="TopBlogers">
      <h3>Top bloggers:</h3>
      {blogers.map((bloger, idx) => <ul><li key={idx}>№{idx+1}.{bloger.name}</li></ul>)}
      <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
    </div>
  )
}
