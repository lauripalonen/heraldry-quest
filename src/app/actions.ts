"use server";
import { shuffle } from "@/lib/utils";
import data from "../../data/data.json";
import { CoatOfArms } from "@/lib/types";

export async function getCoatOfArms(): Promise<CoatOfArms[]> {
    const response = data;
    const shuffledCoatOfArms = shuffle({ array: response });

    return shuffledCoatOfArms;
}