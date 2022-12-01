import React from 'react';
import { Loading } from '@nextui-org/react';

const Loader = () => (
  <div className="loader-container">
    <Loading color="primary" size="lg">Loading...</Loading>
  </div>
);

export default Loader;