import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="260" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="408" rx="5" ry="5" width="40" height="27" />
    <rect x="130" y="402" rx="30" ry="30" width="150" height="43" />
    <rect x="0" y="347" rx="10" ry="10" width="280" height="35" />
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="307" rx="10" ry="10" width="280" height="35" />
  </ContentLoader>
);
