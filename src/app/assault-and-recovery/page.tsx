import { ShieldAlert, PhoneCall, BookHeart, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AssaultRecovery() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
            <div className="space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 mb-4 transition-colors duration-300">
                    <ShieldAlert className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold font-heading">Sexual Assault & Recovery</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    It is never your fault. We are here to provide clear information on immediate steps to take, long-term recovery, and essential resources to help you or someone you love find healing and justice.
                </p>
            </div>

            {/* Immediate Emergency Section */}
            <Card className="border-border/60 bg-card shadow-sm rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <PhoneCall className="h-5 w-5" />
                        <CardTitle className="font-heading">Immediate Help & Hotlines</CardTitle>
                    </div>
                    <CardDescription className="text-base text-foreground/80">
                        If you or someone you know is in immediate danger, call 911. For confidential, 24/7 support:
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-card rounded-2xl p-4 border shadow-sm">
                        <h3 className="font-bold text-lg text-foreground mb-1">National Sexual Assault Hotline (RAINN)</h3>
                        <div className="flex flex-col sm:flex-row gap-2 mt-2">
                            <a href="tel:8006564673" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full sm:w-auto">
                                Call 800-656-HOPE
                            </a>
                            <a href="https://www.rainn.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full sm:w-auto">
                                Chat Online at RAINN.org
                            </a>
                        </div>
                        <p className="text-sm mt-3 text-muted-foreground">Free, confidential, and available 24/7.</p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-heading flex items-center gap-3 border-b pb-4">
                        <Info className="h-5 w-5 text-primary" /> What to Know First
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Your safety and health are the immediate priorities.</strong> If an assault has just occurred, try to find a safe location away from the perpetrator.
                        </p>
                        <p>
                            <strong>Medical Care:</strong> Seeking immediate medical care is critical to treat injuries, test for STIs, and prevent pregnancy.
                        </p>
                        <p>
                            <strong>Forensic Exams (Rape Kit):</strong> If you choose to have evidence collected, try to avoid showering, washing your hands, eating, drinking, or changing clothes before going to a hospital equipped with a SANE (Sexual Assault Nurse Examiner).
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-heading flex items-center gap-3 border-b pb-4">
                        <BookHeart className="h-5 w-5 text-primary" /> The Path to Recovery
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
                        <p>
                            Recovery is not linear. Healing from trauma takes time, patience, and professional support.
                        </p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Therapy & Counseling:</strong> Look for trauma-informed therapists who specialize in EMDR, CBT, or DBT.</li>
                            <li><strong>Support Groups:</strong> Connecting with survivors can drastically reduce feelings of isolation and shame.</li>
                            <li><strong>Self-Care & Boundaries:</strong> Giving yourself permission to set strict boundaries, rest, and engage in radically gentle self-care routines.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-secondary/30 rounded-2xl p-6 border text-center mt-12 shadow-sm italic text-muted-foreground text-lg">
                &quot;Healing doesn&apos;t mean the damage never existed. Healing means the damage no longer controls your life.&quot;
            </div>
        </div>
    );
}
