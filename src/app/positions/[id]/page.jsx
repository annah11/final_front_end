'use client';
import getPositionById from '@/api/getPositionById';
import { useEffect, useState } from 'react';
import Position from './Position';

export default function Page(props) {
  return (
    <div>
      <Position id={props.params.id} />
    </div>
  );
}
