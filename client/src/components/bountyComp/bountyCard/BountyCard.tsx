import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { BountyProps } from '../../../types/bountyType';

import './bountyCard.css';

interface BountyCardProps {
  bounty: BountyProps;
}

function BountyCard({ bounty }: BountyCardProps) {
  const { level, price, ques } = bounty;
  return (
    <div className='bounty-card-container'>
      <div className='level'>{level}</div>
      <div className='question'>
        <p className='question-text'>{ques}</p>
        <h5>
          {price}
          <FaCoins />
        </h5>
      </div>
    </div>
  );
}

export default BountyCard;
