import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookHeart, Droplets, Activity, ListChecks, HeartHandshake, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HealthCatalog() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <BookHeart className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Women&apos;s Health Catalog</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Understanding your body is the first step to holistic wellbeing. Here is a brief overview of key health areas every woman should know about.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="menstruation" className="bg-card border-border/60 rounded-2xl px-4 pb-1 mb-2">
                    <AccordionTrigger className="hover:no-underline font-heading text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-destructive/10 rounded-lg">
                                <Droplets className="h-5 w-5 text-destructive" />
                            </div>
                            Menstruation & Hormones
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 pb-4">
                        <p className="mb-3">
                            The menstrual cycle is a natural process regulated by hormones, primarily estrogen and progesterone. A typical cycle lasts 21 to 35 days.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Tracking:</strong> Keeping track of your cycle can help identify irregularities, which might signal conditions like PCOS or endometriosis.</li>
                            <li><strong>PMS:</strong> Premenstrual Syndrome affects many women, causing mood changes, tender breasts, food cravings, fatigue, and irritability.</li>
                            <li><strong>When to see a doctor:</strong> If you experience severe pain, extremely heavy bleeding, or missed periods for more than 3 months.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="breast-health" className="bg-card border-border/60 rounded-2xl px-4 pb-1 mb-2">
                    <AccordionTrigger className="hover:no-underline font-heading text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Activity className="h-5 w-5 text-primary" />
                            </div>
                            Breast Health & Screenings
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 pb-4">
                        <p className="mb-3">
                            Being familiar with how your breasts normally look and feel can help you notice symptoms such as lumps, pain, or changes in size that are of concern.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Self-Exams:</strong> Check your breasts once a month, ideally a few days after your period ends.</li>
                            <li><strong>Mammograms:</strong> Women should typically begin getting yearly mammograms starting at age 40, or earlier if there is a family history of breast cancer.</li>
                            <li><strong>Changes:</strong> Look out for lumps, skin dimpling, changes in nipple appearance, or unusual discharge.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="preventative" className="bg-card border-border/60 rounded-2xl px-4 pb-1 mb-2">
                    <AccordionTrigger className="hover:no-underline font-heading text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <ListChecks className="h-5 w-5 text-green-600 dark:text-green-500" />
                            </div>
                            Preventative Screenings & Checkups
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 pb-4">
                        <p className="mb-3">
                            Preventative care is essential for maintaining good health and catching problems early.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Pap Smear & HPV Testing:</strong> Recommended starting at age 21 to screen for cervical cancer.</li>
                            <li><strong>Bone Density:</strong> Screening for osteoporosis generally begins at age 65, or for younger women with specific risk factors.</li>
                            <li><strong>General Wellness:</strong> Annual physicals to check blood pressure, cholesterol, thyroid function, and blood sugar levels.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="emotional-wellness" className="bg-card border-border/60 rounded-2xl px-4 pb-1 mb-2">
                    <AccordionTrigger className="hover:no-underline font-heading text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <HeartHandshake className="h-5 w-5 text-purple-600" />
                            </div>
                            Emotional Wellness & Healthy Relationships
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 pb-4">
                        <p className="mb-3">
                            A healthy relationship involves mutual respect, trust, and support. It allows both partners to experience emotional growth without fear of judgment.
                        </p>
                        <h4 className="font-bold text-black mt-4 mb-2">The Relationship Bill of Rights</h4>
                        <p className="text-sm mb-3">Before entering a relationship, it is vital to know the difference between your Needs and your Boundaries:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Your Needs:</strong> Things you absolutely require to feel loved, safe, and fulfilled (e.g., open communication, quality time).</li>
                            <li><strong>Your Boundaries:</strong> Emotional or physical limits that protect your well-being. Crossing these limits fundamentally damages the relationship.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="identifying-abuse" className="bg-card border-border/60 rounded-2xl px-4 pb-1 mb-2">
                    <AccordionTrigger className="hover:no-underline font-heading text-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500/10 rounded-lg">
                                <ShieldAlert className="h-5 w-5 text-orange-600" />
                            </div>
                            Identifying Unhealthy Dynamics
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 pb-4 space-y-4">
                        <div>
                            <p className="mb-2">Physical abuse is rarely the only form of danger. Highly unhealthy relationships often involve:</p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li><strong>Emotional Abuse:</strong> Put-downs, screaming, controlling your actions, and gaslighting.</li>
                                <li><strong>Psychological Abuse:</strong> Chipping away at mental well-being to the point you doubt your own judgment and isolate from friends.</li>
                                <li><strong>Technological & Economic Abuse:</strong> Demanding passwords, tracking locations, and seizing full control of your finances so you cannot leave.</li>
                                <li><strong>Spiritual/Cultural Abuse:</strong> Degrading your background or threatening to "out" an LGBTQ+ partner.</li>
                            </ul>
                        </div>
                        <div className="bg-primary/10 p-4 rounded-xl">
                            <h4 className="font-bold text-black mb-1">The Cycle of Abuse</h4>
                            <p className="text-sm">Abuse is rarely constant; it usually follows a manipulative cycle to trap the victim:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm">
                                <li><strong>The Honeymoon Phase:</strong> Things are happy, calm, and sweet.</li>
                                <li><strong>Tension Building:</strong> Walking on eggshells; anything might set the abuser off.</li>
                                <li><strong>The Incident:</strong> A verbal, physical, or emotional explosion.</li>
                                <li><strong>Reconciliation:</strong> Downplaying actions, blaming the victim, making excuses, or bringing apologies/gifts to reset the cycle.</li>
                            </ol>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="mt-8 pt-6 border-t">
                <Card className="bg-card border-primary/20 rounded-3xl">
                    <CardContent className="p-6">
                        <h3 className="font-heading font-semibold text-lg mb-2">Need a clinic near you?</h3>
                        <p className="text-muted-foreground mb-4">Check our State Resources map for local healthcare providers and specialized clinics.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
