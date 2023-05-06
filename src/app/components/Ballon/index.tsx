import React from 'react';

import tooltipError from 'app/assets/images/tooltipError.png';
import tooltipSearching from 'app/assets/images/searchingTooltip.png';
import tooltipSearch from 'app/assets/images/searchTooltip.png';

interface BallonComponentProps {
  tooltip: string;
  type: string;
}

export const BallonComponent: React.FC<BallonComponentProps> = ({
  tooltip,
  type,
}) => {
  return (
    <img
      id="ballon"
      src={tooltip}
      alt="ballon"
      data-testid={`ballon-${type}`}
    />
  );
};

export const Ballon = {
  Search: () => <BallonComponent tooltip={tooltipSearch} type="search" />,
  Searching: () => (
    <BallonComponent tooltip={tooltipSearching} type="searching" />
  ),
  Error: () => <BallonComponent tooltip={tooltipError} type="error" />,
};
