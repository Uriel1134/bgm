"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  MapPin,
  Maximize2,
  X,
  Eye,
  Phone,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  SlidersHorizontal,
  Compass,
  FileCheck,
  Building,
} from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain");

  const categories = [
    { id: "all", name: "Tous les Projets" },
    { id: "materre", name: "Programme « Ma Terre, Ma Maison »" },
    { id: "villas", name: "Villas & Duplex à Vendre" },
    { id: "3d", name: "Conception & Plans 3D" },
    { id: "terrains", name: "Terrains Titrés" },
    { id: "livres", name: "Réalisations BTP Livrées" },
  ];

  const projects = [
    {
      id: "1",
      title: "Villa Contemporaine Begnamam avec Solarium",
      category: "villas",
      categoryName: "Promotion Immobilière",
      location: "Akanda - Libreville",
      image: "/images/villa_brique_terrasse.jpg",
      specs: "4 Chambres | Toit Terrasse Panoramique | Carport Couvert | Parement Brique",
      status: "Programme en Vente (VEFA)",
      description: "Villa moderne de standing construite avec parement en briques rouges traditionnelles, terrasse accessible en rooftop via escalier colimaçon métallique et baies vitrées coulissantes.",
      architectNote: "Matériaux nobles, isolation thermique optimisée pour le climat équatorial du Gabon.",
    },
    {
      id: "2",
      title: "Plan d'Architecture 2D/3D Maison 2 Chambres (110 m²)",
      category: "3d",
      categoryName: "Conception 3D & Études",
      location: "Nombakélé - Libreville",
      image: "/images/plan_architectural_110m2.jpg",
      specs: "Plan Massique & Coté | Séjour 25 m² | Suite Parentale | Terrasse",
      status: "Dossier BGM Officiel",
      description: "Étude d'ingénierie et plan architectural coté complet pour maison de 2 chambres avec suite parentale, buanderie et cuisine séparée, conçu par le bureau d'études BEGNAMAM.",
      architectNote: "Plan certifié respectant les normes d'urbanisme de la commune de Libreville.",
    },
    {
      id: "3",
      title: "Duplex Prestige Begnamam R+1",
      category: "villas",
      categoryName: "Promotion Immobilière",
      location: "La Sablière - Libreville",
      image: "/images/duplex_prestige_bgm.jpg",
      specs: "5 Chambres | Balcon Vitré R+1 | Carport | Façade Briques & Enduit",
      status: "Disponibilité Immédiate",
      description: "Duplex contemporain de très haut standing sur 2 niveaux avec architecture mixte briques/béton, grand jardin paysager, éclairages d'ambiance LED intégrés et garage couvert.",
      architectNote: "Finition prestige avec autonomie en réservoirs d'eau et groupe électrogène.",
    },
    {
      id: "4",
      title: "Villa Solarium & Carport Intégré",
      category: "villas",
      categoryName: "Promotion Immobilière",
      location: "Angondjé - Libreville",
      image: "/images/villa_contemporaine_solarium.jpg",
      specs: "4 Chambres | Solarium avec Parasol | Parking 2 Véhicules | Jardin",
      status: "Prochainement Disponible",
      description: "Villa résidentielle lumineuse offrant des volumes spacieux, un espace toit-terrasse aménagé et un carport design avec voûte en briques rouges.",
      architectNote: "Baies vitrées double vitrage et terrasse lounge extérieure.",
    },
    {
      id: "5",
      title: "Villa Résidentielle BGM avec Escalier Colimaçon",
      category: "livres",
      categoryName: "Réalisations BTP",
      location: "Owendo - Gabon",
      image: "/images/villa_vue_jardin_escalier.jpg",
      specs: "Chantier BTP Clé en main | Toit Solarium | Allées Pavées",
      status: "Livrée avec Succès",
      description: "Réalisation BTP livrée clé en main par BGM avec fondations spéciales, structure béton armé, parement briques et aménagement paysager extérieur.",
      architectNote: "Chantier livré dans le respect strict des délais et du cahier des charges.",
    },
    {
      id: "6",
      title: "Villa de Standing 'Begna Emeraude'",
      category: "villas",
      categoryName: "Promotion Immobilière",
      location: "Okala - Libreville",
      image: "/images/villa_plain_pied_carport.jpg",
      specs: "3 Chambres | Garages Couverts | Jardin Gazonné | Éclairage LED",
      status: "En Vente (Titre Foncier)",
      description: "Villa individuelle haut de gamme livrée avec clôture sécurisée, gazon naturel, carport double et garanties décennales BGM.",
      architectNote: "Titre foncier individuel vérifié et disponible immédiatement.",
    },
    {
      id: "7",
      title: "Maison Écologique 2 Chambres BTCS — Programme « Ma Terre, Ma Maison »",
      category: "materre",
      categoryName: "Ma Terre, Ma Maison (Fonction Publique & Parapublic)",
      location: "Grand Libreville — Gabon",
      image: "/images/villa_brique_terrasse.jpg",
      specs: "2 Chambres | 26 372 000 FCFA | Caution 3M FCFA | Remboursement 180k-350k/mois",
      status: "Location-Vente (Titre Foncier)",
      description: "Logement écologique en Briques de Terre Comprimée et Stabilisée (BTCS) réservé aux agents du secteur public et parapublic. Remboursement mensuel actif SEULEMENT après réception de la clé.",
      architectNote: "Matériaux 100% écologiques offrant une fraîcheur naturelle sans climatisation intensive.",
    },
    {
      id: "8",
      title: "Maison Écologique 3 Chambres BTCS — Programme « Ma Terre, Ma Maison »",
      category: "materre",
      categoryName: "Ma Terre, Ma Maison (Fonction Publique & Parapublic)",
      location: "Grand Libreville — Gabon",
      image: "/images/villa_contemporaine_solarium.jpg",
      specs: "3 Chambres | 31 472 000 FCFA | Caution 3M FCFA | Remboursement 180k-350k/mois",
      status: "Location-Vente (Titre Foncier)",
      description: "Grande villa familiale 3 chambres en BTCS livrée clé en main avec Titre Foncier. Caution de réservation 3 000 000 FCFA, remboursement mensuel à la remise des clés.",
      architectNote: "Confort familial optimal, espaces verts et isolation phonique et thermique.",
    },
    {
      id: "9",
      title: "Duplex Prestige BTCS — Programme « Ma Terre, Ma Maison »",
      category: "materre",
      categoryName: "Ma Terre, Ma Maison (Fonction Publique & Parapublic)",
      location: "Grand Libreville — Gabon",
      image: "/images/duplex_prestige_bgm.jpg",
      specs: "Duplex R+1 | 55 000 000 à 75 000 000 FCFA | Caution 3M FCFA | Titre Foncier",
      status: "Location-Vente (Titre Foncier)",
      description: "Duplex contemporain d'exception en briques BTCS pour cadres et agents du secteur public et parapublic. Remboursement différé après emménagement.",
      architectNote: "Architecture moderne à haute efficacité énergétique et finitions haut de gamme.",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const activeProject =
    selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedProjectIndex((prev) =>
          prev !== null ? (prev + 1) % filteredProjects.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedProjectIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredProjects.length) % filteredProjects.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, filteredProjects]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 text-[#024E7E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#024E7E] tracking-tight">
            Nos Projets & Réalisations
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Découvrez nos villas d&apos;exception, nos modélisations 3D et nos plans d&apos;architecture certifiés au Gabon. Cliquez sur n&apos;importe quelle réalisation pour l&apos;explorer en Haute Définition.
          </p>
        </div>

        {/* Filter Navigation Pill Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedProjectIndex(null);
              }}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 shadow-sm ${
                activeCategory === cat.id
                  ? "btn-sunset-gradient shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* HERO FEATURED PROJECT SHOWCASE (FIRST PROJECT SPANS FULL WIDTH) */}
        {/* ========================================================================= */}
        {filteredProjects.length > 0 && (
          <div className="space-y-12">
            <div className="card-light-premium rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl group grid grid-cols-1 lg:grid-cols-12">
              {/* Large Image Preview */}
              <div
                className="lg:col-span-7 relative h-96 lg:h-auto min-h-[420px] bg-slate-950 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProjectIndex(0)}
              >
                <Image
                  src={filteredProjects[0].image}
                  alt={filteredProjects[0].title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#024E7E]/90 text-white text-xs font-bold border border-[#CA9625]/40 backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#CA9625] animate-pulse"></span>
                  <span>PROJET VEDETTE • {filteredProjects[0].status}</span>
                </div>

                <div className="absolute inset-0 bg-[#024E7E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="btn-sunset-gradient px-6 py-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#024E7E]" />
                    <span>Agrandir en Plein Écran HD</span>
                  </span>
                </div>
              </div>

              {/* Hero Project Details */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#CA9625] uppercase tracking-widest block">
                      {filteredProjects[0].categoryName}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">PROJET 01</span>
                  </div>

                  <h2
                    onClick={() => setSelectedProjectIndex(0)}
                    className="text-2xl lg:text-3xl font-black font-heading text-[#024E7E] hover:text-[#024E7E] transition-colors cursor-pointer leading-tight"
                  >
                    {filteredProjects[0].title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {filteredProjects[0].description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                    <p className="text-[#CA9625] font-bold text-[11px] uppercase tracking-wider mb-1">Caractéristiques :</p>
                    <p>{filteredProjects[0].specs}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://wa.me/241077167607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sunset-gradient px-6 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                    <span>Demander le Dossier</span>
                  </a>

                  <button
                    onClick={() => setSelectedProjectIndex(0)}
                    className="text-xs font-bold text-[#024E7E] hover:text-[#CA9625] flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[#CA9625]" />
                    <span>Explorer en HD</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SECONDARY PROJECTS GRID (REMAINING PROJECTS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredProjects.slice(1).map((project, idx) => {
                const actualIndex = idx + 1;
                return (
                  <div
                    key={project.id}
                    className="card-light-premium rounded-3xl overflow-hidden flex flex-col justify-between group transition-all hover:shadow-2xl border border-slate-200/90"
                  >
                    {/* Image Viewport */}
                    <div
                      className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900 cursor-pointer"
                      onClick={() => setSelectedProjectIndex(actualIndex)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#024E7E]/90 text-white text-xs font-bold shadow-lg border border-[#CA9625]/40 backdrop-blur-md flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#CA9625] animate-pulse"></span>
                        {project.status}
                      </div>

                      <div className="absolute top-4 right-4 text-xs font-mono font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        PROJET 0{actualIndex + 1}
                      </div>

                      <div className="absolute inset-0 bg-[#024E7E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="btn-sunset-gradient px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                          <Maximize2 className="w-4 h-4 text-[#024E7E]" />
                          <span>Vue Grand Format HD</span>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#CA9625] uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{project.categoryName} • {project.location}</span>
                        </div>
                        <h3
                          onClick={() => setSelectedProjectIndex(actualIndex)}
                          className="text-xl font-bold text-[#024E7E] group-hover:text-[#024E7E] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                        {project.specs}
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <a
                          href="https://wa.me/241077167607"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-sunset-gradient px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md"
                        >
                          <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                          <span>Demander la Brochure</span>
                        </a>

                        <button
                          onClick={() => setSelectedProjectIndex(actualIndex)}
                          className="text-xs text-[#024E7E] hover:text-[#024E7E] font-bold flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-xl border border-slate-200 transition-colors"
                        >
                          <Eye className="w-4 h-4 text-[#CA9625]" />
                          <span>Voir en HD</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* WORLD-CLASS NEXT.JS FULLSCREEN HD GALLERY LIGHTBOX */}
      {/* ========================================================================= */}
      {activeProject && selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#024E7E]/98 backdrop-blur-2xl flex flex-col justify-between animate-fadeIn text-white select-none overflow-hidden"
          onClick={() => setSelectedProjectIndex(null)}
        >
          {/* Top Control Bar */}
          <div
            className="p-4 sm:p-6 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10 relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#CA9625] bg-[#CA9625]/20 px-3 py-1.5 rounded-full border border-[#CA9625]/40">
                PROJET 0{selectedProjectIndex + 1} / 0{filteredProjects.length}
              </span>
              <div className="hidden sm:block">
                <h3 className="text-base font-bold text-white truncate max-w-md">
                  {activeProject.title}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {activeProject.categoryName} • {activeProject.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Aspect Ratio Switcher */}
              <button
                onClick={() => setFitMode(fitMode === "contain" ? "cover" : "contain")}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
                title="Changer le mode d'affichage"
              >
                <ZoomIn className="w-4 h-4 text-[#CA9625]" />
                <span>{fitMode === "contain" ? "Mode Adapté (100%)" : "Mode Plein Écran"}</span>
              </button>

              <a
                href="https://wa.me/241077167607"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sunset-gradient px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                <span>Demander le prix</span>
              </a>

              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/30"
                aria-label="Fermer (Échap)"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Center Immersive Full-Bleed Image Viewport with Nav Arrows */}
          <div
            className="relative flex-1 w-full h-full flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProjectIndex(
                  (selectedProjectIndex - 1 + filteredProjects.length) %
                    filteredProjects.length
                );
              }}
              className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-[#CA9625] text-white hover:text-[#024E7E] backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-2xl"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image Display */}
            <div className="relative w-full h-full max-w-7xl max-h-[78vh] flex items-center justify-center">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                quality={100}
                unoptimized
                className={`transition-all duration-300 ${
                  fitMode === "contain"
                    ? "object-contain"
                    : "object-cover rounded-2xl shadow-2xl border border-white/20"
                }`}
              />
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProjectIndex(
                  (selectedProjectIndex + 1) % filteredProjects.length
                );
              }}
              className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-[#CA9625] text-white hover:text-[#024E7E] backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-2xl"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Floating Information Overlay Bar */}
          <div
            className="p-4 sm:p-6 bg-black/60 backdrop-blur-md border-t border-white/10 relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#CA9625] uppercase tracking-wider">
                  {activeProject.categoryName} • {activeProject.location}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  (Utilisez les flèches du clavier ← → pour naviguer)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {activeProject.description}
              </p>
              <p className="text-xs text-[#CA9625] font-semibold">
                {activeProject.specs}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/estimation"
                className="btn-sunset-gradient flex-1 md:flex-initial px-6 py-3.5 rounded-xl text-xs font-bold text-center shadow-lg"
              >
                Estimer ce projet
              </Link>
              <a
                href="tel:+241077167607"
                className="bg-[#024E7E] hover:bg-[#024E7E]/80 text-white flex-1 md:flex-initial px-6 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-[#CA9625]/40 transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#CA9625]" />
                <span>(+241) 077 16 76 07</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




