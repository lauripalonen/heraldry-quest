"use client";

import React from "react";
import Image from "next/image";
import { AnswerForm } from "./AnswerForm";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { toast } from "sonner";
import { CircleCheck, CircleX } from "lucide-react";
import { Button, LinkButton } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";


export function QuestionContent({ coatOfArms }: { coatOfArms: { image_url: string, armiger: string }[] }) {
    const [index, setIndex] = React.useState(0);
    const [score, setScore] = React.useState({ correct: 0, incorrect: 0 });
    const n = coatOfArms.length;

    const handleNext = () => {
        if (index < n) {
            setIndex((prevIndex) => (prevIndex + 1));
        }
    };

    const currentCoatOfArms = coatOfArms[index];

    const handleScore = (isCorrect: boolean) => {
        if (isCorrect) {
            toast("Correct!", {
                classNames: {
                    toast: "!bg-emerald-100"
                },
                icon: <CircleCheck className="text-green-500" />
            });
            setScore((prevScore) => { return { ...prevScore, correct: prevScore.correct + 1 } });
        }
        else {
            toast.error("Correct answer: " + currentCoatOfArms.armiger, {
                classNames: {
                    toast: "!bg-rose-100"
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
            <Card className="py-2 gap-0">
                <CardHeader><h2>Final score</h2></CardHeader>
                <CardContent className="px-2">
                    <Table className="m-auto text-xs">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Correct</TableHead>
                                <TableHead>Incorrect</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">{score.correct}</TableCell>
                                <TableCell>{score.incorrect}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <div className="flex flex-row gap-4 items-baseline">
                <Button onClick={resetQuest} className="mt-4">
                    Again
                </Button>
                <LinkButton href="/" label="Home" />
            </div>
        </div>
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Card className="py-2">
                <CardContent className="px-2">
                    <Table className="m-auto text-xs">
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
            <Image src={currentCoatOfArms.image_url} alt={`Coat of Arms ${index + 1}`} width={180} height={180} className="rounded-lg" />
            <Card>
                <CardContent>
                    <AnswerForm armiger={currentCoatOfArms.armiger} handleNext={handleNext} handleScore={handleScore} />
                </CardContent>
            </Card>
        </div>
    )
}   