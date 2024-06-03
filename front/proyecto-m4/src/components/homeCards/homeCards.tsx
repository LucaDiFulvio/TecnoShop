"use client";
import { HomeCardData } from "./types";
import {  HomeCard, CardTitle, CardDescription, CardButton} from "./styles";
import Link from "next/link";


const HomeCards: React.FC<HomeCardData> = ({ title, text, buttonText, redirectTo }) => {
    return (
        <HomeCard>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{text}</CardDescription>
            <Link href={redirectTo}>
                <CardButton>{buttonText}</CardButton>
            </Link>
        </HomeCard>
    );
}

export default HomeCards;
