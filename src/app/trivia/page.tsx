"use client";

import { useState } from "react";
import { Gamepad2, Award, RefreshCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
    {
        q: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Addams"],
        a: 0,
        fact: "Marie Curie not only was the first woman to win a Nobel Prize in 1903, she remains the only person to win a Nobel Prize in two different scientific fields (Physics and Chemistry)."
    },
    {
        q: "What percentage of doctors were women in the US in 1970 compared to roughly today?",
        options: ["2% then vs 20% today", "7% then vs 37% today", "15% then vs 50% today", "5% then vs 25% today"],
        a: 1,
        fact: "In 1970, only about 7% of doctors were women in the US. Today, that number has grown to over 37%, and currently, the majority of newly enrolled medical students are women!"
    },
    {
        q: "When did women in the United States gain the legal right to have a credit card in their own name without a male cosigner?",
        options: ["1920", "1955", "1974", "1988"],
        a: 2,
        fact: "The Equal Credit Opportunity Act of 1974 made it illegal for any creditor to discriminate against any applicant on the basis of sex or marital status."
    },
    {
        q: "Which pioneer in computer science is often considered the first computer programmer?",
        options: ["Grace Hopper", "Katherine Johnson", "Margaret Hamilton", "Ada Lovelace"],
        a: 3,
        fact: "Ada Lovelace, an English mathematician from the 1800s, recognized that computing machines had applications beyond pure calculation and published the first algorithm intended to be carried out by such a machine."
    },
    {
        q: "In what year did the FDA approve the first oral contraceptive ('The Pill') for use in the United States?",
        options: ["1950", "1960", "1970", "1980"],
        a: 1,
        fact: "The FDA approved Enovid as the first oral contraceptive in 1960. It revolutionized women's health by giving women unprecedented control over their fertility, leading to massive societal shifts."
    },
    {
        q: "Which country was the first in the world to grant women the right to vote in parliamentary elections?",
        options: ["United States", "United Kingdom", "New Zealand", "Finland"],
        a: 2,
        fact: "New Zealand became the first self-governing country in the world to grant all women the right to vote in 1893, long before the US passed the 19th Amendment in 1920."
    },
    {
        q: "Statistically, what is the most commonly used, highly effective reversible method of birth control worldwide?",
        options: ["The Pill", "Condoms", "The IUD", "Hormonal Implants"],
        a: 2,
        fact: "The Intrauterine Device (IUD) is the most widely used reversible contraceptive globally. It is highly praised for its 'set it and forget it' long-term effectiveness, sometimes lasting over a decade."
    },
    {
        q: "What year did the US Supreme Court initially establish a constitutional right to abortion in Roe v. Wade?",
        options: ["1965", "1973", "1981", "1992"],
        a: 1,
        fact: "The landmark Roe v. Wade decision was issued in 1973, legalizing abortion nationally. It was overturned by the Supreme Court nearly 50 years later in 2022 (Dobbs v. Jackson)."
    }
];

export default function TriviaGame() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);

    const currentQ = questions[currentIndex];

    const handleSelect = (index: number) => {
        if (showFact) return; // Prevent changing answer after submitted
        setSelectedAnswer(index);
        setShowFact(true);

        if (index === currentQ.a) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setShowFact(false);
        } else {
            setGameFinished(true);
        }
    };

    const restart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowFact(false);
        setScore(0);
        setGameFinished(false);
    };

    if (gameFinished) {
        return (
            <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-in zoom-in duration-500">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-6 relative">
                    <Award className="h-10 w-10 text-primary" />
                    <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-1 -right-1" />
                </div>
                <h1 className="text-4xl font-bold font-heading mb-4 text-center">Trivia Complete!</h1>
                <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
                    You scored <span className="font-bold text-primary">{score}</span> out of {questions.length}. Thank you for playing and learning with us!
                </p>
                <Button onClick={restart} size="lg" className="rounded-full px-8 h-14 text-lg">
                    <RefreshCcw className="mr-2 h-5 w-5" /> Play Again
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
            <div className="text-center space-y-4 mb-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <Gamepad2 className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading">Fun Fact Trivia</h1>
                <p className="text-lg text-muted-foreground">
                    Test your knowledge about women&apos;s history, health records, and trailblazing achievements.
                </p>
            </div>

            <Card className="border-border/60 bg-card rounded-3xl overflow-hidden">
                <div className="h-2 w-full bg-secondary/30 relative">
                    <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
                        style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                    />
                </div>
                <CardHeader className="text-center pb-2 pt-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Question {currentIndex + 1} of {questions.length}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-heading leading-tight px-4">
                        {currentQ.q}
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {currentQ.options.map((option, idx) => {
                            const isSelected = selectedAnswer === idx;
                            const isCorrect = idx === currentQ.a;
                            let btnClass = "h-auto py-4 px-6 text-left justify-start items-center text-base rounded-2xl whitespace-normal break-words";

                            if (showFact) {
                                if (isCorrect) {
                                    btnClass += " bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-400 border-2";
                                } else if (isSelected) {
                                    btnClass += " bg-destructive/20 border-destructive text-destructive border-2";
                                } else {
                                    btnClass += " opacity-50";
                                }
                            }

                            return (
                                <Button
                                    key={idx}
                                    variant={showFact ? "outline" : "secondary"}
                                    className={btnClass}
                                    onClick={() => handleSelect(idx)}
                                    disabled={showFact}
                                >
                                    <span className="mr-3 font-bold opacity-60">{String.fromCharCode(65 + idx)}.</span> {option}
                                </Button>
                            );
                        })}
                    </div>

                    {showFact && (
                        <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-2xl animate-in slide-in-from-bottom-2 duration-300">
                            <h4 className="font-heading font-bold text-primary text-xl flex items-center gap-2 mb-2">
                                <Sparkles className="h-5 w-5" /> Did you know?
                            </h4>
                            <p className="text-foreground leading-relaxed">
                                {currentQ.fact}
                            </p>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="bg-secondary/10 border-t p-6 flex justify-between items-center">
                    <div className="font-medium text-muted-foreground">
                        Score: <span className="text-foreground">{score}</span>
                    </div>
                    <Button
                        onClick={nextQuestion}
                        disabled={!showFact}
                        size="lg"
                        className="rounded-full px-8"
                    >
                        {currentIndex === questions.length - 1 ? "Finish" : "Next Question"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
