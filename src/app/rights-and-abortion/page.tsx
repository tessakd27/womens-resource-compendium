import { Scale, HeartPulse, Building2, Info, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function RightsAndAbortion() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <Scale className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Women&apos;s Rights & Abortion</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Bodily autonomy is a fundamental human right. Explore current information regarding your rights, abortion care, and the essential services provided by organizations like Planned Parenthood.
                </p>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 flex gap-4 md:items-start flex-col md:flex-row shadow-sm">
                <div className="p-2 bg-destructive/10 rounded-full shrink-0 self-start">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                    <h2 className="text-lg font-bold font-heading text-foreground mb-2">Notice on Legal Rights</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        The legal landscape surrounding abortion access in the United States and globally is constantly changing. Always consult trusted medical professionals and specialized legal advocacy groups for the most current information regarding healthcare access in your specific state or country.
                    </p>
                </div>
            </div>

            {/* Roe v. Wade Context */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 border-b pb-4">
                    <Scale className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold font-heading">The Overturning of Roe v. Wade</h2>
                </div>

                <div className="bg-card border shadow-sm rounded-2xl p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        In June 2022, the U.S. Supreme Court issued a landmark decision in <i>Dobbs v. Jackson Women&apos;s Health Organization</i>, officially overturning the 1973 <i>Roe v. Wade</i> ruling. For nearly 50 years, <i>Roe</i> had established a federal constitutional right to have an abortion. Its reversal meant that the power to regulate or outright ban abortion was returned to individual states.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        In the grand scheme of things, this has resulted in a heavily fractured medical landscape. In many states, near-total bans took effect immediately, forcing millions of women to travel hundreds of miles across state lines for essential healthcare, while other states have codified abortion rights into their state constitutions to become "sanctuary" states.
                    </p>
                    <div className="pt-4 border-t border-border/50">
                        <h4 className="font-semibold text-foreground mb-3">Recent News & Coverage:</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://apnews.com/hub/abortion" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4" /> AP News - Latest on US Abortion Laws
                                </a>
                            </li>
                            <li>
                                <a href="https://www.npr.org/sections/health-shots/2022/06/24/1107126432/roe-v-wade-overturned-supreme-court-abortion" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4" /> NPR - Supreme Court Overturns Roe v. Wade
                                </a>
                            </li>
                            <li>
                                <a href="https://www.reuters.com/world/us/abortion-rights/" target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4" /> Reuters - US Abortion Rights Tracker
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Abortion Care Details */}
            <div className="space-y-6 pt-8 border-t">
                <div className="flex items-center gap-3 pb-2">
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold font-heading">What The Abortion Process Entails</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card shadow-md border-border/60 rounded-3xl">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Medication Abortion</h3>
                            <div className="space-y-3 text-muted-foreground text-sm">
                                <p>Referred to as the "Abortion Pill," this is a safe and effective method for early pregnancy termination (usually up to 10-11 weeks).</p>
                                <ol className="list-decimal pl-4 space-y-2">
                                    <li><strong>Step 1 (Mifepristone):</strong> You take a pill at the clinic or at home. It blocks progesterone, a hormone necessary for a pregnancy to grow.</li>
                                    <li><strong>Step 2 (Misoprostol):</strong> Taken 24 to 48 hours later, you take 4 pills exactly as directed (usually dissolved under the tongue or in the cheeks).</li>
                                    <li><strong>The Process:</strong> Misoprostol causes severe cramping and heavy bleeding (often heavier than a period) to empty the uterus. The process usually takes a few hours, though spotting can last for weeks.</li>
                                </ol>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card shadow-md border-border/60 rounded-3xl">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">In-Clinic Procedure</h3>
                            <div className="space-y-3 text-muted-foreground text-sm">
                                <p>A medical procedure performed by trained healthcare providers in a clinic or hospital. These are typically fast routines that only take 5-10 minutes.</p>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li><strong>Vacuum Aspiration:</strong> Used in the first trimester. Your doctor will numb your cervix, dilate it slightly, and use a small, quiet, hand-held suction device to gently empty the uterus.</li>
                                    <li><strong>Dilation & Evacuation (D&E):</strong> Generally used in the second trimester. It involves dilating the cervix more widely and using medical instruments alongside suction to empty the uterus securely.</li>
                                    <li><strong>Recovery:</strong> Most patients rest for an hour in the clinic and then go home safely. Cramping usually subsides within a day or two.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* State Rights */}
            <div className="space-y-6 pt-8 border-t">
                <div className="bg-secondary/30 rounded-2xl p-6 border text-muted-foreground">
                    <h2 className="text-2xl font-bold font-heading text-foreground mb-4">Your Rights By State</h2>
                    <p className="mb-4">Because federal protections have been removed, abortion access entirely depends on the state you physically stand in. It is critical to know what laws apply to your zip code.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a href="https://www.guttmacher.org/state-policy" target="_blank" rel="noreferrer" className="block p-4 bg-background border rounded-xl hover:border-primary transition-colors text-foreground">
                            <span className="font-semibold block mb-1">Guttmacher Institute Map</span>
                            <span className="text-sm text-muted-foreground">Highly detailed interactive map tracking state policies in real-time.</span>
                        </a>
                        <a href="https://reproductiverights.org/maps/abortion-laws-by-state/" target="_blank" rel="noreferrer" className="block p-4 bg-background border rounded-xl hover:border-primary transition-colors text-foreground">
                            <span className="font-semibold block mb-1">Center for Reproductive Rights</span>
                            <span className="text-sm text-muted-foreground">Categorizes states by their legal standing (Hostile vs. Protected).</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t space-y-6">
                <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold font-heading">What is Planned Parenthood?</h2>
                </div>

                <Card className="bg-card shadow-sm border-border/60 rounded-3xl">
                    <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Planned Parenthood</strong> is a nonprofit organization that provides reproductive health care, sex education, and information to millions of people worldwide. Despite the heavy political focus on abortion services, they provide a vast array of preventative and general health services.
                        </p>

                        <div>
                            <h3 className="text-foreground font-heading font-semibold text-lg mb-3">Core Services Provided:</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="h-4 w-4 text-primary" />
                                    <span>STI & HIV Screening/Treatment</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="h-4 w-4 text-primary" />
                                    <span>Comprehensive Birth Control</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="h-4 w-4 text-primary" />
                                    <span>Pap Tests & Cancer Screenings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="h-4 w-4 text-primary" />
                                    <span>Menopause & Hormone Therapy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Info className="h-4 w-4 text-primary" />
                                    <span>Inclusive Sex Education</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Info className="h-4 w-4 text-primary" />
                                    <span>Abortion Information & Care</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border mt-6">
                            <h3 className="text-foreground font-heading font-semibold text-lg mb-3">Origins & History</h3>
                            <p className="mb-4">
                                Planned Parenthood traces its roots back to October 16, 1916, when <strong>Margaret Sanger</strong>, a pioneering birth control activist, opened the very first birth control clinic in the U.S. in Brooklyn, New York. At the time, discussing or distributing birth control was illegal under strict anti-obscenity laws (the Comstock Act).
                            </p>
                            <p>
                                The clinic was raided by police and shut down after only ten days. Sanger was arrested and served 30 days in jail. However, the immense public attention from her arrest sparked the nascent reproductive rights movement. Her efforts eventually grew into the American Birth Control League in 1921, which formally evolved into the Planned Parenthood Federation of America in 1942.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-border mt-6">
                            <h3 className="text-foreground font-heading font-semibold text-lg mb-3">Modern Political Opposition</h3>
                            <p className="mb-4">
                                Despite abortion making up a small percentage of their overall healthcare services, Planned Parenthood has become a massive target for political controversy and government defunding attempts, particularly concerning <strong>Title X</strong>.
                            </p>
                            <p className="mb-4">
                                Established in 1970, Title X is the only federal grant program dedicated solely to providing individuals with comprehensive family planning and related preventive health services. Historically, Planned Parenthood has been the largest recipient of this funding.
                            </p>
                            <p>
                                Because federal law already prohibits Title X funds from paying for abortions, recent opposition tactics involve implementing "gag rules"—regulations that strip funding from any clinic that even <i>refers</i> patients for abortion services. When these rules were implemented from 2019-2020, Planned Parenthood withdrew from Title X rather than unethically withhold medical information from patients, causing the number of low-income patients served by the federal program to plummet from 4 million to 1.5 million. Today, Planned Parenthood continues to face constant threats of having their remaining federal grants frozen or revoked entirely by opposing administrations.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
