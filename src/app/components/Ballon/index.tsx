import React from 'react';

import tooltipError from 'app/assets/images/tooltipError.png';
import tooltipSearching from 'app/assets/images/searchingTooltip.png';
import tooltipSearch from 'app/assets/images/searchTooltip.png';

interface BallonComponentProps {
  tooltip: string;
}

const BallonComponent: React.FC<BallonComponentProps> = ({ tooltip }) => {
  return <img id="ballon" src={tooltip} alt="ballon" data-testid="ballon" />;
};

export const Ballon = {
  Search: () => <BallonComponent tooltip={tooltipSearch} />,
  Searching: () => <BallonComponent tooltip={tooltipSearching} />,
  Error: () => <BallonComponent tooltip={tooltipError} />,
};
