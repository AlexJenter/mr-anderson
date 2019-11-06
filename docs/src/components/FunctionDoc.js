import React from 'react';
import Params from './Params';
// import { MDXRenderer } from 'gatsby-mdx';

export default ({ name, params, description }) => (
  <div>
    —<h2>{name}</h2>
    <Params params={params} />
    {/* <MDXRenderer>{'# hello'}</MDXRenderer> */}
  </div>
);
