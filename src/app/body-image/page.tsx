import { HeartPulse, Medal, AlertTriangle, Users, Smile, Scale, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BodyImagePage() {
    return (
        <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Body Image & Self-Worth</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Our relationship with our bodies is a lifelong journey filled with ups and downs. Explore the history behind societal standards and learn how to reframe your self-worth.
                </p>
            </div>

            <div className="space-y-12">
                {/* Sports and Body Image */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Medal className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Sports & Body Image</h2>
                    </div>

                    <Card className="bg-card border-border/60 rounded-3xl">
                        <CardHeader className="py-4">
                            <CardTitle className="text-xl">Athletics vs. Aesthetics</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-4">
                            <p>
                                Physical activity is incredibly beneficial—it reduces health risks, relieves stress with sun and fresh air, and builds a sense of community.
                                However, while sports can be positive for our bodies, they can also introduce negative pressures.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The body that sustains athletic performance may not always match what society dictates we "should" look like.</li>
                                <li>Negative thoughts about your body can steal the enjoyment out of daily life and diminish your sense of confidence or accomplishment while playing a sport.</li>
                                <li>Having a positive outlook can bring mental clarity and calmness to your activities.</li>
                            </ul>
                            <p className="font-semibold text-primary pt-2">
                                At the end of the day, the primary goal of participating in sports is to have fun and feel good!
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* BMI section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Scale className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">The Truth About BMI</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-card border-border/60 rounded-3xl">
                            <CardHeader className="py-4">
                                <CardTitle className="text-lg">What is BMI?</CardTitle>
                                <CardDescription>Body Mass Index</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-3">
                                <p>
                                    BMI is a value derived from the mass and height of a person. It is often used by healthcare professionals to monitor body fat.
                                </p>
                                <p>
                                    However, a high BMI strictly correlating to high body fat is <strong>incorrect in many cases</strong>. A standard BMI chart should not be uniformly used for diagnosing children, teenagers, and athletes. Other tools are required to accurately calculate overall health.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/60 rounded-3xl">
                            <CardHeader className="py-4">
                                <CardTitle className="text-lg">A Flawed History</CardTitle>
                                <CardDescription>Why it is inaccurate for most demographics</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-3">
                                <p>
                                    Belgian astronomer Adolphe Quetelet created the BMI formula in the 1830s. He collected the height and weight of Belgian men to determine the "average man." The glaring problem? <strong>It lacked all diversity.</strong>
                                </p>
                                <p>
                                    Because this experiment only quantified white European men, other races, sexes, and genetics were entirely ignored. Depending on race, bodies present differently (e.g., varying bone densities and skin thickness). The human eye—and modern science—is far better at spotting health than an outdated formula.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* The Ideal Body */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <HeartPulse className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">The "Ideal Body" Trap</h2>
                    </div>

                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 text-muted-foreground space-y-5">
                        <div>
                            <h3 className="font-heading font-semibold text-foreground text-xl mb-2">Standards are Just Trends</h3>
                            <p className="text-sm leading-relaxed mb-4">
                                Body appearance has always been heavily influenced by fleeting social and cultural beliefs. Just like room decor or clothing goes viral for a year and then fades, the same applies to body standards. A body type worshipped ten years ago might be criticized today. 
                                <strong> Your body should not be treated like a fashion trend.</strong>
                            </p>
                            <p className="text-sm leading-relaxed">
                                Everyone has an idea of what their "Ideal Body" looks like, and yours will likely look completely different than someone else's. An ideal body should simply be a body you are content and healthy in, fueled by good food and healthy exercise.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Self-Worth */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Smile className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Diversify Your Self-Worth</h2>
                    </div>

                    <Card className="bg-card border-border/60 rounded-3xl">
                        <CardHeader className="py-4">
                            <CardTitle className="text-xl">You Are More Than Your Appearance</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-4">
                            <p>
                                Self-Worth is our internal perception of ourselves—how we show love to others, how we behave, and how we handle situations. It determines how valuable we feel.
                            </p>
                            <p>
                                Society has conditioned us to believe that our appearance is equal to our worth. <strong>This is false.</strong> In reality, true self-worth includes:
                            </p>
                            <ul className="list-disc pl-5 font-semibold text-primary space-y-1">
                                <li>Your personality</li>
                                <li>Your vast achievements</li>
                                <li>Your unique identity and perspective</li>
                                <li>Your strengths (and weaknesses too!)</li>
                            </ul>
                            <p className="pt-2 italic">
                                We are often our own harshest critics. We focus on parts of our bodies we don't like and shame ourselves, comparing ourselves to others ("They are so much prettier," or "I should workout to look like them"). Always remember to be gentle and encouraging to yourself. You have the power to uplift yourself.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Resources */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Users className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Where to Get Help</h2>
                    </div>

                    <Card className="border-4 border-black bg-card mt-12 retro-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" /> Asking for help is strength
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="leading-relaxed font-bold">
                                Body image is a lifelong journey. It is okay to not be totally in love with yourself every day. If negative thoughts about your body begin to worsen and heavily impact your daily life, please reach out.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 font-semibold">
                                <li>Your school's Wellness Center, School Therapists, or Peer Resource.</li>
                                <li>A trusted adult or close friend.</li>
                                <li>A specialized mental health therapist.</li>
                                <li>A certified medical professional.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
