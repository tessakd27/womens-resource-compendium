import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookHeart, HeartHandshake, Scale, ShieldAlert, Sparkles, MapPin, Gamepad2, Globe2, BookOpen } from "lucide-react";
import { FloatingHearts } from "@/components/FloatingHearts";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12 relative min-h-screen">
      <FloatingHearts />
      {/* Marquee & Visitor Count */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-4 border-black bg-black p-2 mt-4 text-white font-heading text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <marquee className="flex-1 text-[#00FF00] tracking-widest uppercase">
          *** WELCOME TO THE WOMENS RESOURCE COMPENDIUM *** LATEST UPDATES: HEALTH CATALOG EXPANDED *** KNOW YOUR RIGHTS ***
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        </marquee>
        <div className="flex items-center gap-2 border-2 border-white px-3 py-1 bg-black">
          <span className="text-sm uppercase font-sans">Visitors:</span>
          <span className="text-[#FF00FF] tracking-widest">007421</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-6 pt-12 md:pt-16 pb-12 bg-card border-4 border-black px-4 overflow-hidden retro-shadow">
        <div className="inline-flex items-center border-2 border-black px-4 py-1.5 text-sm font-bold uppercase tracking-widest bg-primary text-black cursor-default relative z-10 retro-shadow-sm">
          <Sparkles className="h-4 w-4 mr-2" /> Hello World
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-black tracking-tight max-w-4xl relative z-10 leading-none uppercase drop-shadow-[2px_2px_0_#fff]">
          Empowering Knowledge for <br /> <span className="bg-primary px-2 border-2 border-black">Women's Health & Rights</span>
        </h1>
        <p className="text-lg md:text-xl text-black font-sans font-bold max-w-2xl leading-relaxed relative z-10 bg-white/80 p-4 border-2 border-black">
          A comprehensive compendium dedicated to women's health, bodily autonomy, mental well-being, and recovery. Find the resources you need, when you need them.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 relative z-10">
          <Button asChild size="lg" className="px-8 py-6 text-base font-bold uppercase tracking-wider">
            <Link href="/catalog">Explore the Catalog</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base font-bold uppercase tracking-wider bg-white">
            <Link href="/resources">Find Local Resources</Link>
          </Button>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="space-y-12 mt-8">
        <div className="flex flex-col items-center text-center space-y-4 border-4 border-black bg-secondary p-6 retro-shadow text-white mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold font-heading uppercase tracking-widest underline decoration-wavy decoration-4 underline-offset-8 decoration-primary">Explore Directory</h2>
          <p className="font-sans font-bold text-lg pt-4">Curated information and resources to support your journey and wellbeing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <BookHeart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl text-foreground/90">Health Catalog</CardTitle>
              <CardDescription className="text-base">
                Comprehensive overview of women&apos;s physical and general health.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/catalog">
                  Read more <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <Scale className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Rights & Abortion</CardTitle>
              <CardDescription>
                Current information on bodily autonomy, legal rights, and Planned Parenthood.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/rights-and-abortion">
                  Read more <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <ShieldAlert className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Assault & Recovery</CardTitle>
              <CardDescription>
                Information on sexual assault and essential, supportive recovery resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/assault-and-recovery">
                  Read more <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <HeartHandshake className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Mental & Sexual Health</CardTitle>
              <CardDescription>
                Exploring the deep connection between mental wellbeing and sexual health.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/sexual-health">
                  Read more <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <CardTitle>State Resources Map</CardTitle>
              <CardDescription>
                Search for local clinics, support centers, and resources by your area code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/resources">
                  Locate Resources <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <Globe2 className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Global Perspective</CardTitle>
              <CardDescription>
                How US reproductive rights and mortality correlate and compare globally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/global-perspective">
                  Read more <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-amber-500 flex items-center justify-center mb-4 group-hover:bg-amber-400 retro-shadow-sm">
                <BookOpen className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Verified Sources</CardTitle>
              <CardDescription>
                Explore the credible .gov, .edu, and .org sources that back our information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-amber-600 dark:text-amber-500 hover:text-amber-700 hover:bg-amber-500/10 rounded-xl">
                <Link href="/sources">
                  View Sources <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group z-10 hover:z-20">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 border-2 border-black bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 retro-shadow-sm">
                <Gamepad2 className="h-6 w-6 text-black" />
              </div>
              <CardTitle>Trivia Game</CardTitle>
              <CardDescription>
                Test your knowledge and learn fun facts about women's history and health!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-xl">
                <Link href="/trivia">
                  Play Trivia <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
