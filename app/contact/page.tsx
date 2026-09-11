"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-[#024E7E]">
            Contactez BGM Ingénierie & Consulting
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Nos équipes techniques et commerciales sont à votre entière disposition au siège social de Libreville ou par téléphone direct.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-light-premium p-8 rounded-3xl space-y-6 border border-slate-200/80 shadow-md">
              <h2 className="text-2xl font-bold font-heading text-[#024E7E] border-b border-slate-100 pb-4">
                Siège Social & Coordonnées
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#024E7E] text-white flex items-center justify-center text-[#CA9625] shrink-0 border border-[#CA9625]/30 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#CA9625]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#024E7E] text-base">Adresse du Siège :</h3>
                    <p className="text-slate-600 font-medium">Lalala à droite, BP 15 406</p>
                    <p className="font-bold text-[#CA9625]">Libreville — Gabon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#024E7E] text-white flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-sm">
                    <Phone className="w-5 h-5 text-[#CA9625]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#024E7E] text-base">Téléphone / Ligne Directe :</h3>
                    <a href="tel:+241077167607" className="font-bold text-[#024E7E] text-lg hover:underline block mt-0.5">
                      (+241) 077 16 76 07
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Ligne ouverte aux heures de bureau.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#024E7E] text-white flex items-center justify-center shrink-0 border border-[#CA9625]/30 shadow-sm">
                    <Clock className="w-5 h-5 text-[#CA9625]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#024E7E] text-base">Horaires d&apos;Ouverture :</h3>
                    <p className="text-slate-600">Lundi - Vendredi : 08h00 - 17h30</p>
                    <p className="text-slate-600">Samedi : 09h00 - 13h00</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="https://wa.me/241077167607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Échanger directement sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="card-light-premium p-8 sm:p-10 rounded-3xl space-y-6 border border-slate-200/80 shadow-lg">
                <h2 className="text-2xl font-bold font-heading text-[#024E7E] border-b border-slate-100 pb-4">
                  Envoyez-nous un Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Nom & Prénom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(+241) 077 16 76 07"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Service Concerné</label>
                  <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm">
                    <option value="etudes">1. Études & Faisabilité</option>
                    <option value="conception">2. Conception Architecturale 2D & 3D</option>
                    <option value="construction">3. Construction BTP & Gros Œuvre</option>
                    <option value="promotion">4. Promotion Immobilière & Vente de Villas</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Votre Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Décrivez votre besoin ou votre projet à Libreville..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sunset-gradient w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#024E7E]" />
                  <span>Envoyer le Message</span>
                </button>
              </form>
            ) : (
              <div className="card-light-premium p-10 rounded-3xl border border-emerald-300 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-[#024E7E]">Message Envoyé avec Succès !</h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci pour votre intérêt. Les équipes de <strong>BGM Begnamam</strong> ont bien reçu votre message et vous contacteront rapidement.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
