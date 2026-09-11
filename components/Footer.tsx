import React from "react";
import Link from "next/link";
import { BGMLogo } from "./BGMLogo";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Calculator,
  Mail,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#024E7E] text-slate-300 border-t border-[#CA9625]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#024E7E]/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CA9625]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top Pre-Footer Call-to-Action Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#024E7E] via-[#024E7E] to-[#024E7E] p-8 sm:p-10 border border-[#CA9625]/30 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#CA9625] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Votre Partenaire Immobilier & BTP au Gabon</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              Prêt à concevoir ou bâtir <span className="gold-gradient-text">votre projet ?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Obtenez une étude de faisabilité gratuite et un devis personnalisé pour votre villa ou ouvrage BTP.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              href="/estimation"
              className="btn-sunset-gradient px-6 py-3.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <Calculator className="w-4 h-4 text-[#024E7E]" />
              <span>Simuler un Devis Gratuit</span>
            </Link>

            <a
              href="https://wa.me/241077167607"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Enterprise Identity */}
          <div className="space-y-4">
            <BGMLogo size="lg" />
            <div className="space-y-1">
              <span className="text-xs font-black text-white uppercase tracking-wider block">
                BGM Ingénierie & Consulting
              </span>
              <span className="text-[11px] font-extrabold text-[#CA9625] italic block">
                « De la conception à la réalisation »
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              Conception • Études • Ingénierie • Construction TCE • VRD • Développement immobilier à Libreville, Gabon.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-[#CA9625]">
              <ShieldCheck className="w-4 h-4 text-[#CA9625] shrink-0" />
              <span>Garanties Décennales & Titres Fonciers</span>
            </div>
          </div>

          {/* Column 2: Nos Domaines d'Intervention BGM */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest text-[#CA9625]">
              Domaines d&apos;Intervention
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/services#etudes" className="hover:text-[#CA9625] flex items-center gap-2.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625]" />
                  <span>Conception & Études Techniques</span>
                </Link>
              </li>
              <li>
                <Link href="/services#conception" className="hover:text-[#CA9625] flex items-center gap-2.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625]" />
                  <span>Ingénierie & Modélisation 3D</span>
                </Link>
              </li>
              <li>
                <Link href="/services#construction" className="hover:text-[#CA9625] flex items-center gap-2.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625]" />
                  <span>Construction TCE & Travaux VRD</span>
                </Link>
              </li>
              <li>
                <Link href="/services#promotion" className="hover:text-[#CA9625] flex items-center gap-2.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625]" />
                  <span>Développement Immobilier</span>
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-[#CA9625] flex items-center gap-2.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CA9625]" />
                  <span>Programme « Ma Terre, Ma Maison »</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Headquarters */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest text-[#CA9625]">
              Siège Social & Contact
            </h4>
            <ul className="space-y-3.5 text-xs font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#CA9625] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-white block font-bold">Localisation Siège :</span>
                  <span className="text-slate-300 block">Lalala à droite, BP 15 406</span>
                  <span className="text-[#CA9625] font-bold block">Libreville — Gabon</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#CA9625] shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Téléphone direct :</span>
                  <a href="tel:+241077167607" className="font-bold text-white hover:text-[#CA9625] transition-colors font-mono">
                    (+241) 077 16 76 07
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#CA9625] shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Horaires d&apos;ouverture :</span>
                  <span className="text-slate-200">Du Lundi au Vendredi: 08h00 - 17h30</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Accès Rapide */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest text-[#CA9625]">
              Accès Rapide
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-[#CA9625] flex items-center justify-between py-1 border-b border-white/10 transition-colors">
                  <span>Accueil</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[#CA9625] flex items-center justify-between py-1 border-b border-white/10 transition-colors">
                  <span>À Propos de BGM</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#CA9625] flex items-center justify-between py-1 border-b border-white/10 transition-colors">
                  <span>Nos 4 Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-[#CA9625] flex items-center justify-between py-1 border-b border-white/10 transition-colors">
                  <span>Catalogue Architectural & Projets</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CA9625] flex items-center justify-between py-1 border-b border-white/10 transition-colors">
                  <span>Nous Contacter</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CA9625]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} BGM Ingénierie & Consulting — De la conception à la réalisation. Libreville, Gabon.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-[#CA9625] transition-colors">
              Mentions Légales
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#CA9625] transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
