
'use client';

import { useState } from 'react';

const SERVER_IP = 'voidforge.funserver.top';

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyIP() {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07050d] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <a href="#" className="text-2xl font-black tracking-widest">
          VOID<span className="text-purple-400">FORGE</span>
        </a>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#features" className="transition hover:text-purple-300">Features</a>
          <a href="#ranks" className="transition hover:text-purple-300">Ranks</a>
          <a href="#community" className="transition hover:text-purple-300">Community</a>
        </div>

        <button
          onClick={copyIP}
          className="rounded-lg border border-purple-500/50 px-4 py-2 text-sm font-bold transition hover:bg-purple-500/20"
        >
          {copied ? 'COPIED!' : 'COPY IP'}
        </button>
      </nav>

      <section className="relative flex min-h-[78vh] flex-col items-center justify-center px-6 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <p className="relative mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold tracking-[0.3em] text-purple-300">
          YOUR WORLD. YOUR LEGACY.
        </p>

        <h1 className="relative text-5xl font-black tracking-tight sm:text-7xl md:text-8xl">
          ENTER THE
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-500 bg-clip-text text-transparent">
            VOID.
          </span>
        </h1>

        <p className="relative mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
          Explore a world of Slimefun technology, powerful gear,
          custom ranks, and legendary loot. Your adventure starts here.
        </p>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={copyIP}
            className="rounded-xl bg-purple-600 px-8 py-4 font-black tracking-wider shadow-lg shadow-purple-900/40 transition hover:bg-purple-500"
          >
            {copied ? 'IP COPIED!' : 'PLAY NOW'}
          </button>

          <a
            href="#features"
            className="rounded-xl border border-white/15 px-8 py-4 font-bold transition hover:border-purple-400/60 hover:bg-white/5"
          >
            EXPLORE
          </a>
        </div>

        <button
          onClick={copyIP}
          className="relative mt-6 rounded-lg px-3 py-2 text-sm text-gray-500 transition hover:text-purple-300"
          title="Copy server address"
        >
          Java Edition · {SERVER_IP}
        </button>
      </section>

      <section id="features" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-400">
            WHAT AWAITS YOU
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            FORGE YOUR <span className="text-purple-400">DESTINY.</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'SLIMEFUN',
                description:
                  'Discover advanced machines, powerful gadgets, and technology beyond vanilla Minecraft.',
              },
              {
                number: '02',
                title: 'CUSTOM RANKS',
                description:
                  'Build your reputation and unlock a world of unique rank perks and rewards.',
              },
              {
                number: '03',
                title: 'CRATES & LOOT',
                description:
                  'Test your luck and discover valuable rewards waiting to be claimed.',
              },
            ].map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/[0.05]"
              >
                <p className="text-sm font-bold text-purple-400">
                  {feature.number}
                </p>
                <h3 className="mt-6 text-xl font-black tracking-wider">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ranks" className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-400">
            MAKE YOUR MARK
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            FIND YOUR <span className="text-purple-400">RANK.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            From new adventurer to the legends of VoidForge, discover
            your place in the community.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'VOID', color: 'text-gray-300' },
              { name: 'NIGHT', color: 'text-blue-300' },
              { name: 'FORGE', color: 'text-purple-300' },
              { name: 'SPONSOR', color: 'text-cyan-300' },
            ].map((rank) => (
              <div
                key={rank.name}
                className="rounded-xl border border-white/10 bg-[#0c0915] p-6 text-center transition hover:border-purple-500/40"
              >
                <p className={`text-xl font-black tracking-widest ${rank.color}`}>
                  {rank.name}
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  VOIDFORGE NETWORK
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="px-6 py-24 text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-purple-400">
          YOUR ADVENTURE STARTS NOW
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-6xl">
          READY TO ENTER?
        </h2>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-gray-400">
          Join the world of VoidForge and start building your legacy.
        </p>

        <button
          onClick={copyIP}
          className="mt-8 rounded-xl bg-purple-600 px-9 py-4 font-black tracking-wider transition hover:bg-purple-500"
        >
          {copied ? 'COPIED!' : 'COPY SERVER IP'}
        </button>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 VOIDFORGE. All rights reserved.</p>
        <p className="mt-2">Built for adventurers.</p>
      </footer>
    </main>
  );
}
