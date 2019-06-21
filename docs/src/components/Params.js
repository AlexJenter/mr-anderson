import React from 'react';

import * as R from 'ramda';
const pickName = R.pathOr('', ['name']);
const pickDesc = R.pathOr('', ['description', 'internal', 'content']);

export default ({ params }) => (
  <dl>
    {params.map(x => (
      <React.Fragment>
        <dt>{pickName(x)}</dt>
        <dd>{pickDesc(x)}</dd>
      </React.Fragment>
    ))}
  </dl>
);
