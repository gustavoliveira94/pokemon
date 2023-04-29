import React from 'react';

import tooltipError from 'app/assets/images/tooltipError.png';
import tooltipSearching from 'app/assets/images/searchingTooltip.png';
import tooltipSearch from 'app/assets/images/searchTooltip.png';

interface BallonComponentProps {
  type: string;
}

const BallonComponent: React.FC<BallonComponentProps> = ({ type }) => {
  return <img id="ballon" src={type} alt="ballon" />;
};

export const Ballon = {
  Search: () => <BallonComponent type={tooltipSearch} />,
  Searching: () => <BallonComponent type={tooltipSearching} />,
  Error: () => <BallonComponent type={tooltipError} />,
};
