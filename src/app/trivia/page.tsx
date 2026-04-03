"use client";

import { useState, useEffect, useMemo } from "react";
import { Gamepad2, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { triviaData } from "@/data/trivia";

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]) => [...array].sort(() => Math.random() - 0.5);

export default function TriviaPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  
  // Shuffled options for the current question
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Pick 10 random questions out of our 39 for a game run
  const gameQuestions = useMemo(() => {
    return shuffleArray(triviaData).slice(0, 10);
  }, [hasStarted]); // reshuffle when game restarts

  const currentQuestion = gameQuestions[currentQuestionIndex];

  // Generate 4 randomized options when question changes
  useEffect(() => {
    if (!currentQuestion) return;
    
    // Get all false answers
    const allNames = triviaData.map(t => t.name).filter(name => name !== currentQuestion.name);
    // Shuffle and pick 3
    const falseAnswers = shuffleArray(allNames).slice(0, 3);
    
    setOptions(shuffleArray([currentQuestion.name, ...falseAnswers]));
    setSelectedAnswer(null); // Reset selection
  }, [currentQuestionIndex, currentQuestion]);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Prevent double-clicking
    setSelectedAnswer(answer);
    
    if (answer === currentQuestion.name) {
      setScore(s => s + 1);
    }

    // Auto-advance after 1.5 seconds
    setTimeout(() => {
      if (currentQuestionIndex + 1 < gameQuestions.length) {
        setCurrentQuestionIndex(i => i + 1);
      } else {
        setIsGameOver(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setHasStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsGameOver(false);
    setTimeout(() => setHasStarted(true), 100); // trigger reshuffle
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12 pt-8">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center space-y-4 border-4 border-black bg-secondary p-8 retro-shadow text-white relative z-20">
        <Gamepad2 className="h-16 w-16 mb-4 text-primary" />
        <h1 className="text-5xl font-bold font-heading uppercase tracking-widest decoration-wavy decoration-4 underline-offset-8 decoration-primary underline">
          Female Firsts Trivia
        </h1>
        <p className="font-sans font-bold text-lg pt-4 max-w-2xl">
          Test your knowledge about pioneering women who shattered glass ceilings across history!
        </p>
      </div>

      {!hasStarted && !isGameOver && (
        <Card className="retro-shadow border-4 border-black bg-card max-w-2xl mx-auto text-center p-8 relative z-20">
          <CardHeader>
            <CardTitle className="font-heading text-3xl">Are you ready?</CardTitle>
            <CardDescription className="text-base text-card-foreground">
              You will be given 10 achievements ("firsts") from history. Guess the glorious woman behind it!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="px-12 py-6 text-xl uppercase font-bold tracking-widest bg-primary text-black hover:bg-primary/80 border-2 border-black" onClick={() => setHasStarted(true)}>
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      )}

      {hasStarted && !isGameOver && (
        <div className="space-y-6 relative z-20">
          <div className="flex justify-between items-center bg-primary px-6 py-2 border-2 border-black retro-shadow-sm font-bold uppercase text-black font-sans">
            <span>Score: {score}</span>
            <span>Question {currentQuestionIndex + 1} of {gameQuestions.length}</span>
          </div>

          <Card className="retro-shadow border-4 border-black bg-card">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-primary-foreground font-bold uppercase text-sm tracking-widest">Achievement Clue</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-black border-2 bg-white/80 border-black p-6 tracking-wide">
                  "{currentQuestion?.clue}"
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option, idx) => {
                  let btnState = "bg-white hover:bg-neutral-100 text-black"; // Default
                  
                  if (selectedAnswer) {
                    if (option === currentQuestion.name) {
                      btnState = "bg-green-400 text-black border-4 border-green-800 pointer-events-none"; // Correct
                    } else if (option === selectedAnswer) {
                      btnState = "bg-red-400 text-black border-4 border-red-800 pointer-events-none"; // Wrong picked
                    } else {
                       btnState = "opacity-50 bg-white pointer-events-none"; // Others
                    }
                  }

                  return (
                    <Button 
                      key={idx}
                      variant="outline" 
                      className={`h-auto py-6 px-4 text-base md:text-lg border-2 border-black retro-shadow-sm font-bold justify-start whitespace-normal text-left transition-all ${btnState}`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {isGameOver && (
        <Card className="retro-shadow border-4 border-black bg-secondary text-white max-w-2xl mx-auto text-center p-8 relative z-20">
          <CardHeader>
            <Sparkles className="h-16 w-16 mx-auto mb-4 text-[#00FF00]" />
            <CardTitle className="font-heading text-4xl uppercase tracking-widest text-[#00FF00] drop-shadow-[2px_2px_0_#000]">
              Game Over!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-2xl font-bold bg-black p-4 border-2 border-white inline-block">
              Final Score: {score} / {gameQuestions.length}
            </div>
            
            <p className="text-lg font-sans">
              {score >= 8 ? "Astounding! You really know your female pioneers!" :
               score >= 5 ? "Great job! A solid grasp of history." : 
               "Every incorrect answer is just a new fun fact to learn today!"}
            </p>

            <div className="pt-8">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/80 border-2 border-black px-8 py-6 uppercase font-bold tracking-widest" onClick={restartGame}>
                Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info Section */}
      <Card className="border-4 border-black bg-card mt-12 retro-shadow relative z-20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
             <AlertCircle className="h-5 w-5" /> Why learning "Firsts" matters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed font-bold">
            Throughout history, women's monumental achievements have often been overshadowed or omitted from mainstream education. By testing your knowledge on these pioneers, you are actively participating in reclaiming and honoring their remarkable legacies. 
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
