import { ExternalLink, BookOpen, Scale, Globe2, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sources() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <BookOpen className="h-8 w-8 text-primary dark:text-amber-500" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Verifiable Sources</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Combating misinformation is critical. The statistics, historical facts, and medical information presented throughout this compendium are rigorously backed by verifiable data from trusted, highly credible <code className="text-primary font-bold">.gov</code>, <code className="text-primary font-bold">.edu</code>, and reputable <code className="text-primary font-bold">.org</code> domains.
                </p>
            </div>

            <div className="space-y-8">
                {/* Medical & Scientific Sources */}
                <Card className="bg-card shadow-sm border-border/60 rounded-3xl">
                    <CardHeader className="border-b bg-primary/5 pb-4">
                        <div className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-primary" />
                            <CardTitle className="font-heading text-xl">Medical & Statistical Data</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-3">
                            <li className="flex flex-col gap-1">
                                <span className="font-semibold text-foreground">Centers for Disease Control and Prevention (CDC)</span>
                                <span className="text-sm text-muted-foreground">Source for maternal mortality rates, highlighting the stark racial disparities and high US averages.</span>
                                <a href="https://www.cdc.gov/maternal-infant-health/data-trends/maternal-mortality.html" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    cdc.gov/maternal-mortality <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">The Commonwealth Fund</span>
                                <span className="text-sm text-muted-foreground">Source comparing US maternal mortality and universal healthcare rankings against other developed and high-income nations.</span>
                                <a href="https://www.commonwealthfund.org/publications/issue-briefs/2024/jun/insights-us-maternal-mortality-crisis-international-comparison" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    commonwealthfund.org/maternal-mortality <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">National Institutes of Health (NIH)</span>
                                <span className="text-sm text-muted-foreground">Source for global contraceptive usage statistics, verifying the IUD as the most widely used reversible contraceptive worldwide.</span>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6443654/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    ncbi.nlm.nih.gov <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">Food and Drug Administration (FDA) & The Nelson Hearings</span>
                                <span className="text-sm text-muted-foreground">Historical records concerning the 1960 approval of Enovid and the subsequent 1970 Nelson Pill Hearings regarding massive warning labels.</span>
                                <a href="https://www.fda.gov/about-fda/fda-history-exhibits/fda-and-pill" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    fda.gov/history <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Legal & Historical Sources */}
                <Card className="bg-card shadow-sm border-border/60 rounded-3xl">
                    <CardHeader className="border-b bg-primary/5 pb-4">
                        <div className="flex items-center gap-3">
                            <Scale className="h-5 w-5 text-primary" />
                            <CardTitle className="font-heading text-xl">Legal, Rights & Global Trends</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-3">
                            <li className="flex flex-col gap-1">
                                <span className="font-semibold text-foreground">The Center for Reproductive Rights</span>
                                <span className="text-sm text-muted-foreground">Source verifying that over 60 countries have liberalized abortion laws since 1994, contrasting the US overturning of Roe v. Wade.</span>
                                <a href="https://reproductiverights.org/maps/worlds-abortion-laws/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    reproductiverights.org/maps <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">The Guttmacher Institute</span>
                                <span className="text-sm text-muted-foreground">A leading research and policy organization providing real-time data on state-by-state abortion laws and federal restrictions.</span>
                                <a href="https://www.guttmacher.org/state-policy" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    guttmacher.org <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">Association of American Medical Colleges (AAMC)</span>
                                <span className="text-sm text-muted-foreground">Source for historical trivia data verifying that in 1970, less than 8% of practicing physicians in the US were women, compared to over 37% today.</span>
                                <a href="https://www.aamc.org/data-reports/workforce/data/figure-12-percentage-physicians-sex-2021" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    aamc.org/data-reports <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                            <li className="flex flex-col gap-1 pt-3 border-t">
                                <span className="font-semibold text-foreground">Britannica & Historical Archives (EDU)</span>
                                <span className="text-sm text-muted-foreground">Used for verifying non-medical historical trivia (Equal Credit Opportunity Act of 1974, New Zealand 1893 voting laws, Ada Lovelace).</span>
                                <a href="https://www.britannica.com/" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center w-fit">
                                    britannica.com <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
