import { HeartHandshake, ShieldCheck, HeartPulse } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SexualHealth() {
    return (
        <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Sexual Health & Birth Control</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Taking control of your sexual health means staying informed. Here we explore birth control options, healthy relationships, and the powerful connection to mental wellbeing.
                </p>
            </div>

            <div className="space-y-12">
                {/* Birth Control Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Birth Control Options</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Card className="bg-card border-border/60 rounded-3xl col-span-1">
                            <CardHeader className="py-4">
                                <div className="space-y-1 mb-2">
                                    <CardTitle className="text-lg">Intrauterine Device (IUD)</CardTitle>
                                    <Badge variant="secondary">Highly Effective (&gt;99%)</Badge>
                                </div>
                                <CardDescription>Lasts 3 to 12 years</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-2">
                                <p>A small, T-shaped device placed in the uterus by a doctor. It is the most common reversible method globally.</p>
                                <ul className="list-disc pl-4 space-y-1 mt-2">
                                    <li><strong>Hormonal (Mirena, Kyleena):</strong> Releases progestin. Often makes periods much lighter or stops them entirely.</li>
                                    <li><strong>Non-Hormonal (Paragard):</strong> Uses copper to repel sperm. Lasts up to 12 years, but can cause heavier, crampier periods.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/60 rounded-3xl col-span-1">
                            <CardHeader className="py-4">
                                <div className="space-y-1 mb-2">
                                    <CardTitle className="text-lg">The Pill (Oral Contraceptive)</CardTitle>
                                    <Badge variant="outline">Effective (93% typical use)</Badge>
                                </div>
                                <CardDescription>Taken daily at the same time</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Pills containing estrogen and progestin (combination) or just progestin (mini-pill) that prevent the ovaries from releasing eggs. Requires strict daily consistency.
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/60 rounded-3xl col-span-1">
                            <CardHeader className="py-4">
                                <div className="space-y-1 mb-2">
                                    <CardTitle className="text-lg">The Implant (Nexplanon)</CardTitle>
                                    <Badge variant="secondary">Highly Effective (&gt;99%)</Badge>
                                </div>
                                <CardDescription>Lasts up to 3 years</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                A tiny, invisible rod inserted under the skin of the upper arm that steadily releases progestin. It is currently one of the most effective reversible methods available, though it can cause unpredictable spotting.
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* History & Side Effects Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b pb-4">
                            <HeartPulse className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-bold font-heading">How It Works, History & Side Effects</h2>
                        </div>

                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 text-muted-foreground space-y-5">
                            <div>
                                <h3 className="font-heading font-semibold text-foreground text-xl mb-2">How Does It Affect The Body?</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    Hormonal birth control (like the pill, patch, ring, or implant) introduces synthetic versions of the female hormones estrogen and progestin. These synthetic hormones essentially "trick" the pituitary gland into thinking the body is already pregnant.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-sm mb-2">
                                    <li><strong>It stops ovulation:</strong> The body halts the monthly release of an egg from the ovaries.</li>
                                    <li><strong>It alters cervical mucus:</strong> The mucus becomes thick and sticky, creating a physical barrier that prevents sperm from entering the uterus.</li>
                                    <li><strong>It thins the uterine lining:</strong> Even if an egg were released and fertilized, it would struggle to attach to the much thinner wall of the uterus.</li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <h3 className="font-heading font-semibold text-foreground text-xl mb-2">The History & The Panic</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    In 1960, the FDA approved "Enovid" as the first oral contraceptive. Its rapid adoption radically changed women&apos;s sociological trajectories. However, the early pills contained massive, dangerous doses of hormones compared to modern pills, leading to severe side effects and blood clots.
                                </p>
                                <p className="text-sm leading-relaxed mb-2">
                                    In the late 1960s and 70s, fierce public panic arose linking the pill to birth defects, strokes, and depression. Feminist author Barbara Seaman published highly critical investigations that brought these hidden risks to light, famously forcing Congressional hearings (the 1970 Nelson Pill Hearings).
                                </p>
                                <p className="text-sm leading-relaxed font-semibold italic text-primary">
                                    This historical panic is why birth control pills were the very first prescription drug in US history to require a formal "patient package insert" warning label.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">Today&apos;s Massive Warning Labels</h3>
                                <p className="text-sm mb-3">Modern pills contain a fraction of the hormones they used to, making them drastically safer. Yet, warning labels remain startlingly long due to a mix of legal liability protections and FDA regulations born from that 1970s history. The primary real risks to be aware of today include:</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                    <li><strong>Physical changes:</strong> Nausea, breast tenderness, and irregular bleeding or spotting are common in the first few months as the body adjusts.</li>
                                    <li><strong>Mood changes:</strong> Hormonal influx can cause fluctuations in emotional baselines, and in a subset of women, can trigger or exacerbate depression and anxiety.</li>
                                    <li><strong>Cardiovascular risks:</strong> Methods containing estrogen slightly increase the risk of blood clots, strokes, and heart attacks—especially in women over 35, heavy smokers, or those with severe hypertension.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mental Health Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b pb-4">
                            <HeartHandshake className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-bold font-heading">Mental & Sexual Health</h2>
                        </div>

                        <div className="bg-card rounded-2xl p-6 border text-muted-foreground space-y-4">
                            <h3 className="font-heading font-semibold text-foreground text-xl">The Deep Connection</h3>
                            <p className="text-sm leading-relaxed">
                                Sexual health and mental health are intrinsically linked. Stress, anxiety, and depression can lower libido and complicate intimate relationships, while sexual dysfunction can, in turn, cause emotional distress.
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-sm">
                                <li><strong>Hormones:</strong> As mentioned, hormonal birth control can sometimes shift your emotional baseline. It is important to monitor how you feel and talk to a doctor if you experience persistent sadness.</li>
                                <li><strong>Body image:</strong> Societal pressures directly affect sexual confidence and satisfaction. Embracing your body is a key part of sexual health.</li>
                                <li><strong>Trauma:</strong> Recovery from past trauma requires compassionate, professional care, as it deeply affects a person&apos;s relationship with physical intimacy.</li>
                            </ul>
                            <div className="pt-4">
                                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    Remember: It is completely normal for your sexual desires to fluctuate in response to life&apos;s stressors. Be kind to yourself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
