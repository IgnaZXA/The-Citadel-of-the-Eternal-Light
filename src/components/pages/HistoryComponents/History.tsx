import React from 'react';
import { HistoryProps } from '../../../helpers/interfaces/screensInterfaces/HistoryInterfaces';

export default function History({founded, majorEvents}: HistoryProps) {
  return (
    <div>
      History
      <p>Year: {founded.year}</p>
      <p>Founder: {founded.by} </p>
    </div>
  );
}
