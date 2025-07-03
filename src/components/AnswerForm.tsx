"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import React from "react";

const formSchema = z.object({
    armiger: z.string()
})

export function AnswerForm({ armiger, handleNext, handleScore }: { armiger: string, handleNext: () => void, handleScore: (isCorrect: boolean) => void }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            armiger: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const userInput = values.armiger.trim().toLowerCase();
        const trueAnswer = armiger.trim().toLowerCase();

        if (userInput === trueAnswer) {
            handleScore(true);
            handleNext();
        } else {
            handleScore(false);
            handleNext();
        }

    }

    // Clear the form after submission
    React.useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            form.reset();
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row gap-2 items-end">
                <FormField
                    control={form.control}
                    name="armiger"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your answer:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

