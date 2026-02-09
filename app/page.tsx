import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Rocket,
  Search,
  Shield,
  Wrench,
} from "lucide-react";

/**
 * TechMentorLab — Starter Static Site
 * ------------------------------------------------------------
 * This is a single-file React component you can drop into:
 * - Next.js App Router: app/page.tsx
 * - Or any React site
 *
 * Goal:
 * - Clean landing page
 * - PDF library
 * - Topics
 * - Future tools section
 */

const SITE = {
  name: "TechMentorLab",
  tagline: "Visual, practical tech notes — built for busy engineers.",
  description:
    "Learn Docker, Kubernetes, OpenShift, DevOps, and cloud concepts with diagrams, cheat sheets, and downloadable PDFs.",
};

// Replace these with your real hosted PDF URLs.
// For GitHub Pages, you will store them in /public/pdfs/... and use /pdfs/filename.pdf
const PDFS = [
  {
    id: "containers-101",
    title: "Head First Containers & Orchestration",
    subtitle: "Docker • Pods • Kubernetes • OpenShift",
    level: "Beginner",
    minutes: 25,
    tags: ["Docker", "Kubernetes", "OpenShift"],
    url: "/pdfs/HeadFirst_Containers_With_Diagrams.pdf",
    updated: "2026-02-09",
  },
];

const TOPICS = [
  {
    title: "Docker",
    desc: "Images, containers, Dockerfile, registry — explained like a human.",
    icon: FileText,
  },
  {
    title: "Kubernetes",
    desc: "Pods, Deployments, Services, Ingress, scaling, and cluster basics.",
    icon: Rocket,
  },
  {
    title: "OpenShift",
    desc: "Kubernetes + enterprise security + developer platform features.",
    icon: Shield,
  },
  {
    title: "Tools (Coming Soon)",
    desc: "Safe test-data generators, cheat sheets, and mini utilities.",
    icon: Wrench,
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-slate-700 bg-white/70">
      {children}
    </span>
  );
}

export default function TechMentorLabHome() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PDFS;
    return PDFS.filter((p) => {
      const hay = [p.title, p.subtitle, p.level, ...(p.tags || [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Top Nav */}
      <div className="sticky top-0 z-40 backdrop-blur border-b bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold leading-none">{SITE.name}</div>
              <div className="text-xs text-slate-500">{SITE.tagline}</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm">
            <a href="#pdfs" className="px-3 py-2 rounded-xl hover:bg-slate-100">
              PDFs
            </a>
            <a href="#topics" className="px-3 py-2 rounded-xl hover:bg-slate-100">
              Topics
            </a>
            <a href="#tools" className="px-3 py-2 rounded-xl hover:bg-slate-100">
              Tools
            </a>
            <a href="#about" className="px-3 py-2 rounded-xl hover:bg-slate-100">
              About
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-slate-700">
              <BookOpen className="h-4 w-4" />
              <span>Free learning notes + PDFs</span>
              <Badge variant="secondary" className="rounded-full">
                Early
              </Badge>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Learn Docker → Kubernetes → OpenShift
              <span className="text-slate-500"> without the pain.</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl">
              {SITE.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Diagrams</Pill>
              <Pill>Cheat Sheets</Pill>
              <Pill>Beginner-friendly</Pill>
              <Pill>Built for busy IT pros</Pill>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#pdfs">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse PDFs
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#topics">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore Topics
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: Start with the “Containers & Orchestration” PDF — it’s the foundation.
            </p>
          </div>

          <div className="md:pl-6">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">What you’ll get here</CardTitle>
                <CardDescription>
                  A calm, visual path through modern DevOps concepts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Downloadable PDFs</div>
                      <div className="text-sm text-slate-600">
                        Head First–style notes with diagrams and cheat sheets.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Real-world focus</div>
                      <div className="text-sm text-slate-600">
                        The stuff you actually need in projects and interviews.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Tools (coming soon)</div>
                      <div className="text-sm text-slate-600">
                        Safe test-data generators for developers (no misuse).
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Goal:</span> Start free, measure traffic, then move to a custom domain.
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* PDF Library */}
      <section id="pdfs" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">PDF Library</h2>
            <p className="text-slate-600 text-sm mt-1">
              Click “View” to open in browser. Click “Download” to save.
            </p>
          </div>

          <div className="w-full md:w-[360px] relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Docker, Kubernetes, OpenShift..."
              className="pl-9 rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start justify-between gap-3">
                    <span>{p.title}</span>
                    <Badge className="rounded-full" variant="secondary">
                      {p.level}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{p.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500">
                    ~{p.minutes} min • Updated {p.updated}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button asChild className="rounded-2xl">
                      <a href={p.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="rounded-2xl">
                      <a href={p.url} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <Card className="rounded-3xl">
              <CardContent className="py-10 text-center text-slate-600">
                No PDFs found. Try searching “Docker” or “Kubernetes”.
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Topics</h2>
        <p className="text-slate-600 text-sm mt-1">
          The learning path: containers → orchestration → platform.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {TOPICS.map((t) => {
            const Icon = t.icon;
            return (
              <Card key={t.title} className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center">
                      <Icon className="h-5 w-5" />
                    </span>
                    {t.title}
                  </CardTitle>
                  <CardDescription>{t.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mx-auto max-w-6xl px-4 py-10">
        <Card className="rounded-3xl shadow-sm">
          <CardHeader>
            <CardTitle>Tools (Coming Soon)</CardTitle>
            <CardDescription>
              You mentioned Singapore / Hong Kong ID generators. We’ll do it safely.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <div className="text-sm">
              <b>Planned:</b> “Dummy ID generator for testing” (non-valid checksums + watermark).
            </div>
            <div className="text-sm">
              <b>Why:</b> So developers can generate sample data for demos without creating real IDs.
            </div>
            <div className="text-sm">
              <b>Next:</b> Once TechMentorLab gets traffic, we’ll add the tools page.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 pt-2 pb-14">
        <Card className="rounded-3xl shadow-sm">
          <CardHeader>
            <CardTitle>About TechMentorLab</CardTitle>
            <CardDescription>
              A personal learning lab — turning complex tech into simple visuals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-700">
              TechMentorLab is built for IT professionals who want clear explanations, diagrams, and practical cheat sheets.
              No fluff. No 2-hour videos for a 5-minute concept.
            </p>

            <div className="rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium">Roadmap</div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>More Head First–style PDFs (DevOps + Cloud)</li>
                <li>Static topic pages for SEO</li>
                <li>Tools section (safe test-data generators)</li>
                <li>Custom domain when traffic is proven</li>
              </ul>
            </div>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} TechMentorLab — Built with curiosity.
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
