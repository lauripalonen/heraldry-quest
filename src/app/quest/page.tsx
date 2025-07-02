import React from 'react';
import { QuestionContent } from '@/components/QuestionContent';
import { getCoatOfArms } from '../actions';

export default async function Quest() {
    const coatOfArms = await getCoatOfArms()

    return (
        <div className="py-4">
            <QuestionContent coatOfArms={coatOfArms} />
        </div>
    )
}