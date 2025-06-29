import React from 'react';
import data from '../../../data/data.json';
import { shuffle } from '@/lib/utils';
import { QuestionContent } from '@/components/QuestionContent';

export default function Quest() {
    const coatOfArms = shuffle({ array: data });
    const n = coatOfArms.length;

    return (
        <div className="py-8">
            <QuestionContent coatOfArms={coatOfArms} />
        </div>
    )
}