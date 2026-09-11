"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Building, Phone } from "lucide-react";

export default function EstimationPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("construction");
  const [surface, setSurface] = useState("200");
  const [finition, setFinition] = useState("standing");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = () => {
    let baseRate = 0;
    if (service === "construction") baseRate = 450000; // XAF per m2
    else if (service === "conception") baseRate = 25000;
    else if (service === "etudes") baseRate = 15000;
    else baseRate = 600000;

    let multiplier = 1.0;
    if (finition === "prestige") multiplier = 1.35;
    else if (finition === "luxe") multiplier = 1.7;

    const total = parseInt(surface || "0") * baseRate * multiplier;
    return new Intl.NumberFormat("fr-FR").format(Math.round(total));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-[#024E7E]">
            Estimez votre Projet en Ligne
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Obtenez une pré-estimation indicative pour vos projets de construction, d&apos;architecture 3D ou d&apos;études techniques au Gabon.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between max-w-xl mx-auto border-b border-slate-200 pb-6 px-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  step === s
                    ? "btn-sunset-gradient shadow-md scale-110"
                    : step > s
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              <span className={`hidden sm:inline text-xs font-bold ${step === s ? "text-[#024E7E]" : "text-slate-500"}`}>
                {s === 1 && "Service"}
                {s === 2 && "Surface"}
                {s === 3 && "Finitions"}
                {s === 4 && "Contact"}
              </span>
            </div>
          ))}
        </div>

        {!submitted ? (
          <div className="card-light-premium p-8 sm:p-10 rounded-3xl space-y-8 border border-slate-200/80">
            {/* STEP 1: Service */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#024E7E]">1. Choisissez le domaine d&apos;intervention BGM :</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "construction", title: "Construction BTP Clé en main", desc: "Fondations, maçonnerie & finitions" },
                    { id: "conception", title: "Conception Architecturale 2D & 3D", desc: "Plans & modélisation virtuelle" },
                    { id: "etudes", title: "Études & Ingénierie de sol/structure", desc: "Faisabilité & permis de construire" },
                    { id: "promotion", title: "Achat de Villa ou Terrain Titré", desc: "Programmes immobiliers BGM" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setService(item.id)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        service === item.id
                          ? "bg-[#024E7E] border-[#CA9625] text-white shadow-lg"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <p className={`font-bold text-sm ${service === item.id ? "text-white" : "text-[#024E7E]"}`}>{item.title}</p>
                      <p className={`text-xs mt-1 ${service === item.id ? "text-slate-200" : "text-slate-500"}`}>{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Surface */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#024E7E]">2. Quelle est la superficie estimée (m²) ?</h2>
                <div className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#CA9625]"
                  />
                  <div className="text-center space-y-1">
                    <span className="text-4xl font-black font-heading text-[#CA9625]">{surface} m²</span>
                    <p className="text-xs text-slate-500 font-medium">Surface totale couverte à construire ou concevoir</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Finition */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[#024E7E]">3. Niveau de finition & Gamme souhaitée :</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "standing", title: "Standard Standing", desc: "Finitions soignées & durables" },
                    { id: "prestige", title: "Haut de Gamme Prestige", desc: "Matériaux nobles & domotique" },
                    { id: "luxe", title: "Luxe & Sur-Mesure", desc: "Finitions d'exception & piscine" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFinition(item.id)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        finition === item.id
                          ? "bg-[#024E7E] border-[#CA9625] text-white shadow-lg"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <p className={`font-bold text-sm ${finition === item.id ? "text-white" : "text-[#024E7E]"}`}>{item.title}</p>
                      <p className={`text-xs mt-1 ${finition === item.id ? "text-slate-200" : "text-slate-500"}`}>{item.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Estimate preview */}
                <div className="p-6 rounded-2xl bg-[#024E7E] text-white text-center space-y-2 shadow-md">
                  <span className="text-xs text-slate-300 uppercase font-bold tracking-wider">Estimation Indicative Approximative</span>
                  <p className="text-3xl font-black font-heading text-[#CA9625]">{calculateEstimate()} FCFA</p>
                  <p className="text-[11px] text-slate-300">*Ce montant est une estimation préalable indicative sujette à étude sur plans.</p>
                </div>
              </div>
            )}

            {/* STEP 4: Contact Form */}
            {step === 4 && (
              <form method="POST" action="#" onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-[#024E7E]">4. Vos Coordonnées pour recevoir le devis officiel :</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Nom Complet *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Jean Dupont"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Téléphone Direct *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (+241) 077 16 76 07"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Adresse Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: contact@exemple.ga"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Précisions sur votre terrain ou projet</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Précisez la localisation à Libreville, le type de terrain..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#024E7E] shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-sunset-gradient w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#024E7E]" />
                  <span>Envoyer ma Demande de Devis à BGM</span>
                </button>
              </form>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Étape précédente</span>
                </button>
              ) : <div />}

              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="btn-sunset-gradient px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                >
                  <span>Étape suivante</span>
                  <ArrowRight className="w-4 h-4 text-[#024E7E]" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="card-light-premium p-10 rounded-3xl border border-emerald-300 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#024E7E]">Demande d&apos;Estimation Transmise !</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Merci <strong>{name}</strong>. Les ingénieurs de <strong>BGM Begnamam</strong> étudient votre demande et vous recontacteront au <strong>{phone}</strong> sous 24h.
            </p>
            <a
              href="tel:+241077167607"
              className="btn-sunset-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-[#024E7E]" />
              <span>Appelez-nous directement : (+241) 077 16 76 07</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

