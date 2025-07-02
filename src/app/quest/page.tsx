import React from 'react';
import { QuestionContent } from '@/components/QuestionContent';
import { getCoatOfArms } from '../actions';

export const dynamic = 'force-dynamic';

export default async function Quest() {
    const coatOfArms = await getCoatOfArms()

    return (
        <div className="mt-4">
            <QuestionContent coatOfArms={coatOfArms} />
        </div>
    )
}