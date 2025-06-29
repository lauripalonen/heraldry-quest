"use client";

import React from "react";
import Image from "next/image";
import { AnswerForm } from "./AnswerForm";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { toast } from "sonner";
import { CircleCheck, CircleX } from "lucide-react";
import { Button, LinkButton } from "./ui/button";
import { Card, CardContent } from "./ui/card";


export function QuestionContent({ coatOfArms }: { coatOfArms: { image_url: string, armiger: string }[] }) {
    const [index, setIndex] = React.useState(306);
    const [score, setScore] = React.useState({ correct: 0, incorrect: 0 });
    const currentCoatOfArms = coatOfArms[index];
    const n = coatOfArms.length;

    console.log("Current index:", index);

    const handleNext = () => {
        if (index < n) {
            setIndex((prevIndex) => (prevIndex + 1));
        }
    };

    const handleScore = (isCorrect: boolean) => {
        if (isCorrect) {
            toast("Correct!", {
                style: {
                    width: "fit-content",
                }, icon: <CircleCheck className="text-green-500" />
            });
            setScore((prevScore) => { return { ...prevScore, correct: prevScore.correct + 1 } });
        }
        else {
            toast.error("Incorrect. The correct answer is: " + currentCoatOfArms.armiger, {
                style: {
                    width: "fit-content",
                },
                icon: <CircleX className="text-red-500" />
            });
            setScore((prevScore) => { return { ...prevScore, incorrect: prevScore.incorrect + 1 } });
        }
    }

    const resetQuest = () => {
        setIndex(0);
        setScore({ correct: 0, incorrect: 0 });
    }

    React.useEffect(() => {
        resetQuest();
    }, [coatOfArms]);

    if (index === n) {
        return <div className="flex flex-col justify-center items-center">
            <h3>Final score:</h3>
            <ul>
                <li>
                    Questions: {n}
                </li>
                <li>
                    Correct: {score.correct}
                </li>
                <li>
                    Incorrect: {score.incorrect}
                </li>
            </ul>
            <div>
                <Button onClick={resetQuest} className="mt-4">
                    Again
                </Button>
                <LinkButton href="/" label="Home" />
            </div>
        </div>
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <Card className="py-3">
                <CardContent>
                    <Table className="m-auto">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Correct</TableHead>
                                <TableHead>Incorrect</TableHead>
                                <TableHead>Remaining</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">{score.correct}</TableCell>
                                <TableCell>{score.incorrect}</TableCell>
                                <TableCell>{n - index}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Image src={currentCoatOfArms.image_url} alt={`Coat of Arms ${index + 1}`} width={250} height={250} className="rounded-lg" />
            <Card><CardContent><AnswerForm armiger={currentCoatOfArms.armiger} handleNext={handleNext} handleScore={handleScore} /></CardContent></Card>
        </div>
    )
}   