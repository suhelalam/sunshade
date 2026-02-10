"use client"

import Image from "next/image";
// hello how are you

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      {/* Ambient gradient + subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-300/35 via-orange-200/20 to-transparent blur-3xl dark:from-amber-400/15 dark:via-orange-300/10" />
        <div className="absolute bottom-[-160px] right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-b from-zinc-300/40 via-zinc-200/10 to-transparent blur-3xl dark:from-zinc-700/25 dark:via-zinc-800/10" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:64px_64px] dark:opacity-[0.35] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      </div>

      {/* Top nav */}
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
            {/* simple "pin" mark */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90"
              aria-hidden="true"
            >
              <path
                d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">Sunshade</span>
          <span className="hidden rounded-full bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 sm:inline">
            campus events, mapped
          </span>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="#features"
            className="hidden rounded-full px-3 py-2 text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white sm:inline"
          >
            Features
          </a>
          <a
            href="#how"
            className="hidden rounded-full px-3 py-2 text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white sm:inline"
          >
            How it works
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Join waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-8 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-zinc-700 dark:text-zinc-300">
                Discover what&apos;s happening near you — right now.
              </span>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Your campus,
              <span className="block">
                alive on a{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400">
                  live map
                </span>
                .
              </span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Sunshade helps students find legit events, pop-ups, and
              “something’s happening” moments — posted by verified orgs and
              trusted students, with safety and approvals built in.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Get early access
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:text-white dark:ring-white/10 dark:hover:bg-zinc-900"
              >
                See how it works
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3 pt-2 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
                <div className="font-semibold text-zinc-950 dark:text-white">
                  Verified orgs
                </div>
                <div className="mt-1">Approval & trust</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
                <div className="font-semibold text-zinc-950 dark:text-white">
                  Live filters
                </div>
                <div className="mt-1">Now • Today • Week</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
                <div className="font-semibold text-zinc-950 dark:text-white">
                  Safer by design
                </div>
                <div className="mt-1">Reports + moderation</div>
              </div>
            </div>
          </div>

          {/* right - faux map card */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
              <div className="flex items-center justify-between px-2 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-zinc-500">sunshade.app</div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                {/* “Map” background */}
                <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.10)_1px,transparent_0)] [background-size:18px_18px] dark:opacity-60 dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)]" />
                <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

                {/* “Paths” */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-55"
                  viewBox="0 0 600 380"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 300 C160 260, 160 120, 300 130 C420 140, 420 240, 560 220"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-400 dark:text-zinc-600"
                  />
                  <path
                    d="M70 90 C140 140, 220 60, 320 90 C430 125, 470 70, 560 110"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                  <path
                    d="M120 360 C200 330, 230 260, 280 240 C380 200, 420 320, 520 300"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                </svg>

                {/* Event markers */}
                <div className="relative h-[380px]">
                  <Marker
                    x="18%"
                    y="28%"
                    title="Free coffee"
                    meta="Now • Student"
                    tone="amber"
                  />
                  <Marker
                    x="62%"
                    y="24%"
                    title="Club fair"
                    meta="Today • Verified org"
                    tone="zinc"
                  />
                  <Marker
                    x="48%"
                    y="58%"
                    title="Open mic"
                    meta="7:00 PM • Arts"
                    tone="orange"
                  />
                  <Marker
                    x="76%"
                    y="66%"
                    title="Study group"
                    meta="In 30m • Library"
                    tone="amber"
                  />

                  {/* Bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-zinc-950/70 dark:ring-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">
                            Trending near you
                          </div>
                          <div className="text-xs text-zinc-600 dark:text-zinc-300">
                            Filter by time • category • distance
                          </div>
                        </div>
                        <div className="rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black">
                          Live
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tiny legend */}
              <div className="mt-4 flex flex-wrap items-center gap-2 px-1 text-xs text-zinc-600 dark:text-zinc-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> Pop-up
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                  <span className="h-2 w-2 rounded-full bg-zinc-500" /> Verified
                  org
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                  <span className="h-2 w-2 rounded-full bg-orange-500" /> Event
                </span>
              </div>
            </div>

            {/* Side badge */}
            <div className="absolute -right-2 -top-3 hidden rotate-2 rounded-2xl bg-white px-4 py-3 text-xs shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10 sm:block">
              <div className="font-semibold">Built for campuses</div>
              <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                approvals • verification • moderation
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section id="features" className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Designed to stay useful (not cluttered)
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
                Pins are fun for five minutes. Sunshade stays helpful with
                filters, trust signals, and moderation — so students can actually
                find good stuff.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Trust signals"
              desc="Verified org badges, contributor history, and clear event sources."
            />
            <FeatureCard
              title="Approvals workflow"
              desc="Pending → approved → live, with fast takedown and audit trails."
            />
            <FeatureCard
              title="Live map + list"
              desc="Map for proximity, list for speed. Use whichever feels best."
            />
            <FeatureCard
              title="Time-first discovery"
              desc="Now / Today / This week views so you’re not digging through old pins."
            />
            <FeatureCard
              title="Smart clustering"
              desc="Dense areas stay readable with clusters and category toggles."
            />
            <FeatureCard
              title="Safety & reporting"
              desc="Report flows, moderation queue, and category rules built-in."
            />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16 sm:mt-20">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <Step
                n="01"
                title="Pick your campus"
                desc="Sunshade is organized by university (subdomains) so everything stays relevant."
              />
              <Step
                n="02"
                title="Discover nearby"
                desc="Browse by map, filter by time, and see what’s actually happening."
              />
              <Step
                n="03"
                title="Post safely"
                desc="Events go through verification and approvals so the feed stays legit."
              />
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mt-16 pb-10 sm:mt-20">
          <div className="rounded-3xl bg-zinc-950 p-8 text-white shadow-sm dark:bg-white dark:text-black">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Launching soon.
                </h2>
                <p className="mt-2 max-w-xl text-white/80 dark:text-black/70">
                  Want Sunshade at your university? Join the waitlist and we’ll
                  email you when your campus goes live.
                </p>
              </div>

              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@university.edu"
                  className="h-12 w-full rounded-full bg-white/10 px-5 text-sm text-white placeholder:text-white/60 ring-1 ring-white/15 outline-none focus:ring-2 focus:ring-white/35 dark:bg-black/10 dark:text-black dark:placeholder:text-black/50 dark:ring-black/15 dark:focus:ring-black/25"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-white px-6 text-sm font-medium text-zinc-950 hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
                >
                  Join
                </button>
              </form>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70 dark:text-black/60">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 dark:bg-black/10 dark:ring-black/10">
                No spam
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 dark:bg-black/10 dark:ring-black/10">
                Verification-first
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 dark:bg-black/10 dark:ring-black/10">
                Built for student safety
              </span>
            </div>
          </div>
        </section>

        <footer className="mt-6 flex flex-col items-center justify-between gap-3 pb-10 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">
              Sunshade
            </span>
            <span className="text-zinc-400">•</span>
            <span>campus events, mapped</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              Terms
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        {desc}
      </p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-black/5 dark:bg-black/40 dark:ring-white/10">
      <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-300">
        {n}
      </div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        {desc}
      </p>
    </div>
  );
}

function Marker({
  x,
  y,
  title,
  meta,
  tone,
}: {
  x: string;
  y: string;
  title: string;
  meta: string;
  tone: "amber" | "orange" | "zinc";
}) {
  const dot =
    tone === "amber"
      ? "bg-amber-500"
      : tone === "orange"
      ? "bg-orange-500"
      : "bg-zinc-500";

  const ring =
    tone === "amber"
      ? "ring-amber-500/25"
      : tone === "orange"
      ? "ring-orange-500/25"
      : "ring-zinc-500/25";

  return (
    <div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <div className="group relative">
        <div
          className={[
            "grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10",
          ].join(" ")}
        >
          <div className={`h-3 w-3 rounded-full ${dot} ring-8 ${ring}`} />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-12 w-44 -translate-x-1/2 opacity-0 transition group-hover:opacity-100">
          <div className="rounded-2xl bg-white p-3 text-xs shadow-sm ring-1 ring-black/5 dark:bg-zinc-950 dark:ring-white/10">
            <div className="font-semibold">{title}</div>
            <div className="mt-1 text-zinc-600 dark:text-zinc-300">{meta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
