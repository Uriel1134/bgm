"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Users, Phone, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8FAFC]">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-[#024E7E]">
          L&apos;Exigence BTP & Architecture au Gabon
        </h1>
        <p className="text-slate-600 text-base">
          Découvrez notre histoire, l&apos;engagement de la Direction Générale et nos piliers de vision et mission à Libreville.
        </p>
      </div>

      {/* MOT DU PDG / DIRECTION GÉNÉRALE */}
      <section className="card-light-premium p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Award className="w-8 h-8 text-[#CA9625]" />
          <div>
            <h2 className="text-2xl font-bold text-[#024E7E]">Mot du PDG / Direction Générale</h2>
            <p className="text-xs text-[#CA9625] font-semibold uppercase tracking-wider">Message Institutionnel BGM</p>
          </div>
        </div>

        <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed italic space-y-4 border-l-4 border-[#CA9625] pl-6">
          <p>
            &ldquo;Chez <strong>BGM Ingénierie & Construction</strong>, nous sommes animés par une conviction forte : bâtir est un acte d&apos;engagement durable envers l&apos;avenir. Notre mission va bien au-delà de la simple construction d&apos;édifices : nous concevons des cadres de vie harmonieux, modernes et pérennes pour les familles, les professionnels et les investisseurs au Gabon.&rdquo;
          </p>
          <p>
            &ldquo;Qu&apos;il s&apos;agisse d&apos;une étude technique rigoureuse, d&apos;une modélisation architecturale 3D audacieuse, de la réalisation de chantiers complexes ou de la promotion de villas clés en main, nos équipes s&apos;investissent avec passion, professionnalisme et respect strict des normes de sécurité.&rdquo;
          </p>
          <p>
            &ldquo;Ce site web vitrine constitue la vitrine numérique de notre savoir-faire. Il témoigne de notre exigence de qualité, de notre rigueur et de notre passion d&apos;accompagner chaque client dans la concrétisation de son rêve immobilier.&rdquo;
          </p>
        </blockquote>

        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <div>
            <p className="font-bold text-[#024E7E] text-base">La Direction Générale</p>
            <p className="text-xs text-[#CA9625] font-semibold">BGM Ingénierie & Construction — Siège Lalala à droite, Libreville</p>
          </div>
          <a
            href="tel:+241077167607"
            className="btn-sunset-gradient px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>(+241) 077 16 76 07</span>
          </a>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-light-premium p-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-[#024E7E]">Notre Mission</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
              <span><strong>Ingénierie & Études :</strong> Études de sol, permis de construire et sécurité structurelle.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
              <span><strong>Créativité 2D & 3D :</strong> Conception architecturale moderne adaptée au climat gabonais.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
              <span><strong>BTP & Construction :</strong> Suivi de chantier rigoureux et garanties décennales.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
              <span><strong>Promotion Immobilière :</strong> Vente de villas et parcelles sécurisées avec titre foncier.</span>
            </li>
          </ul>
        </div>

        <div className="card-light-premium p-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shadow-md">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-[#024E7E]">Notre Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Devenir la référence majeure du bâtiment, de l&apos;architecture et de l&apos;immobilier au Gabon et en Afrique Centrale, en combinant l&apos;innovation technologique (modélisation 3D, assistance 24/7) et un accompagnement client de proximité.
          </p>
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/estimation"
              className="btn-sunset-gradient px-5 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Demander une étude de projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
