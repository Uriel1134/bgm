"use client";

import React from "react";
import Link from "next/link";
import { Compass, Layers, HardHat, Home, CheckCircle2, ArrowRight, Phone, Calculator, ShieldCheck, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "etudes",
      icon: Compass,
      title: "1. Études & Ingénierie de Faisabilité",
      subtitle: "Sécurité structurelle & Permis de construire au Gabon",
      description:
        "Avant tout projet de construction, nos ingénieurs procèdent à une analyse géotechnique et structurelle rigoureuse pour garantir la stabilité et la conformité réglementaire de vos ouvrages.",
      features: [
        "Études géotechniques & analyse des sols au Gabon",
        "Calculs de structures en béton armé & charpentes métalliques",
        "Établissement & suivi du dossier de Permis de Construire",
        "Études d'impact environnemental & analyse de faisabilité financière",
        "Audit technique de bâtiments existants & plan de rénovation",
      ],
      badge: "Ingénierie Rigoureuse",
    },
    {
      id: "conception",
      icon: Layers,
      title: "2. Conception Architecturale 2D & 3D",
      subtitle: "Modélisation virtuelle & Aménagement sur-mesure",
      description:
        "Nos architectes traduisent vos idées en maquettes 3D hyper-réalistes pour vous projeter virtuellement dans votre futur cadre de vie adapté au climat tropical.",
      features: [
        "Plans d'architecture 2D complets (Cotes, coupes, façades)",
        "Modélisation 3D photoréaliste & visites virtuelles 4K",
        "Design d'intérieur & agencement d'espaces de standing",
        "Aménagement paysager & intégration environnementale",
        "Plans de masse et d'exécution pour les équipes BTP",
      ],
      badge: "Modélisation 3D",
    },
    {
      id: "construction",
      icon: HardHat,
      title: "3. Construction BTP & Gros/Second Œuvre",
      subtitle: "Réalisation d'ouvrages clés en main au Gabon",
      description:
        "De la première pierre à la remise des clés, nous assurons la gestion intégrale de vos chantiers résidentiels et commerciaux sous garantie décennale.",
      features: [
        "Fondations spéciales & travaux de terrassement",
        "Gros œuvre : Maçonnerie, dalles & structures béton",
        "Second œuvre : Électricité, plomberie, étanchéité",
        "Finitions haut de gamme : Carrelage, peinture, menuiserie",
        "Direction & suivi de chantier avec assurance décennale",
      ],
      badge: "BTP Clé en Main",
    },
    {
      id: "promotion",
      icon: Home,
      title: "4. Promotion Immobilière & Vente de Villas",
      subtitle: "Programmes résidentiels & Terrains titrés à Libreville",
      description:
        "Nous développons et commercialisons des programmes immobiliers modernes et sécurisés dans les meilleurs quartiers du Gabon (Akanda, Sablière, Owendo).",
      features: [
        "Vente de villas individuelles & duplex de standing",
        "Terrains constructibles viabilisés avec Titre Foncier",
        "Achat sur plan (VEFA) avec paiement échelonné sécurisé",
        "Accompagnement dans l'obtention de financements immobiliers",
        "Gestion & valorisation du patrimoine immobilier",
      ],
      badge: "Villas & Terrains",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-[#024E7E]">
            Nos 4 Domaines d&apos;Intervention
          </h1>
          <p className="text-slate-600 text-base font-medium">
            Découvrez la synergie de nos 4 expertises pour concrétiser vos projets de bâtiment et d&apos;immobilier au Gabon.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="card-light-premium p-8 sm:p-10 space-y-6 scroll-mt-28 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#CA9625] uppercase tracking-wider block">
                        {service.badge}
                      </span>
                      <h2 className="text-2xl font-bold font-heading text-[#024E7E]">
                        {service.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/estimation"
                    className="btn-sunset-gradient px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start md:self-auto shrink-0"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Demander un devis</span>
                  </Link>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h3 className="text-xs font-bold text-[#024E7E] uppercase tracking-wider mb-3">
                    Prestations & Engagements d&apos;Excellence :
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="blue-gradient-bg p-8 sm:p-12 rounded-3xl border-2 border-[#CA9625]/40 text-center text-white space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Vous souhaitez discuter de votre projet avec nos ingénieurs ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto">
            Rencontrez-nous dans nos locaux à Lalala à droite, BP 15 406 — Libreville ou contactez-nous directement par téléphone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+241077167607"
              className="btn-sunset-gradient px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler le (+241) 077 16 76 07</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-2"
            >
              <span>Prendre rendez-vous au siège</span>
              <ArrowRight className="w-4 h-4 text-[#CA9625]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
