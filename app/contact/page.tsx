"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  FileText,
  User,
  ArrowRight,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "conception",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 text-[#024E7E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#024E7E] tracking-tight">
            Contactez BGM Ingénierie & Consulting
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Nos équipes d&apos;ingénieurs, architectes et conseillers sont à votre entière disposition au siège social de Libreville ou par ligne directe.
          </p>
        </div>

        {/* Main Content: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Info & Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-light-premium p-8 sm:p-10 rounded-3xl space-y-8 border border-slate-200/90 shadow-xl bg-white">
              <div className="border-b border-slate-100 pb-5 space-y-1">
                <h2 className="text-2xl font-black font-heading text-[#024E7E]">
                  Siège Social & Coordonnées
                </h2>
                <p className="text-xs font-semibold text-[#CA9625]">
                  BGM Ingénierie & Consulting — Libreville, Gabon
                </p>
              </div>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6 text-[#CA9625]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#024E7E] text-base">Adresse du Siège</h3>
                    <p className="text-slate-600 font-medium leading-snug">
                      Lalala à droite, BP 15 406
                    </p>
                    <p className="font-bold text-[#CA9625] text-sm">Libreville — Gabon</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 text-[#CA9625]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#024E7E] text-base">Ligne Directe / Téléphone</h3>
                    <a
                      href="tel:+241077167607"
                      className="font-black text-[#024E7E] text-xl hover:text-[#CA9625] transition-colors block"
                    >
                      (+241) 077 16 76 07
                    </a>
                    <p className="text-xs text-slate-500 font-medium">
                      Accueil téléphonique du Lundi au Samedi.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-md group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 text-[#CA9625]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#024E7E] text-base">Courrier Électronique</h3>
                    <a
                      href="mailto:contact@begnamam.com"
                      className="font-bold text-[#024E7E] text-sm hover:underline block"
                    >
                      contact@begnamam.com
                    </a>
                    <p className="text-xs text-slate-500">Service client & direction des projets.</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-md group-hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6 text-[#CA9625]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#024E7E] text-base">Horaires d&apos;Ouverture</h3>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm">
                      <span className="font-bold text-slate-800">Lundi - Vendredi :</span> 08h00 - 17h30
                    </p>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm">
                      <span className="font-bold text-slate-800">Samedi :</span> 09h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Banner Card */}
              <div className="pt-6 border-t border-slate-100">
                <div className="p-6 rounded-2xl bg-[#024E7E] text-white space-y-4 border border-[#CA9625]/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Échange Direct WhatsApp</h4>
                      <p className="text-[11px] text-slate-300">Réponse rapide & pièces jointes</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/241077167607?text=Bonjour%20BGM%20Ing%C3%A9nierie,%20je%20souhaite%20des%20informations%20sur%20vos%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sunset-gradient w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <span>Lancer la discussion WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-[#024E7E]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form
                method="POST"
                action="#"
                onSubmit={handleSubmit}
                className="card-light-premium p-8 sm:p-10 rounded-3xl space-y-7 border border-slate-200/90 shadow-xl bg-white"
              >
                <div className="border-b border-slate-100 pb-5 space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#024E7E]">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Remplissez ce formulaire pour être recontacté sous 24 heures par un responsable d&apos;études BGM.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#024E7E] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#CA9625]" />
                      <span>Nom & Prénom *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] focus:ring-2 focus:ring-[#024E7E]/10 shadow-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#024E7E] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#CA9625]" />
                      <span>Téléphone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (+241) 077 16 76 07"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] focus:ring-2 focus:ring-[#024E7E]/10 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#024E7E] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#CA9625]" />
                      <span>Adresse E-mail</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: jean.dupont@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] focus:ring-2 focus:ring-[#024E7E]/10 shadow-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#024E7E] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#CA9625]" />
                      <span>Service Concerné</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] focus:ring-2 focus:ring-[#024E7E]/10 shadow-sm transition-all"
                    >
                      <option value="conception">1. Conception Architecturale & Plans 3D</option>
                      <option value="etudes">2. Études de Faisabilité & Bureau d&apos;Études</option>
                      <option value="construction">3. Construction BTP & Gros Œuvre Clé en Main</option>
                      <option value="materre">4. Programme « Ma Terre, Ma Maison »</option>
                      <option value="promotion">5. Achat de Villa / Duplex BGM</option>
                      <option value="autre">6. Autre demande d&apos;information</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#024E7E] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#CA9625]" />
                    <span>Détails de votre projet ou Message *</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Décrivez votre besoin (type de terrain, superficie souhaitée, délai, budget estimé...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] focus:ring-2 focus:ring-[#024E7E]/10 shadow-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sunset-gradient w-full py-4 rounded-2xl text-sm font-extrabold text-[#024E7E] flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4 text-[#024E7E]" />
                  <span>Envoyer la Demande d&apos;Information</span>
                </button>
              </form>
            ) : (
              <div className="card-light-premium p-10 sm:p-12 rounded-3xl border border-emerald-300 text-center space-y-6 bg-white shadow-xl">
                <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-[#024E7E] font-heading">
                    Message Envoyé avec Succès !
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                    Merci <span className="font-bold text-[#024E7E]">{formData.name || "cher client"}</span>. Un ingénieur de <strong>BGM Ingénierie & Consulting</strong> étudie votre message et vous contactera au <span className="font-bold text-[#CA9625]">{formData.phone}</span> sous 24h.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", service: "conception", message: "" });
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#024E7E] text-xs font-bold transition-colors w-full sm:w-auto"
                  >
                    Envoyer un autre message
                  </button>
                  <a
                    href="https://wa.me/241077167607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sunset-gradient px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                    <span>Relancer sur WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Engagements & Engagements Client Strip */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-light-premium p-6 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#024E7E]/10 text-[#024E7E] flex items-center justify-center shrink-0 border border-[#024E7E]/20">
                <Zap className="w-6 h-6 text-[#CA9625]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#024E7E] text-sm sm:text-base">Réponse sous 24h Ouvrées</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Prise en charge réactive de vos demandes d&apos;études et cotations de projets BTP à Libreville.
                </p>
              </div>
            </div>

            <div className="card-light-premium p-6 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#024E7E]/10 text-[#024E7E] flex items-center justify-center shrink-0 border border-[#024E7E]/20">
                <FileText className="w-6 h-6 text-[#CA9625]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#024E7E] text-sm sm:text-base">Devis & Faisabilité Gratuits</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Évaluation préalable personnalisée pour vos travaux de construction, plans et lotissements.
                </p>
              </div>
            </div>

            <div className="card-light-premium p-6 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#024E7E]/10 text-[#024E7E] flex items-center justify-center shrink-0 border border-[#024E7E]/20">
                <ShieldCheck className="w-6 h-6 text-[#CA9625]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#024E7E] text-sm sm:text-base">Titres Fonciers Garantis</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Tous les projets BGM sont accompagnés de garanties légales et administratives complètes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
