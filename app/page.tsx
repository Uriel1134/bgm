"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Layers,
  HardHat,
  Home,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Calculator,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Clock,
  FileCheck,
  BadgeCheck,
  HelpCircle,
  Quote,
  Hammer,
  KeyRound,
  FileText,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pillars = [
    {
      id: "etudes",
      number: "01",
      icon: Compass,
      image: "/images/engineer_team.jpg",
      title: "Études & Ingénierie",
      subtitle: "Faisabilité & Structure",
      description:
        "Études géotechniques de sol, calculs de structures béton/acier et dossiers réglementaires au Gabon.",
      tag: "Ingénierie & Structure",
      points: ["Étude géotechnique de sol", "Calculs de charges & béton armé", "Dossier de Permis de Construire"],
    },
    {
      id: "conception",
      number: "02",
      icon: Layers,
      image: "/images/hero_villa.jpg",
      title: "Conception Architecturale",
      subtitle: "Plans 2D & Modélisation 3D",
      description:
        "Conception de plans 2D/3D sur-mesure, rendus virtuels photoréalistes et aménagement d'espaces.",
      tag: "Architecture & 3D",
      points: ["Plans 2D cotés & coupes", "Visites virtuelles 3D 4K", "Design d'intérieur sur-mesure"],
    },
    {
      id: "construction",
      number: "03",
      icon: HardHat,
      image: "/images/engineer_team.jpg",
      title: "Construction BTP",
      subtitle: "Gros Œuvre & Clé en main",
      description:
        "Réalisation de travaux de bâtiment, fondations spéciales, maçonnerie et finitions de haut standing.",
      tag: "BTP & Gros Œuvre",
      points: ["Fondations & Maçonnerie", "Garantie décennale BTP", "Direction & suivi de chantier"],
    },
    {
      id: "promotion",
      number: "04",
      icon: Home,
      image: "/images/hero_villa.jpg",
      title: "Promotion Immobilière",
      subtitle: "Villas & Terrains Titrés",
      description:
        "Commercialisation de villas contemporaines clés en main, duplex et parcelles viabilisées avec Titre Foncier.",
      tag: "Villas & Terrains",
      points: ["Villas F4/F5 clés en main", "Terrains viabilisés titrés", "Vente VEFA sécurisée"],
    },
  ];

  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Garantie Décennale & Assurances",
      desc: "Tous nos ouvrages BTP sont couverts par une assurance décennale garantissant la pérennité de votre investissement.",
    },
    {
      icon: BadgeCheck,
      title: "Titres Fonciers Individuels",
      desc: "Nos villas et parcelles de terrains vendues disposent d'une propriété foncière 100% sécurisée et contrôlée.",
    },
    {
      icon: FileCheck,
      title: "Transparence & Zéro Surcoût",
      desc: "Devis détaillés et contrats clairs garantissant le respect du budget convenu sans mauvaises surprises.",
    },
    {
      icon: Clock,
      title: "Respect Strict des Délais",
      desc: "Planning d'exécution rigoureux avec rapports de chantier hebdomadaires transmis au maître d'ouvrage.",
    },
  ];

  const featuredProjects = [
    {
      title: "Villa Contemporaine Begnamam avec Solarium",
      category: "Promotion Immobilière",
      location: "Akanda — Libreville",
      image: "/images/villa_brique_terrasse.jpg",
      specs: "4 Chambres | Rooftop Terrasse | Carport Couvert | Parement Briques",
      status: "Programme en Vente (VEFA)",
    },
    {
      title: "Plan d'Architecture 2D/3D Maison 2 Chambres (110 m²)",
      category: "Conception Architecturale",
      location: "Nombakélé — Libreville",
      image: "/images/plan_architectural_110m2.jpg",
      specs: "Dossier Technique Coté | Suite Parentale | Terrasse 110 m²",
      status: "Dossier BGM Officiel",
    },
    {
      title: "Duplex Prestige Begnamam R+1",
      category: "Promotion Immobilière",
      location: "La Sablière — Libreville",
      image: "/images/duplex_prestige_bgm.jpg",
      specs: "5 Chambres | Balcon Vitré R+1 | Carport | Eclairage LED",
      status: "Disponibilité Immédiate",
    },
    {
      title: "Villa de Standing 'Begna Emeraude'",
      category: "Réalisations BTP Clé en main",
      location: "Okala — Libreville",
      image: "/images/villa_plain_pied_carport.jpg",
      specs: "3 Chambres | Garages Couverts | Jardin Gazonné | Clôture",
      status: "Livrée avec Titre Foncier",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Faisabilité",
      desc: "Étude initiale de vos besoins, analyse du terrain et validation du budget prévisionnel.",
    },
    {
      step: "02",
      title: "Conception 2D/3D & Permis",
      desc: "Élaboration des plans architecturaux 2D/3D et dépôt du permis de construire officiel.",
    },
    {
      step: "03",
      title: "Construction & Suivi BTP",
      desc: "Exécution des travaux par nos ingénieurs avec rapports d'avancement hebdomadaires.",
    },
    {
      step: "04",
      title: "Livraison & Titre Foncier",
      desc: "Remise des clés officielle, remise des garanties décennales et accompagnement administratif.",
    },
  ];

  const testimonials = [
    {
      quote:
        "L'équipe de BGM Begnamam a conçu et construit notre villa à Akanda avec un professionnalisme remarquable. La modélisation 3D initiale correspondait exactement au rendu final !",
      author: "M. Mba Ondo",
      role: "Propriétaire de Villa — Akanda",
    },
    {
      quote:
        "Un accompagnement rigoureux pour l'acquisition de notre terrain titré et la réalisation des études de structure. BGM est sans conteste un partenaire de confiance à Libreville.",
      author: "Mme Ntsame",
      role: "Investisseure Immobilière — Libreville",
    },
  ];

  const faqs = [
    {
      question: "Comment se déroule l'achat d'une villa sur plan (VEFA) chez BGM ?",
      answer:
        "L'achat en VEFA s'effectue en plusieurs étapes sécurisées : réservation, signature du contrat préliminaire, paiement échelonné selon l'avancement certifié des travaux BTP et remise des clés avec Titre Foncier.",
    },
    {
      question: "Puis-je commander uniquement une conception d'architecture 2D/3D sans faire construire ?",
      answer:
        "Absolument ! Notre pôle Conception d'Architecture réalise des études et des modélisations 3D complètes, prêtes à l'exécution pour tous types de clients ou promoteurs.",
    },
    {
      question: "Vos parcelles de terrains disposent-elles d'un Titre Foncier ?",
      answer:
        "Oui, toutes les parcelles de terrains commercialisées par BGM Begnamam sont viabilisées et garanties avec un Titre Foncier individuel vérifié.",
    },
    {
      question: "Comment obtenir un devis gratuit pour mon projet de construction ?",
      answer:
        "Vous pouvez utiliser notre simulateur de devis en ligne sur ce site, nous contacter au (+241) 077 16 76 07 ou vous rendre directement à notre siège à Lalala à droite, BP 15 406 — Libreville.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen space-y-24 pb-16 bg-[#F8FAFC]">
      {/* 1. HERO SECTION (Immersive Light Contrast Hero) */}
      <section className="relative min-h-[90vh] bg-[#024E7E] text-white overflow-hidden flex items-center pt-24 pb-16">
        <Image
          src="/images/hero_villa.jpg"
          alt="Villa d'exception BGM Begnamam Libreville Gabon"
          fill
          priority
          className="object-cover object-[center_35%] scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#024E7E]/95 via-[#024E7E]/80 to-[#024E7E]/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
              L&apos;Excellence de la <span className="gold-gradient-text">Construction</span> au Gabon
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
              <strong>BGM Ingénierie & Consulting</strong> — Votre partenaire de confiance : Conception • Études • Ingénierie • Construction TCE • VRD • Développement Immobilier.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/estimation"
                className="btn-sunset-gradient px-8 py-4 rounded-2xl text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3 shadow-2xl"
              >
                <span>Demander un Devis</span>
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/projets"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-bold text-xs tracking-widest uppercase hover:border-[#CA9625] hover:text-[#CA9625] transition-all duration-300 backdrop-blur-sm"
              >
                Catalogue des Villas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. CHIFFRES CLÉS & BANDEAU DE IMPACT BGM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-12 relative z-20">
        <div className="bg-[#024E7E] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#CA9625]/40 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA9625]/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {/* Stat 1 */}
            <div className="space-y-2 pt-4 sm:pt-0 sm:pl-4 first:pl-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#CA9625] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-4xl sm:text-5xl font-black font-heading gold-gradient-text tracking-tight">+150</span>
              </div>
              <h3 className="font-bold text-sm text-white pt-1">Projets & Plans 3D Conçus</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Études d&apos;ingénierie de structure, calculs béton et modélisations 3D certifiées.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#CA9625] flex items-center justify-center">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="text-4xl sm:text-5xl font-black font-heading gold-gradient-text tracking-tight">+80</span>
              </div>
              <h3 className="font-bold text-sm text-white pt-1">Ouvrages BTP Livrés</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Chantiers BTP gros œuvre et villas résidentielles livrés clés en main au Gabon.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#CA9625] flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-4xl sm:text-5xl font-black font-heading gold-gradient-text tracking-tight">100%</span>
              </div>
              <h3 className="font-bold text-sm text-white pt-1">Titres Fonciers Garantis</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Propriétés et parcelles viabilisées avec garanties foncières et décennales.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#CA9625] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-4xl sm:text-5xl font-black font-heading gold-gradient-text tracking-tight">+12 ans</span>
              </div>
              <h3 className="font-bold text-sm text-white pt-1">Savoir-Faire & Confiance</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                Acteur majeur du BTP et du développement immobilier au Gabon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LES 4 PILIERS BGM (Architectural & Sober Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <span className="text-[11px] font-bold text-[#CA9625] uppercase tracking-[0.25em] block mb-1">
                Savoir-Faire Intégré
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#024E7E]">
                Nos 4 Domaines d&apos;Expertise
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md font-medium leading-relaxed">
              Une chaîne de compétences complète, des études géotechniques à la remise des clés de villas d&apos;exception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between space-y-6 hover:border-[#CA9625]/60 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Top subtle golden bar indicator */}
                  <div className="absolute top-0 left-0 w-12 group-hover:w-full h-1 bg-[#CA9625] transition-all duration-500 ease-out" />

                  {/* Watermark Number */}
                  <span className="absolute top-4 right-5 text-4xl font-black font-heading text-slate-100 group-hover:text-[#CA9625]/15 transition-colors select-none">
                    {p.number}
                  </span>

                  <div className="space-y-5 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shadow-sm group-hover:bg-[#CA9625] group-hover:text-[#024E7E] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-[#CA9625] uppercase tracking-wider block">
                        {p.tag}
                      </span>
                      <h3 className="text-lg font-bold text-[#024E7E] group-hover:text-[#024E7E] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {p.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {p.points.map((pt, ptIdx) => (
                        <div key={ptIdx} className="text-[11px] text-slate-600 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between relative z-10">
                    <Link
                      href={`/services#${p.id}`}
                      className="text-xs font-bold text-[#024E7E] group-hover:text-[#CA9625] flex items-center gap-2 transition-colors"
                    >
                      <span>Découvrir l&apos;expertise</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#CA9625] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LES 4 GARANTIES DE CONFIANCE (Deep Navy Highlight Block) */}
      <section className="bg-[#024E7E] text-white py-20 border-y border-[#CA9625]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
              Les 4 Garanties de Confiance de nos Projets
            </h2>
            <p className="text-xs text-slate-300">
              Des engagements fermes pour sécuriser le patrimoine et la sérénité de chaque client au Gabon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div key={idx} className="bg-[#024E7E]/40 border border-[#CA9625]/40 p-6 rounded-2xl space-y-3 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#CA9625] text-[#024E7E] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{g.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LE MOT DU PDG & VISION STRATÉGIQUE (Luminous Light Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="card-light-premium p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#024E7E]">
                &ldquo;Bâtir est un acte d&apos;engagement durable envers l&apos;avenir du Gabon.&rdquo;
              </h2>

              <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-4 border-[#CA9625] pl-4 space-y-3">
                <p>
                  &ldquo;Chez <strong>BGM Ingénierie & Consulting</strong>, nous mettons notre expertise au service de cadres de vie harmonieux, modernes et pérennes. De la conception à la réalisation, nos équipes apportent rigueur technique et excellence sur l&apos;ensemble du territoire gabonais.&rdquo;
                </p>
              </blockquote>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <div>
                  <p className="font-bold text-[#024E7E] text-sm">La Direction Générale</p>
                  <p className="text-xs text-[#CA9625] font-semibold">BGM Ingénierie & Consulting — Siège Lalala à droite, Libreville</p>
                </div>
                <Link
                  href="/a-propos"
                  className="btn-sunset-gradient px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <span>Lire notre Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F1F5F9] p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-[#024E7E] border-b border-slate-300 pb-3">Informations Institutionnelles</h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
                  <span><strong>Siège Social :</strong> Lalala à droite, BP 15 406 — Libreville</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
                  <span><strong>Téléphone Direct :</strong> (+241) 077 16 76 07</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
                  <span><strong>Horaires :</strong> Lun - Ven: 08h00 - 17h30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESSUS DE TRAVAIL EN 4 ÉTAPES (Reference Design Banner & Bottom Connected Strip) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden bg-[#024E7E] text-white p-8 sm:p-12 lg:p-16 space-y-12 shadow-2xl border border-[#CA9625]/30">
          {/* Background Image & Gradient Overlay */}
          <Image
            src="/images/hero_villa.jpg"
            alt="Processus de Construction BGM Begnamam"
            fill
            className="object-cover opacity-25 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#024E7E] via-[#024E7E]/90 to-transparent" />

          {/* Banner Text Header */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[11px] font-bold text-[#CA9625] uppercase tracking-[0.25em] block">
              Méthodologie & Accompagnement BGM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white leading-tight tracking-tight">
              Votre Projet de Construction en <span className="gold-gradient-text">4 Étapes Simples</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Un parcours rigoureux et sécurisé, des premières études géotechniques jusqu&apos;à la remise de vos clés avec Titre Foncier au Gabon.
            </p>
          </div>

          {/* Bottom Overlapping 4-Step Connected Card Strip */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            {/* Step 1: Photo Tint Card */}
            <div className="relative bg-slate-900/90 text-white p-7 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between space-y-6 group overflow-hidden">
              <Image
                src="/images/engineer_team.jpg"
                alt="Consultation Faisabilité"
                fill
                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#CA9625] text-[#024E7E] flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#CA9625]">01</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#CA9625] transition-colors">
                    {processSteps[0].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">
                    {processSteps[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Clean White Card */}
            <div className="bg-white text-[#024E7E] p-7 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">02</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#024E7E] group-hover:text-[#024E7E] transition-colors">
                    {processSteps[1].title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    {processSteps[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Deep Navy Card */}
            <div className="bg-[#024E7E] text-white p-7 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center font-bold border border-[#CA9625]/30">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#CA9625]">03</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#CA9625] transition-colors">
                    {processSteps[2].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">
                    {processSteps[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Gold Sunset Gradient Card with CTA Link */}
            <div className="btn-sunset-gradient text-[#024E7E] p-7 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center font-bold">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#024E7E]">04</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#024E7E]">
                    {processSteps[3].title}
                  </h3>
                  <p className="text-xs text-[#024E7E]/90 mt-2 leading-relaxed font-medium">
                    {processSteps[3].desc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/estimation"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#024E7E] hover:translate-x-1 transition-transform"
                >
                  <span>Lancer mon projet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. PROGRAMME NATIONAL "MA TERRE, MA MAISON" (BGM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl space-y-12 overflow-hidden">
          {/* Header Banner with Architectural Photo Background */}
          <div className="relative rounded-2xl overflow-hidden bg-[#024E7E] text-white p-8 sm:p-10 shadow-lg border border-[#CA9625]/30">
            <Image
              src="/images/villa_brique_terrasse.jpg"
              alt="Programme Ma Terre Ma Maison BGM Gabon"
              fill
              className="object-cover opacity-25 filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#024E7E] via-[#024E7E]/90 to-transparent" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                  Programme Immobilier <span className="gold-gradient-text">« Ma Terre, Ma Maison »</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                  Promu par <strong>BGM (Begnamam)</strong>, devenez propriétaire de votre logement écologique en <strong>Briques de Terre Comprimée et Stabilisée (BTCS)</strong> grâce à notre formule exclusive de <strong>Location-Vente avec Titre Foncier</strong>.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shrink-0 space-y-1 text-left shadow-lg">
                <span className="text-[10px] font-bold text-[#CA9625] uppercase tracking-widest block">Mensualités Révisées</span>
                <p className="text-2xl sm:text-3xl font-black font-heading text-white">180 000 à 350 000 <span className="text-xs text-slate-300 font-normal">FCFA / mois</span></p>
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Remboursement actif SEULEMENT après remise des clés</span>
                </p>
              </div>
            </div>
          </div>

          {/* Offer Grid (3 Pricing Cards with Images) */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black font-heading text-[#024E7E]">
              Les 3 Modèles de Logements Écologiques BTCS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: 2 Chambres */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden hover:border-[#CA9625]/60 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/villa_brique_terrasse.jpg"
                    alt="Maison 2 Chambres BTCS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#024E7E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#024E7E]/90 px-2.5 py-1 rounded-md border border-white/20">
                      BTCS Thermo-Isolant
                    </span>
                    <span className="text-xs font-bold text-[#CA9625]">2 Chambres</span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#024E7E]">Maison 2 Chambres</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Modèle fonctionnel avec séjour lumineux, cuisine équipée et sanitaires modernes. Fraîcheur naturelle optimale.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200/80">
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">Prix du logement :</span>
                      <span className="text-2xl font-black font-heading text-[#024E7E]">26 372 000 <span className="text-xs text-slate-500 font-bold">FCFA</span></span>
                    </div>

                    <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Caution réservation : <strong>3 000 000 FCFA</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Livraison clé en main avec Titre Foncier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: 3 Chambres (Offre Phare) */}
              <div className="bg-[#024E7E] text-white rounded-2xl border-2 border-[#CA9625] overflow-hidden shadow-2xl hover:shadow-2xl transition-all flex flex-col justify-between relative group">
                <div className="absolute top-3 right-3 z-10 bg-[#CA9625] text-[#024E7E] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Offre Phare
                </div>

                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/villa_contemporaine_solarium.jpg"
                    alt="Maison 3 Chambres BTCS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#024E7E] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#024E7E]/90 px-2.5 py-1 rounded-md border border-[#CA9625]/40 text-[#CA9625]">
                      BTCS Grand Confort
                    </span>
                    <span className="text-xs font-bold text-white">3 Chambres</span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">Maison 3 Chambres</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Grande villa familiale avec suite parentale, terrasse couverte et jardin privatif. Matériaux locaux durables.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/15">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Prix du logement :</span>
                      <span className="text-2xl font-black font-heading text-[#CA9625]">31 472 000 <span className="text-xs text-slate-300 font-bold">FCFA</span></span>
                    </div>

                    <div className="space-y-2 text-xs font-semibold text-slate-200 bg-white/10 p-3 rounded-xl border border-white/15">
                      <div className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Caution réservation : <strong>3 000 000 FCFA</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Livraison clé en main avec Titre Foncier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Duplex Prestige */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden hover:border-[#CA9625]/60 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/duplex_prestige_bgm.jpg"
                    alt="Duplex Prestige BTCS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#024E7E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#024E7E]/90 px-2.5 py-1 rounded-md border border-white/20">
                      Haut Standing R+1
                    </span>
                    <span className="text-xs font-bold text-[#CA9625]">Duplex R+1</span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#024E7E]">Duplex Prestige</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Duplex contemporain sur 2 niveaux avec volumes d&apos;exception, balcons vitrés, finitions haut de gamme et garage.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200/80">
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">Prix du logement :</span>
                      <span className="text-xl font-black font-heading text-[#024E7E]">55 M à 75 M <span className="text-xs text-slate-500 font-bold">FCFA</span></span>
                    </div>

                    <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Caution réservation : <strong>3 000 000 FCFA</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0" />
                        <span>Livraison clé en main avec Titre Foncier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Processus de souscription en 3 Étapes */}
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-[#024E7E]">
                Comment fonctionne le paiement en Location-Vente ?
              </h3>
              <span className="text-xs font-bold text-[#CA9625] bg-[#CA9625]/10 px-3 py-1 rounded-full border border-[#CA9625]/30">
                Formule 100% Sécurisée BGM
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#024E7E] text-[#CA9625] font-bold flex items-center justify-center shrink-0">
                  01
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#024E7E]">Réservation Officielle</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Versement de la caution unique de <strong>3 000 000 FCFA</strong> pour réserver définitivement votre modèle de logement.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#024E7E] text-[#CA9625] font-bold flex items-center justify-center shrink-0">
                  02
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#024E7E]">Livraison Clé en Main</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Remise officielle des clés de votre logement entièrement achevé avec transfert du <strong>Titre Foncier</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-[#024E7E] text-white p-5 rounded-xl border border-[#CA9625]/40 flex items-start gap-4 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#CA9625] text-[#024E7E] font-bold flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-white">Remboursement Mensuel Différé</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Paiement des mensualités (<strong>180 000 à 350 000 FCFA / mois</strong>) <u>uniquement après être entré dans votre maison</u>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <a
                href="https://wa.me/241077167607"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sunset-gradient px-8 py-4 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl"
              >
                <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                <span>Souscrire au Programme « Ma Terre, Ma Maison » (WhatsApp)</span>
              </a>

              <Link
                href="/estimation"
                className="text-xs text-[#024E7E] hover:text-[#024E7E] font-bold flex items-center gap-2"
              >
                <span>Simuler ma souscription</span>
                <ArrowRight className="w-4 h-4 text-[#CA9625]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATALOGUE VEDETTE (Villas & Plans 3D) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-black font-heading text-[#024E7E]">
              Villas Phares & Modélisations 3D
            </h2>
          </div>
          <Link
            href="/projets"
            className="btn-sunset-gradient px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start md:self-auto"
          >
            <span>Voir tout le catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="card-light-premium rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#024E7E]/90 text-[#E8B94B] text-xs font-bold border border-[#CA9625]/40 backdrop-blur-md">
                  {project.status}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#024E7E] uppercase tracking-wider">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-xl font-bold text-[#024E7E] group-hover:text-[#024E7E] transition-colors mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="btn-sunset-gradient px-4 py-2 rounded-lg text-xs font-bold"
                  >
                    Demander la brochure
                  </Link>
                  <Link
                    href="/projets"
                    className="text-xs text-slate-700 hover:text-[#024E7E] font-semibold flex items-center gap-1"
                  >
                    <span>Détails</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TÉMOIGNAGES CLIENTS & AVIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#024E7E]">
            Ils nous font Confiance au Gabon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-light-premium p-8 space-y-4 relative">
              <Quote className="w-8 h-8 text-[#CA9625]" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-[#024E7E]">{t.author}</p>
                <p className="text-[11px] text-[#CA9625] font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ INTERACTIVE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black font-heading text-[#024E7E]">
            Questions Fréquentes sur BGM
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="card-light-premium rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#024E7E] hover:text-[#024E7E] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#CA9625] shrink-0" />
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#CA9625] transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. RENDEZ-VOUS & CONSULTATION AU SIÈGE (50/50 EQUAL PROPORTIONAL COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Left Column (50%): Information Siège & Accueil */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#024E7E] tracking-tight">
                  Projetez-vous avec nos <span className="gold-gradient-text">Ingénieurs à Libreville</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  Que vous souhaitiez faire construire votre villa, réaliser des études géotechniques de sol, obtenir un plan 3D ou souscrire au programme <strong>« Ma Terre, Ma Maison »</strong>, nos experts vous accueillent au siège.
                </p>
              </div>

              {/* Direct Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#024E7E]">Siège Social Officiel</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">
                      Lalala à droite, BP 15 406<br />
                      <strong className="text-[#CA9625]">Libreville — Gabon</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#024E7E]">Ligne Directe Secrétariat</h3>
                    <a href="tel:+241077167607" className="text-xs font-bold text-[#024E7E] hover:text-[#CA9625] transition-colors block font-mono mt-1">
                      (+241) 077 16 76 07
                    </a>
                    <p className="text-[11px] text-slate-500 font-medium">Lun - Ven: 08h00 - 17h30</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2 bg-[#CA9625]/10 px-4 py-2.5 rounded-xl text-[#024E7E] border border-[#CA9625]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#CA9625]" />
                  <span>Consultation Technique Offerte</span>
                </div>
                <div className="flex items-center gap-2 bg-[#024E7E]/5 px-4 py-2.5 rounded-xl text-[#024E7E] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#CA9625]" />
                  <span>Devis Chiffré sous 48h</span>
                </div>
              </div>
            </div>

            {/* Right Column (50%): Formulaire de Demande de Rendez-vous */}
            <div className="h-full">
              <div className="bg-[#024E7E] text-white p-7 sm:p-8 rounded-3xl border-2 border-[#CA9625]/40 shadow-2xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CA9625]/10 rounded-full filter blur-2xl pointer-events-none" />

                <div className="space-y-1.5 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">Prendre Rendez-vous en Agence</h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Remplissez vos coordonnées pour fixer un échange personnalisé avec un ingénieur BGM.
                  </p>
                </div>

                <form
                  method="POST"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as HTMLFormElement;
                    const name = (target.elements.namedItem("name") as HTMLInputElement).value;
                    const phone = (target.elements.namedItem("phone") as HTMLInputElement).value;
                    const project = (target.elements.namedItem("project") as HTMLSelectElement).value;
                    const msg = (target.elements.namedItem("msg") as HTMLTextAreaElement).value;
                    const waText = encodeURIComponent(
                      `Bonjour BGM Begnamam,\nJe souhaite prendre rendez-vous au siège.\n\nNom: ${name}\nTéléphone: ${phone}\nProjet: ${project}\nMessage: ${msg}`
                    );
                    window.open(`https://wa.me/241077167607?text=${waText}`, "_blank");
                  }}
                  className="space-y-4 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-300 block">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ex: M. Mba Marc"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA9625] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-300 block">Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Ex: +241 07 16 76 07"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA9625] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-300 block">Type de projet *</label>
                      <select
                        name="project"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#CA9625] transition-colors"
                      >
                        <option value="Programme Ma Terre Ma Maison">Programme « Ma Terre, Ma Maison » (BTCS)</option>
                        <option value="Construction Villa BTP">Construction BTP Clé en Main</option>
                        <option value="Conception Plan 2D/3D">Conception Architecturale & Plans 3D</option>
                        <option value="Étude Faisabilité / Sol">Études Géotechniques & Faisabilité</option>
                        <option value="Achat de Terrain Titré">Achat de Terrain Titré</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-300 block">Message ou date souhaitée</label>
                      <textarea
                        name="msg"
                        rows={2}
                        placeholder="Précisez votre demande ou vos disponibilités..."
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA9625] transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="submit"
                      className="btn-sunset-gradient w-full py-3.5 rounded-xl text-xs font-black tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform"
                    >
                      <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                      <span>Envoyer la Demande (WhatsApp Direct)</span>
                    </button>

                    <p className="text-[10px] text-slate-400 text-center">
                      * Confirmation rapide par notre secrétariat au (+241) 077 16 76 07
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
