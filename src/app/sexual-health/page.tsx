import { HeartHandshake, ShieldCheck, HeartPulse, AlertTriangle, ArrowRight } from "lucide-react";
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

                {/* Barrier Methods Section */}
                <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Barrier Methods & Protection</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-card border-border/60 rounded-3xl">
                            <CardHeader className="py-4">
                                <CardTitle className="text-xl">How to Use a Condom</CardTitle>
                                <CardDescription>External Condoms (over the penis or toy)</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-4">
                                <p>Used correctly, condoms are the only method that protects against both unintended pregnancy and sexually transmitted infections (STIs).</p>
                                <ol className="list-decimal pl-5 space-y-2 font-medium">
                                    <li><strong>Check the package:</strong> Check the expiration date. Ensure there are no tears by pressing the wrapper to feel a slight cushion of air.</li>
                                    <li><strong>Open carefully:</strong> Tear the wrapper along the edge. Never use teeth or scissors.</li>
                                    <li><strong>Determine direction:</strong> The condom should roll down easily like a beanie (not a sombrero).</li>
                                    <li><strong>Pinch the tip:</strong> Pinch the reservoir tip at the top to squeeze the air out—this leaves room for ejaculate and prevents popping.</li>
                                    <li><strong>Roll it down:</strong> Place it on the head of the fully erect penis or toy and roll it all the way down to the base.</li>
                                    <li><strong>Remove safely:</strong> After ejaculation, hold the rim of the condom at the base before pulling out so it doesn't slip off.</li>
                                </ol>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/60 rounded-3xl">
                            <CardHeader className="py-4">
                                <CardTitle className="text-xl">How to Use a Dental Dam</CardTitle>
                                <CardDescription>For oral sex on a vulva or anus</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-4">
                                <p>A dental dam is a thin, rectangular piece of latex or polyurethane used to prevent the exchange of bodily fluids passing STIs during oral sex.</p>
                                <ol className="list-decimal pl-5 space-y-2 font-medium">
                                    <li><strong>Check the dam:</strong> Ensure it's not expired or torn. If you don't have one, you can snip the tip and base off a condom and cut it lengthwise to lay it flat.</li>
                                    <li><strong>Add lube (optional):</strong> Apply a small amount of water-based or silicone-based lube on the side touching the vulva/anus to increase sensation. Don't use oil-based lubes with latex.</li>
                                    <li><strong>Place it flat:</strong> Lay the dam completely flat over the vulva or anus. Do not stretch it tight, as this increases the likelihood of tearing.</li>
                                    <li><strong>Keep it one-sided:</strong> Never flip the dam over during use. One side touches you, one side touches them.</li>
                                    <li><strong>Dispose:</strong> Use a new dam if moving between different body parts. Throw it away after use.</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* STIs & Safe Sex Deep Dive Section */}
                <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Understanding STIs & Safe Sex</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Curable vs Treatable */}
                        <Card className="bg-card border-border/60 rounded-3xl col-span-1 md:col-span-2">
                            <CardHeader className="py-4">
                                <CardTitle className="text-xl">Curable vs. Treatable (Persistent)</CardTitle>
                                <CardDescription>Not all Sexually Transmitted Infections are the same</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-4">
                                <p>It's vital to understand the difference between curable conditions and those that are lifelong but medically manageable.</p>
                                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                    <div className="bg-white/50 p-4 rounded-xl border-l-4 border-green-500">
                                        <h4 className="font-bold text-black mb-1">Curable (Bacterial/Parasitic)</h4>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Chlamydia</li>
                                            <li>Syphilis</li>
                                            <li>Gonorrhea</li>
                                            <li>"Crabs" (Pubic Lice)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-primary/20 p-4 rounded-xl border-l-4 border-orange-500">
                                        <h4 className="font-bold text-black mb-1">Treatable & Persistent (Viral)</h4>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li><strong>HPV</strong> (Persistent strains)</li>
                                            <li><strong>Herpes</strong></li>
                                            <li><strong>HIV</strong></li>
                                            <li><strong>Hepatitis</strong> B & C</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* The Four H's */}
                        <Card className="bg-card border-border/60 rounded-3xl col-span-1 md:col-span-2">
                            <CardHeader className="py-4">
                                <CardTitle className="text-xl">The "Four H's" Deep Dive</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-5">
                                <div>
                                    <h4 className="font-bold text-black flex items-center gap-2"><ArrowRight className="h-4 w-4" /> HIV/AIDS</h4>
                                    <p className="mt-1">HIV attacks the body's immune system, specifically the T-cells. AIDS is the final, most severe stage of the untreated infection. It is found in and transmitted through semen, blood, vaginal secretions, and breast milk. Modern advanced medications exist, but are expensive and globally inaccessible.</p>
                                </div>
                                <div className="border-t border-black/10 pt-3">
                                    <h4 className="font-bold text-black flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Herpes</h4>
                                    <p className="mt-1">Incredibly common—roughly 60% of all Americans have a strain of the Herpes virus (Type 1 or 2). It causes blistering sores on the genitals or face. <strong>A cold sore on your mouth is Herpes.</strong> (Canker sores on the inside of the mouth are <em>not</em> Herpes).</p>
                                </div>
                                <div className="border-t border-black/10 pt-3">
                                    <h4 className="font-bold text-black flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Hepatitis B</h4>
                                    <p className="mt-1">A harsh liver infection transmitted when blood, semen, or other fluids from an infected person enters a non-infected person's body (via sexual contact or sharing needles). Symptoms include dark urine, jaundice, and severe fatigue. There is a vaccine available for Hepatitis A and B.</p>
                                </div>
                                <div className="border-t border-black/10 pt-3">
                                    <h4 className="font-bold text-black flex items-center gap-2"><ArrowRight className="h-4 w-4" /> HPV (Genital Warts)</h4>
                                    <p className="mt-1">Many people who contract Human Papillomavirus will never show symptoms. The viral strain that causes visible genital warts is largely physically harmless; however, a different persistent strain of HPV is the primary cause of cervical cancer in women.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Critical Safe Sex Rules */}
                        <Card className="bg-card border-border/60 rounded-3xl col-span-1 md:col-span-2">
                            <CardHeader className="py-4">
                                <CardTitle className="text-xl">Crucial Safe Sex Rules</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground space-y-4">
                                <ul className="list-disc pl-5 space-y-3 font-medium">
                                    <li><strong>Never use oil-based lube with latex:</strong> Common oil-based lubricants like Vaseline, lotion, or Vitamin E oil will rapidly break down the latex in condoms and dental dams, causing them to break. Always use water-based or silicone-based lube.</li>
                                    <li><strong>Never use two condoms:</strong> Wearing two condoms at once creates harsh friction between the latex layers, which will inevitably cause them both to tear or break during use.</li>
                                    <li><strong>The Wallet Rule:</strong> Condoms can melt, degrade, and tear easily if they are stored in a hot, pressured environment like a back-pocket wallet for long periods. Store them in a cool, safe place!</li>
                                    <li><strong>Transmission Awareness:</strong> STIs are not just transferred through penetrative intercourse. They can be transmitted via skin-to-skin contact, oral sex, fingering, discharge, blisters, blood, saliva, and the birth canal. Regular STI testing is essential for both partners!</li>
                                </ul>
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
