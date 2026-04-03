import { Globe2, TrendingDown, Stethoscope, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GlobalPerspective() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <Globe2 className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">The Global Perspective</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    How does the United States compare to the rest of the world regarding reproductive rights and maternal healthcare? Understanding global trends provides crucial context for American policies.
                </p>
            </div>

            <div className="space-y-12">
                {/* Abortion Trends */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <TrendingDown className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Global Abortion Trends vs. The U.S.</h2>
                    </div>

                    <Card className="bg-card border-border/60 rounded-3xl">
                        <CardContent className="p-6 md:p-8 space-y-4 text-muted-foreground">
                            <p className="leading-relaxed">
                                Globally, the overwhelming trend over the last 30 years has been toward the <strong>liberalization</strong> of abortion laws. Since 1994, over 60 countries have expanded access to abortion by easing restrictions.
                            </p>
                            <p className="leading-relaxed">
                                The United States is a stark outlier. By overturning <i>Roe v. Wade</i> in 2022, the U.S. joined a very small group of countries—including El Salvador, Nicaragua, and Poland—that have dramatically restricted abortion access in recent years. Today, the U.S. stands in sharp contrast to allied nations in Western Europe, Canada, and Australia, where abortion is broadly legal and accessible as standard healthcare.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Maternal Health & Mortality */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                        <h2 className="text-2xl font-bold font-heading">The Maternal Mortality Crisis</h2>
                    </div>

                    <Card className="bg-destructive/5 border-destructive/20 shadow-sm">
                        <CardContent className="p-6 md:p-8 space-y-4 text-muted-foreground">
                            <p className="leading-relaxed">
                                The United States has the <strong>highest maternal mortality rate</strong> among developed, high-income nations. Women in the U.S. are more likely to die from complications related to pregnancy or childbirth than women in similar countries like the UK, France, or Canada.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                                <li><strong>The Gap:</strong> The US maternal mortality rate is heavily skewed by systemic racial disparities; Black women in America are between two to three times more likely to die from a pregnancy-related cause than White women.</li>
                                <li><strong>The Connection to Rights:</strong> Studies consistently show that states with the most restrictive abortion laws also have the highest maternal and infant mortality rates, as restricted access to reproductive care correlates with poorer overall maternal healthcare infrastructure.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Universal Healthcare Comparison */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Stethoscope className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold font-heading">Healthcare Access and Cost</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-card border-border/60 rounded-3xl">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="font-bold text-lg text-foreground">The Rest of the Developed World</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    In nearly all other high-income nations, healthcare (including maternity care, childbirth, and often contraception and abortion) is covered by universal healthcare systems. Residents do not face financial ruin for seeking basic reproductive or maternal care.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-primary/20 rounded-3xl">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="font-bold text-lg text-primary">The United States</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    The U.S. relies on a fragmented, heavily privatized insurance system. Giving birth in the U.S. can cost thousands of dollars out-of-pocket even <i>with</i> insurance. The lack of guaranteed paid maternity leave (a standard in almost every other country globally) further compounds the financial burden of motherhood in America.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
