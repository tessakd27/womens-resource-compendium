import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookHeart, Droplets, Activity, ListChecks } from "lucide-react";
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
