import { Tv, Image as ImageIcon, MessageSquareWarning, Sparkles, Smartphone, UserX, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MediaRepresentation() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <Tv className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Media Misrepresentation & Stereotypes</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    The media we consume profoundly shapes our perception of ourselves and others. Unfortunately, women have historically been subject to narrow, harmful stereotypes in film, television, and advertising.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card shadow-sm border-border/60 rounded-3xl">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <ImageIcon className="h-5 w-5 text-primary" />
                            <CardTitle className="font-heading">Unrealistic Body Standards</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-base leading-relaxed space-y-3">
                        <p>
                            For decades, media has promoted an incredibly narrow, often digitally altered ideal of the &quot;perfect&quot; female body.
                        </p>
                        <p className="text-sm">
                            <strong>The Impact:</strong> This constant exposure leads to skyrocketing rates of body dysmorphia, eating disorders, and low self-esteem among women and young girls. Recognizing that these images are manufactured is the first step toward body neutrality and acceptance.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card shadow-sm border-border/60 rounded-3xl">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <MessageSquareWarning className="h-5 w-5 text-primary" />
                            <CardTitle className="font-heading">The &quot;Crazy or Emotional&quot; Trope</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-base leading-relaxed space-y-3">
                        <p>
                            Women expressing valid anger, frustration, or leadership are frequently framed as &quot;hysterical,&quot; &quot;bossy,&quot; or overly emotional.
                        </p>
                        <p className="text-sm">
                            <strong>The Impact:</strong> This stereotype undermines women&apos;s professional authority and routinely leads to their medical concerns being dismissed by healthcare providers—a well-documented phenomenon known as the &quot;pain gap.&quot;
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* The Dual Reality of Social Media (NYT Article Integration) */}
            <div className="mt-8 pt-6 border-t border-primary/20 space-y-6">
                <div className="flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold font-heading">The Dual Reality of Social Media</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Social media platforms like Instagram and TikTok have a profound effect on body image—but it isn't strictly negative. Depending on your feed, it can either be a toxic trap or a powerful motivational tool.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card className="bg-destructive/5 border-destructive/20 rounded-3xl">
                        <CardHeader>
                            <CardTitle className="font-heading text-destructive flex items-center gap-2">
                                <UserX className="h-5 w-5" /> The Pitfalls: Toxic Comparisons
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-3 leading-relaxed">
                            <p>
                                It gets easier and easier to make toxic comparisons because you are actively seeing <em>what people want you to see</em>. Influencers typically post heavily edited, carefully planned highlight reels of simply the best 15 seconds of their day.
                            </p>
                            <p>
                                Viewing lifestyles purely focused on exercise or extreme dieting without the balance of normal life (like taking rest days or eating dessert) creates completely unrealistic standards that can push young people toward eating disorders and isolation.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20 rounded-3xl">
                        <CardHeader>
                            <CardTitle className="font-heading text-primary flex items-center gap-2">
                                <Activity className="h-5 w-5" /> The Positives: Finding Motivation
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-3 leading-relaxed">
                            <p>
                                Conversely, social media is an incredible tool for finding role models. Seeing fitness achievements can serve as an inspiring reminder of what hard work looks like. 
                            </p>
                            <p>
                                Many content creators try to uplift their followers, providing routines, recipes, and necessary guidance for beginners. When balanced correctly, it is a fantastic tool that provides the "push" some people need to become healthier without tearing down their self-worth.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-card rounded-3xl p-6 md:p-8 mt-8 border-primary/20 shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Media Literacy as Self-Care</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                        Combating these stereotypes begins with <strong>media literacy</strong>—the ability to critically analyze the messages we are being sold.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>Curate your social media feeds. Unfollow accounts that make you feel inadequate.</li>
                        <li>Seek out media created by and starring diverse women.</li>
                        <li>Remember that advertising models exist to sell products by first creating insecurities.</li>
                    </ul>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-lg">
                    <Sparkles className="h-4 w-4" /> You are deeply valuable, exactly as you are.
                </div>
            </div>
        </div>
    );
}
