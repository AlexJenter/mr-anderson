import React from 'react';
import Params from './Params';

export default ({ name, params }) => (
  <div>
    —<h2>{name}</h2>
    <Params params={params} />
  </div>
);
