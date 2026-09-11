"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot, Phone, MapPin, Calculator, Sparkles, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: string }[];
  time: string;
}

export const BGMChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Bonjour ! Bienvenue chez BGM Ingénierie & Consulting. Je suis BegnaBot, votre assistant virtuel 24/7. Comment puis-je vous guider aujourd'hui ?",
      options: [
        { label: "🏢 Vos 4 Métiers (Études, BTP, etc.)", action: "piliers" },
        { label: "🏡 Villas & Terrains à Vendre", action: "villas" },
        { label: "📐 Simuler un Devis ou Plan 3D", action: "devis" },
        { label: "📍 Coordonnées du Siège à Libreville", action: "contact" },
      ],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      setHasNotification(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  const handleOptionClick = (action: string, label: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: label,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botReplyText = "";
      let botOptions: { label: string; action: string }[] | undefined = undefined;

      switch (action) {
        case "piliers":
          botReplyText =
            "BGM Begnamam intervient dans 4 pôle majeurs au Gabon :\n\n" +
            "1. 📊 ÉTUDES : Faisabilité, ingénierie de structure, dossiers réglementaires.\n" +
            "2. 🎨 CONCEPTION : Plans 2D, modélisation & rendus 3D photoréalistes.\n" +
            "3. 🏗️ CONSTRUCTION BTP : Gros œuvre, second œuvre, ouvrages clés en main.\n" +
            "4. 🏘️ PROMOTION IMMOBILIÈRE : Vente de villas modernes & terrains titrés.";
          botOptions = [
            { label: "📐 Demander une étude de projet", action: "devis" },
            { label: "🏡 Voir les villas en vente", action: "villas" },
          ];
          break;

        case "villas":
          botReplyText =
            "Nous commercialisons des programmes de promotion immobilière de standing à Libreville (Akanda, Sablière, Owendo) :\n\n" +
            "• Villas contemporaines F4/F5 clés en main\n" +
            "• Parcelles de terrains viabilisées avec Titre Foncier\n\n" +
            "Souhaitez-vous échanger sur WhatsApp avec notre service commercial ?";
          botOptions = [
            { label: "📲 Échanger sur WhatsApp Direct", action: "whatsapp" },
            { label: "📍 Voir l'adresse du siège", action: "contact" },
          ];
          break;

        case "devis":
          botReplyText =
            "Vous souhaitez obtenir une estimation pour des travaux de construction BTP ou des plans d'architecture 3D ?\n\n" +
            "Vous pouvez utiliser notre simulateur de devis en ligne ou nous contacter au (+241) 077 16 76 07.";
          botOptions = [
            { label: "📲 Échanger sur WhatsApp", action: "whatsapp" },
            { label: "📞 Appeler le (+241) 077 16 76 07", action: "call" },
          ];
          break;

        case "contact":
          botReplyText =
            "📍 SIÈGE SOCIAL BGM :\n" +
            "Lalala à droite, BP 15 406 — Libreville (Gabon)\n\n" +
            "📞 TÉLÉPHONE DIRECT :\n" +
            "(+241) 077 16 76 07\n\n" +
            "⏰ HORAIRES :\n" +
            "Lundi - Vendredi : 08h00 - 17h30 | Samedi : 09h00 - 13h00";
          botOptions = [
            { label: "📲 Lancer le Chat WhatsApp", action: "whatsapp" },
          ];
          break;

        case "whatsapp":
          window.open("https://wa.me/241077167607", "_blank");
          botReplyText = "Ouverture du chat WhatsApp avec le service commercial BGM ((+241) 077 16 76 07)...";
          break;

        case "call":
          window.location.href = "tel:+241077167607";
          botReplyText = "Appel en cours au secrétariat BGM...";
          break;

        default:
          botReplyText = "Merci pour votre message ! Un conseiller technique BGM Begnamam vous recontactera très rapidement. Vous pouvez aussi nous joindre au (+241) 077 16 76 07.";
          botOptions = [
            { label: "📲 WhatsApp Direct", action: "whatsapp" },
            { label: "🏠 Retour au Menu", action: "piliers" },
          ];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReplyText,
        options: botOptions,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    handleOptionClick("custom", userText);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-3 bg-gradient-to-r from-[#024E7E] to-[#024E7E] border-2 border-[#CA9625] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          aria-label="Assistant BGM Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#CA9625]" />
            {hasNotification && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
            )}
            {hasNotification && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#024E7E]" />
            )}
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold text-white leading-none">BegnaBot</span>
            <span className="text-[10px] text-[#CA9625] font-semibold mt-0.5">Assistant BGM 24/7</span>
          </div>
        </button>
      </div>

      {/* Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-[#08101D] border-2 border-[#CA9625]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#024E7E] to-[#024E7E] p-4 border-b border-[#CA9625]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#08101D] border border-[#CA9625] flex items-center justify-center text-[#CA9625]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>BegnaBot</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">En Ligne</span>
                </h3>
                <p className="text-[10px] text-slate-300">BGM Begnamam — Assistant 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-start gap-2 max-w-[85%]">
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[#024E7E] text-[#CA9625] flex items-center justify-center shrink-0 mt-1 text-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-[#CA9625] text-[#024E7E] font-semibold rounded-tr-none"
                        : "bg-[#0F1A2A] text-slate-100 border border-slate-700/60 rounded-tl-none shadow-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>

                {msg.options && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="px-3 py-1.5 rounded-lg bg-[#024E7E]/40 border border-[#CA9625]/40 text-[#E8B94B] text-[11px] font-medium hover:bg-[#CA9625] hover:text-[#024E7E] transition-all text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-[#024E7E] border-t border-[#CA9625]/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question à BegnaBot..."
              className="flex-1 bg-[#08101D] border border-slate-700 text-white placeholder-slate-400 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#CA9625]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl gold-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 text-[#024E7E]" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
