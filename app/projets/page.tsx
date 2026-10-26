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
  Play,
  Video,
  Calendar,
  Users,
  Film,
} from "lucide-react";

const isVideoUrl = (url?: string) => {
  if (!url) return false;
  const clean = url.split("?")[0].toLowerCase();
  return clean.endsWith(".mp4") || clean.endsWith(".webm") || clean.endsWith(".mov");
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      if (activeProject?.gallery && activeProject.gallery.length > 1) {
        setSelectedPhotoIndex((prev) => (prev + 1) % activeProject.gallery.length);
      } else {
        setSelectedProjectIndex((prev) =>
          prev !== null ? (prev + 1) % filteredProjects.length : 0
        );
        setSelectedPhotoIndex(0);
      }
    }
    if (isRightSwipe) {
      if (activeProject?.gallery && activeProject.gallery.length > 1) {
        setSelectedPhotoIndex(
          (prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length
        );
      } else {
        setSelectedProjectIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredProjects.length) % filteredProjects.length
            : 0
        );
        setSelectedPhotoIndex(0);
      }
    }
  };

  const categories = [
    { id: "all", name: "Tous les Projets" },
    { id: "visites", name: "📍 Visites de Terrains (Okolassi & Akanda)" },
    { id: "videos", name: "🎥 Vidéos In Situ" },
    { id: "chantiers", name: "📁 Dossiers Chantiers BTP" },
    { id: "materre", name: "Programme « Ma Terre, Ma Maison »" },
    { id: "villas", name: "Villas & Duplex" },
    { id: "fondation", name: "Fondations" },
    { id: "maconnerie", name: "Maçonnerie" },
    { id: "terrassement", name: "Terrassement" },
    { id: "vrd", name: "VRD & Réseaux" },
    { id: "materiel", name: "Moyens Matériels" },
    { id: "3d", name: "Conception 3D" },
    { id: "livres", name: "Réalisations Livrées" },
  ];

  const projects = [
    {
      id: "visite-officielle-sites",
      title: "Visite Officielle des Sites de Construction — Okolassi (17 Oct.) & Akanda (18 Oct.)",
      category: "visites",
      parentCategory: "visites",
      categoryName: "Visites Officielles de Terrains",
      location: "Okolassi & Akanda — Grand Libreville, Gabon",
      image: "/visites/images/photo-groupe-visite-okolassi-akanda.jpg",
      isFolder: true,
      gallery: [
        "/visites/images/photo-groupe-visite-okolassi-akanda.jpg",
        "/visites/images/visite-presentation-dg-bgm.jpg",
        "/visites/images/visite-terrain-etude-plans-tablette.jpg",
        "/visites/images/visite-terrain-akanda-inspection.jpg",
        "/visites/images/visite-satisfaction-acquereurs.jpg",
        "/visites/videos/video-visite-site-1.mp4",
        "/visites/videos/video-visite-site-8.mp4",
        "/visites/videos/video-visite-site-4.mp4",
        "/visites/videos/video-visite-site-5.mp4",
        "/visites/videos/video-visite-site-9.mp4",
        "/visites/videos/video-visite-site-3.mp4",
        "/visites/videos/video-visite-site-6.mp4",
        "/visites/videos/video-visite-site-7.mp4",
        "/visites/videos/video-visite-site-2.mp4",
      ],
      specs: "17 & 18 Octobre 2026 | DG de BGM & Représentants de Sites | Futurs Acquéreurs | 5 Photos HD & 9 Vidéos In Situ",
      status: "Sites Validés • Démarrage Chantiers",
      description: "Visites officielles de terrain organisées par BGM Ingénierie & Construction sur les deux sites retenus pour l'édification des futurs logements : le site d'Okolassi le samedi 17 octobre et le site d'Akanda le dimanche 18 octobre. La délégation était composée du Directeur Général de BGM, d'un représentant officiel de chacun des sites visités et des futurs acquéreurs des futurs logements. Au programme : inspection approfondie des emprises foncières, vérification des voies d'accès aménagées et présentation sur tablette tactile des plans de masse et des futures villas.",
      architectNote: "Assise foncière certifiée, excellente portance des sols et adhésion totale des futurs propriétaires ayant pu visualiser concrètement l'emplacement de leurs logements.",
    },
    {
      id: "visite-okolassi-17-octobre",
      title: "Site de Construction d'Okolassi — Visite Officielle du Samedi 17 Octobre",
      category: "visites",
      parentCategory: "visites",
      categoryName: "Site d'Okolassi • Futurs Logements BGM",
      location: "Okolassi — Grand Libreville, Gabon",
      image: "/visites/images/visite-presentation-dg-bgm.jpg",
      isFolder: true,
      gallery: [
        "/visites/images/visite-presentation-dg-bgm.jpg",
        "/visites/images/photo-groupe-visite-okolassi-akanda.jpg",
        "/visites/images/visite-satisfaction-acquereurs.jpg",
        "/visites/videos/video-visite-site-1.mp4",
        "/visites/videos/video-visite-site-2.mp4",
        "/visites/videos/video-visite-site-3.mp4",
        "/visites/videos/video-visite-site-4.mp4",
        "/visites/videos/video-visite-site-9.mp4",
      ],
      specs: "Samedi 17 Octobre 2026 | DG BGM, Représentant Okolassi & Acquéreurs | Plateforme & Bornage validés | 5 Vidéos HD",
      status: "Site Validé • Chantiers à Venir",
      description: "Reconnaissance in situ du site de construction d'Okolassi le samedi 17 octobre 2026. Le Directeur Général de BGM et le représentant officiel du site d'Okolassi ont guidé les futurs acquéreurs sur le terrain. Présentation des emprises de construction, du découpage des parcelles résidentielles, des raccordements prévus et des garanties juridiques et techniques assurées par BGM.",
      architectNote: "Topographie plane idéale pour les fondations, voies d'accès carrossables prêtes pour l'acheminement des matériaux et le déploiement des équipes BTP.",
    },
    {
      id: "visite-akanda-18-octobre",
      title: "Site de Construction d'Akanda — Visite Officielle du Dimanche 18 Octobre",
      category: "visites",
      parentCategory: "visites",
      categoryName: "Site d'Akanda • Futurs Logements BGM",
      location: "Akanda — Grand Libreville, Gabon",
      image: "/visites/images/visite-terrain-akanda-inspection.jpg",
      isFolder: true,
      gallery: [
        "/visites/images/visite-terrain-akanda-inspection.jpg",
        "/visites/images/visite-terrain-etude-plans-tablette.jpg",
        "/visites/images/photo-groupe-visite-okolassi-akanda.jpg",
        "/visites/images/visite-satisfaction-acquereurs.jpg",
        "/visites/videos/video-visite-site-5.mp4",
        "/visites/videos/video-visite-site-6.mp4",
        "/visites/videos/video-visite-site-7.mp4",
        "/visites/videos/video-visite-site-8.mp4",
      ],
      specs: "Dimanche 18 Octobre 2026 | DG BGM, Représentant Akanda & Acquéreurs | Voirie aménagée | Étude sur tablette | 5 Vidéos HD",
      status: "Site Validé • Chantiers à Venir",
      description: "Visite de terrain sur le site d'Akanda effectuée le dimanche 18 octobre 2026. Aux côtés du Directeur Général de BGM et du représentant officiel du site d'Akanda, les futurs acquéreurs ont pu constater l'état d'avancement des voiries aménagées avec bordures et assainissement, visualiser les plans 3D et le plan masse sur tablette tactile directement sur site, et choisir l'orientation de leurs futures maisons.",
      architectNote: "Zone résidentielle d'Akanda très recherchée, viabilisation avancée avec voirie bitumée garantissant une valorisation patrimoniale immédiate.",
    },
    {
      id: "videotheque-visites-terrains",
      title: "Vidéothèque Terrains : Les 9 Vidéos In Situ des Visites d'Okolassi & Akanda",
      category: "videos",
      parentCategory: "visites",
      categoryName: "Reportages Vidéos In Situ",
      location: "Okolassi & Akanda — Grand Libreville, Gabon",
      image: "/visites/images/visite-terrain-etude-plans-tablette.jpg",
      isFolder: true,
      gallery: [
        "/visites/videos/video-visite-site-1.mp4",
        "/visites/videos/video-visite-site-8.mp4",
        "/visites/videos/video-visite-site-4.mp4",
        "/visites/videos/video-visite-site-5.mp4",
        "/visites/videos/video-visite-site-9.mp4",
        "/visites/videos/video-visite-site-3.mp4",
        "/visites/videos/video-visite-site-6.mp4",
        "/visites/videos/video-visite-site-7.mp4",
        "/visites/videos/video-visite-site-2.mp4",
      ],
      specs: "9 Vidéos In Situ Complètes | Explications DG BGM | Échanges Acquéreurs | Visite Complète des 2 Sites",
      status: "9 Vidéos HD Disponibles en Lecture",
      description: "Retrouvez en vidéo l'intégralité des moments forts des visites des sites d'Okolassi (17 octobre) et d'Akanda (18 octobre) : allocution et présentations techniques du Directeur Général de BGM, exploration des parcelles avec les représentants locaux, réactions et enthousiasme des futurs acquéreurs de logements.",
      architectNote: "Une démarche de transparence absolue de BGM Ingénierie & Construction, illustrée par des images et vidéos réelles prises sur le vif.",
    },
    {
      id: "folder-fondation",
      title: "Dossier Chantier : Travaux de Fondation & Béton Armé",
      category: "fondation",
      parentCategory: "chantiers",
      categoryName: "Fondations & Gros Œuvre BTP",
      location: "Grand Libreville — Gabon",
      image: "/images/Fondation/FONDATION1.jpg",
      isFolder: true,
      gallery: [
        "/images/Fondation/FONDATION1.jpg",
        "/images/Fondation/FONDATION2.jpg",
        "/images/Fondation/Jr5N0XhU8EWCcIgkCEi4Sd4i5V5JntNMHQ-5gsL77qMg-RMGYoHaL6Vv2wetODVAqeK98QyFSek907bo4qNmgonVyaqpxLuxtCdMS5MYe5HjiaRhi6Yk8U9z18kdUqY6H7jRz107s3N17xNzdTRzHfFOGb8Maw69row9ftJh9SPkuivNRf4uycgRVh7F0ef_.jpg",
        "/images/Fondation/NlIh24UUulJkHnPqGGvTg4WARilfdgNPDA2Ge1bZE-mqKBbvjeAfMyIXpOxsGjt-uc8oISUZ9dxOf0VsBlEhPBs9F-IZgyIIJwpvg4ZWPmf2pA4sC3kN3bkdyxXQ4WMdyKJs57dWdwAWaoviEObX-iwPpUejRGlHe6Sr--tOq93Z7SHuvVR8Wd8EBtaIjPot.jpg",
        "/images/Fondation/O2ODjVoSObZjfO4cvyXPPfAI2b2OZ7oJBeL2cF11ecrpMQTL0FAgIQb4u6Wd-QWhjC1SqlAPhlGvOySZAVt_6I5Q3BUf7-fFpJ85IH5K9smIUuiv9Xu8NmZvUYC6lU9aw22zgsEsANXRZ13t_eE9yso0_t14d2KARrjM3stzN9ctkEOnMGFN3VEaAwFnCJ1S.jpg",
        "/images/Fondation/xKRua7VQ1NLs24UVQxAMKVLz9EQEN2WZH6CnotW5NuAjbHZQRn71_mPjLzDAnksVzKEzeb9Qkr1uiwmAKH88cqaLU-jZ0a8GBZm5bA5KqD_BLk3FyhLteswcYCyX04oqUfNLFkhE1h8IwVkMXFJIxSoak9LR8mN06C7rnOrpVbJO6tkxjjb1pQdNQkd-wFIQ.jpg",
      ],
      specs: "6 Photos de Chantier HD | Fouilles en rigoles | Ferraillage HA | Béton dosé 350 kg/m³",
      status: "Dossier Chantier Réalisé",
      description: "Dossier photographique complet des étapes de fondations : terrassement préparatoire, pose d'armatures métalliques haute adhérence, coulage de semelles et longrines selon les normes géotechniques.",
      architectNote: "Contrôle continu de l'ancrage et de la résistance mécanique pour garantir la pérennité totale des édifices.",
    },
    {
      id: "folder-maconnerie",
      title: "Dossier Chantier : Maçonnerie Générale & Élévation",
      category: "maconnerie",
      parentCategory: "chantiers",
      categoryName: "Maçonnerie & Gros Œuvre",
      location: "Libreville & Akanda — Gabon",
      image: "/images/Maçonnerie/7f4RcAixvGrIFg3jjNY5sGf7Ahj7xzBzHCG3Z-vFCYE1T2aFzNiBmAg-Oid_x_NS0Ar0GNIJE99ZlkjRjadP3ksi4x4BUp_zkoeFOIrBx9GZtpQqPbYy--TzYj115HJrMQ_rdv8k8s5Gmq5H7uEBTt5sa8C0yTSG5r5Rw2oVFVMi5jCH-g8Wma-yT7eN56Em.jpg",
      isFolder: true,
      gallery: [
        "/images/Maçonnerie/7f4RcAixvGrIFg3jjNY5sGf7Ahj7xzBzHCG3Z-vFCYE1T2aFzNiBmAg-Oid_x_NS0Ar0GNIJE99ZlkjRjadP3ksi4x4BUp_zkoeFOIrBx9GZtpQqPbYy--TzYj115HJrMQ_rdv8k8s5Gmq5H7uEBTt5sa8C0yTSG5r5Rw2oVFVMi5jCH-g8Wma-yT7eN56Em.jpg",
        "/images/Maçonnerie/M5IYtmt-7QYdrx5b7TSrt1mIu8-4D0gzL_sykoyrpy9PBeDzJRGwF-WyECIk3PaoEm7dmrFECfN3J4I2kLAG3aTutX_nLxS448PA9LoT-wL9amIFb64K8tjbwTUXgpATvbs9J0pgCC-peO2LcCt6qQMNL5MjWVGa5tF4RD1ikY3lRbzcsepR4OKutwVOoTaq.jpg",
        "/images/Maçonnerie/Ok9CAN5KYjVgLFa1-LddoHq25Hp0TTw98k4AQW4fVlan6ExRzajidI9_gCx86exUQG9W7nUyqfFqZXfRiBiQMycERMRDSB630W6UpTlLpEjwRAtAx7dluLmTPk90XmF_T2u9MBogzUHZUSpdzLQh2DEtM2YatAbtKxxXksrNw7UDlbqjfhMHy_xmgpGI_F0e.jpg",
        "/images/Maçonnerie/R1y0Q_c99OV0Bd-G5B2_9VkEJGmMVsHq3Z9p8QnYN1upQM881kjIL8Ajdp4dSTeKeHI4KmXj6nW4KN4w_8oqK3JKGfjDNoFr4WA3wBoLzUwFM8bR0g6hZFD1UIskFYrF37VbSk-liDFhOWblZnEIKv-nJOgO8-K4p8s1HMowd9CpmsVecUv1b3QBC1htuIjA.jpg",
        "/images/Maçonnerie/fajKwl4AbuQTDWDDJLmfkjYHESbMP2Y6FbsBJ3GoaHTS7caiF1KjSgmfpOUjL-30TzQHtTO70BCF22saTzgRiDtD7y4QBmrPNxfnRNx3o-MKu_y8e8Zt3h5qGVakBrZ4f7NZ1BEsQN_fRQr33RzK8LSlFJvpb2X5BZhUq8d8t15M6SFw-V1xLiZxnB46ov8r.jpg",
        "/images/Maçonnerie/ooy3aj2gyQTrt5sYbOZErq0lpriWQnxxRTKOV8rCJhT2JBRu2kbrpEe623ADExgpPlARXVg5uOfh7-mrDQGGdNdleT0KeTDVV7-Pklbp-9KmNdsWAv9U1SX4A9J9k_2Umgl86R3SDHrUVUDYeGqgjcNRTuQWhT_uiSXIC3LKC8GsYZr__Lp2ZSwx_1bpE9vZ.jpg",
      ],
      specs: "6 Photos de Chantier HD | Agglos pleins/creux | Linteaux BA | Chaînages parasismiques",
      status: "Dossier Chantier Réalisé",
      description: "Album de suivi de la maçonnerie générale : élévation de murs porteurs et cloisons, coulage de linteaux en béton armé, poteaux raidisseurs et finitions soignées.",
      architectNote: "Précision d'aplomb et de niveau au millimètre par nos équipes de compagnons maçons.",
    },
    {
      id: "folder-terrassement",
      title: "Dossier Chantier : Terrassement, Décapage & Nivellement",
      category: "terrassement",
      parentCategory: "chantiers",
      categoryName: "Terrassement & Topographie",
      location: "Plateformes BGM — Gabon",
      image: "/images/terrassement/Lnp3R1KxNQQNNqM9-krZXUMs92DF9Zls_RN-g_SfL2Zzs7h68aV1MiNpFCUIzw33rFnJxGcPQdrQYgUzBXT38o7il5R9ZSQ3Eu10vVKDzVjIFNJpcw8GfaYBJ0s_XJU0ESzL38_KD9Mjc7_R6Sl8jUrHzZG7xz3PXST3DzgZ1X_YQoYnhPXlFnnHblapOzc8.jpg",
      isFolder: true,
      gallery: [
        "/images/terrassement/Lnp3R1KxNQQNNqM9-krZXUMs92DF9Zls_RN-g_SfL2Zzs7h68aV1MiNpFCUIzw33rFnJxGcPQdrQYgUzBXT38o7il5R9ZSQ3Eu10vVKDzVjIFNJpcw8GfaYBJ0s_XJU0ESzL38_KD9Mjc7_R6Sl8jUrHzZG7xz3PXST3DzgZ1X_YQoYnhPXlFnnHblapOzc8.jpg",
        "/images/terrassement/WMT7Zd74fBFtIW5QR5D7L2Jtg1FwvTj-Py_tt2Bq6-bPASXqjLvgEp4YAefq6e573j5_dNYf5Zy4XEBzMnObXndigc0cuiqPFcp9dqPtwk2F-3UUNMXZPgJdw1fz2j8iNEwSfS4KxiU5-xPQ89KXSSitJyb5bzMpc4GJBqEhBXADUaAifnjsB0vOaD1FM-Fl.jpg",
        "/images/terrassement/czaItWOiiKFO_6_6Om54ffJWOvQWbXJMZdU7ZJ-zakpjov9t58PVnyI1TlnANG7EYgjEG-tk9PtS78bHU_HdoQmAspMl8VZL7pph6O_mzdRZj8msfm-AthOZNVB8Baxig3rXmzFFrUAbwyN3sV7Q_6RRMaX5CvfqiAo9ADerBWUP-PwfhoBtB1P4hhQf9Nk2.jpg",
        "/images/terrassement/h1NexMinAhQ0CmhadIx8QKXoGAnQEQJQ0Bz3jvCFZxCBOF9Qj1zV0Oo1O3-nqb3JeF5FYqUl8ZSuGk0uegc1C3KP7zVwEnlbI44H9dKpTrBvHp8mXHE01nHljvTpZbJLHdX9--xx1sDbnErD1Ryq3_KD3L82V22G4cgmEYEfk4-whyH4FFnZB6OHIwMgXWwz.jpg",
        "/images/terrassement/rxFw3hAukG_xBq5sryBwa6J6CjODA9bzaH4lJAoZfXHgfumvRoVHcSzq_oWXMOQsfU0YdT7zLVbOAcCODFpZFrk_FtDHFEhiSDKq_vpRLFwDlXBeQS3-Xv0Y_DgI0n_3WZh7SUhyDc3-KdnokqNkZULORUM45IqfoYgCQH2o8J6f-bPB1-lDL26krQQO3d_J.jpg",
        "/images/terrassement/sJU9CT4Cloeka1QcH5RDQ-zumQl16_zXjwphn7QgC2k7sJUBuSuRYPqvdr2OT8tfNHJ73d5XqXlI86sIIzvQ13SEhEYC5grIXGPlCH0zgJVGvNUPRRJdN7OloauBSzCJtoEoExcrJcwK3fzpB3RjlH6Bt54Us-oBeksfrVXZ0IFlMlJiNWQOEblxkv-IM7ND.jpg",
      ],
      specs: "6 Photos de Chantier HD | Décapage terre végétale | Compactage couches | Nivellement laser",
      status: "Dossier Chantier Réalisé",
      description: "Travaux de décapage, déblai/remblai avec compactage mécanique et nivellement altimétrique pour la création de plateformes de construction solides et stables.",
      architectNote: "Une assise stable et compactée est la garantie fondamentale contre les tassements différentiels.",
    },
    {
      id: "folder-vrd",
      title: "Dossier Chantier : VRD — Voirie & Réseaux Divers",
      category: "vrd",
      parentCategory: "chantiers",
      categoryName: "VRD & Réseaux Divers",
      location: "Libreville & Banlieues",
      image: "/images/VRD — Voirie et Réseaux Divers/RAqtZ3cz6FIvZcx-qrAkwf-8-tMMv5HswaiJzAzzBleCoFNLEcHRxEpOKOuLLye8EfbZtsyn30NfOs_0TJjGfcuKYdeEAhYjVAFfw7sjy_1VB7shXW9Uwiq94Q3OSEON_-kG0x1OXTt59PfJXDqLlmyxs1qXLTsbNmSfQyhiJb0nC0bAFAuD2S9ef.jpg",
      isFolder: true,
      gallery: [
        "/images/VRD — Voirie et Réseaux Divers/RAqtZ3cz6FIvZcx-qrAkwf-8-tMMv5HswaiJzAzzBleCoFNLEcHRxEpOKOuLLye8EfbZtsyn30NfOs_0TJjGfcuKYdeEAhYjVAFfw7sjy_1VB7shXW9Uwiq94Q3OSEON_-kG0x1OXTt59PfJXDqLlmyxs1qXLTsbNmSfQyhiJb0nC0bAFAuD2S9ef.jpg",
        "/images/VRD — Voirie et Réseaux Divers/XpJcsj4MaIR_29QH2dRXkTnm7SjV9mNKmTPd51WV4IykmhR46o3rYEi0BynOdfVAbNreYKDU1i8RtU2NUcx3Pqg8XrEkNyQV3on1MM29rydUrk8m5wwGWgRa-rgL3UsKIVds_Lyag8rGmB8LaF63r3B8O96AOmFsaw_NBfYYBhUl5tn23AD-5oNtc.jpg",
        "/images/VRD — Voirie et Réseaux Divers/fjOBftAri2SgROgvdY6gdyXkObzvppw5vPaHBilFkANV0B_YSsorlB3mNzYC0RegM1Wz8M94991qRCZj9PW0LD-x4YipKBlWhM6c_yYPVMIOriljpZGpdq9RNKgJ8DVaxJ5Yy9VewUIcgXROv9jR-uZ9UZtsQhaf9-zFrt_TdLOG4bBdbtiSgyvux.jpg",
        "/images/VRD — Voirie et Réseaux Divers/in7uCA41366_D3DXExRylT8ZJviRF0nZmBNqeWu2J3mmn3YMM5zySt7tzFdl78Lv4RhfnjlVxYmp0_VACAttio4zmppJFPQFxHp9jhYGxrzKIbFG28IdZCp6R0BBUPyY-JAUvT1FQWgaOnOki_uVEpCXv5YpaBFGNR2Qk8NkeLSGjukxWT-Jo0q_.jpg",
        "/images/VRD — Voirie et Réseaux Divers/kwm6IPjoq2wklwveG5EX7KuWR0EUH9oUASGCdFqPgEDps1xXWWo9bu-sWdlnaZFl0pQEuCMmbeanjJryBQO-AcEglQKOyDt_vqXpvL8OXSqe97R42bNvwYm_35Ac_OjkTeWnb5d2IOMLKyrh0BqFqcz52A3Zz4aHz5zaE0hloO_Lb_oXvCev5TJNY.jpg",
        "/images/VRD — Voirie et Réseaux Divers/uoUG0Aif3UYxlOv6VbhG9n1L6xM9JfCtPNEvovBMwwqo-TJ6064oAzJQafox4uSfb7nLqa8DbfIvc3p6jPl_KIshMjQMrNAU1nnXcQ08eU9BQgMJhus6FDk3auXoLM5xw1n-QlReG6GZIwZhEDVrFGC5nGYMf5-bivwHVJtRXUGoFEZNGbiQ3N-NH.jpg",
      ],
      specs: "6 Photos de Chantier HD | Caniveaux & Buses béton | Regards de visite | Adduction d'eau & Réseaux",
      status: "Dossier Chantier Réalisé",
      description: "Mise en œuvre des réseaux d'assainissement pluvial et eaux usées, caniveaux maçonnés, pose de fourreaux et aménagement des voies d'accès carrossables.",
      architectNote: "Dimensionnement hydraulique strict pour éviter tout phénomène d'inondation en saison des pluies.",
    },
    {
      id: "folder-materiel",
      title: "Dossier Chantier : Moyens Matériels & Parc d'Équipements",
      category: "materiel",
      parentCategory: "chantiers",
      categoryName: "Logistique & Matériels BTP",
      location: "Parc Technique BGM — Libreville",
      image: "/images/Moyens matériels/BNBOG21nOz2vDeH9cIFI7igpaHjTVN2ueHjd-7jd0IfTexKO-aICgLazEnWFX9ZMFeMWio8HrBcvfu7vZuMs87YgeVVfd1wr6UbTjryZAgsK240302oMVH0eXJtDQCtOenlBVESvHKL8VHeg5OJ4oFQh6yvnEwBQXJ7j5xdWZBrO7xMnpOrYb4x2IuGXHSFW.jpg",
      isFolder: true,
      gallery: [
        "/images/Moyens matériels/BNBOG21nOz2vDeH9cIFI7igpaHjTVN2ueHjd-7jd0IfTexKO-aICgLazEnWFX9ZMFeMWio8HrBcvfu7vZuMs87YgeVVfd1wr6UbTjryZAgsK240302oMVH0eXJtDQCtOenlBVESvHKL8VHeg5OJ4oFQh6yvnEwBQXJ7j5xdWZBrO7xMnpOrYb4x2IuGXHSFW.jpg",
        "/images/Moyens matériels/PHXg5PuxSHvatOcUMUwegDkmG22tf_dUWHn4ySpzNScQ3vis6I4MA9or2spmh-yEXXS03XakWVbBI13EA8Qz-GzmPU1NBfEctP0lNDCw7T1ETYSoH459APnpwHgCMhyrbyVuym9SULNdNTkpusRmq0hkmIE58nGa0_a_fdk9xFRQRLKzeXceN55c8c7PYoF_.jpg",
        "/images/Moyens matériels/t3n7_GOwMN9g8YRzt5OyOXr8ZiTaom8MvUKsh_jlzSG_F3eA2yS01-5zxHdKjZnrAJVOdiHYTgJGqikqtYT1W-nmPoxWsUTrHdEcJk6qvRk7NjlNZZlXp8od2h33wVOqT1PlqClmL_ECsoyE9G2bnvzFOCu3TTxdwbTKAsJ2aHf3fki-kBtbuSItwu6o9nva.jpg",
        "/images/Moyens matériels/uNe6V5NwS31qsfX_cZrd4db6FEl_0B41ftfF_ykC0hLuMCb5d6of8owpN5H_NINpo4VXPmdOzaL-g-zXq6CFARPnv0PxjaqvbszLi7lggrXMrbyHwEWN8lzGZnZLmD1y4iNRZdqkJcdEg6TtIcZ9XpgFHUs0WGZfpYgrtCc6s6GTJc4McVm0U30TL-LI_2NA.jpg",
        "/images/Moyens matériels/vstok0rzbbsX8iHF4Hu7l8T8B5wLN4Xst8Z8CpGsujDCnV7qGvNw10JTyh-wQSNlthPAT7MWJpkJv1NOENpUUVSYGZHJCys3eKWsoj6yU_HJEyH04VKH1BePPjkEMRGiQHFstPHpRNGXXDKWawXZ7_GyzIeEMSo6xwb6OK9HPxn7UOgPfhW1bn7Tl.jpg",
        "/images/Moyens matériels/ztD-HDLkrk9MBZqEeBGQLnMl5uq_2MXYYxl5JEwdrUVC727kWF-31rm1gX-nWoHg8FzfebnKQkxHYiE5NSWxB3AbWhuXXpRbGIeCOeaIOodW3pvYXwuYXVFMefaRR1I0EQt7uXYjumnv2387Izn6O4LuPy83HlfHcu6YT1CXKfWhPgYQR-s1-gNC7nxbCvRC.jpg",
      ],
      specs: "6 Photos de Chantier HD | Bétonnières & Engins | Coffrages métalliques | Équipements de Sécurité",
      status: "Parc Technique Opérationnel",
      description: "Présentation des moyens matériels et équipements techniques BGM : bétonnières, outillage lourd de précision, véhicules de chantier et équipements de sécurité.",
      architectNote: "Un parc matériel moderne garantissant la rapidité d'exécution et l'autonomie totale sur le terrain.",
    },
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
      : activeCategory === "visites"
      ? projects.filter(
          (p) => p.category === "visites" || p.parentCategory === "visites"
        )
      : activeCategory === "videos"
      ? projects.filter(
          (p) =>
            p.category === "videos" ||
            (p.gallery && p.gallery.some((m) => isVideoUrl(m)))
        )
      : activeCategory === "chantiers"
      ? projects.filter(
          (p) =>
            (p.parentCategory === "chantiers" ||
              p.category === "chantiers" ||
              p.isFolder) &&
            p.category !== "visites" &&
            p.category !== "videos"
        )
      : projects.filter((p) => p.category === activeCategory);

  const activeProject =
    selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  const currentActiveImage =
    activeProject && activeProject.gallery && activeProject.gallery[selectedPhotoIndex]
      ? activeProject.gallery[selectedPhotoIndex]
      : activeProject?.image || "";

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") {
        if (activeProject?.gallery && activeProject.gallery.length > 1) {
          setSelectedPhotoIndex((prev) => (prev + 1) % activeProject.gallery.length);
        } else {
          setSelectedProjectIndex((prev) =>
            prev !== null ? (prev + 1) % filteredProjects.length : 0
          );
          setSelectedPhotoIndex(0);
        }
      }
      if (e.key === "ArrowLeft") {
        if (activeProject?.gallery && activeProject.gallery.length > 1) {
          setSelectedPhotoIndex((prev) =>
            (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length
          );
        } else {
          setSelectedProjectIndex((prev) =>
            prev !== null
              ? (prev - 1 + filteredProjects.length) % filteredProjects.length
              : 0
          );
          setSelectedPhotoIndex(0);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex, selectedPhotoIndex, activeProject, filteredProjects]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 text-[#024E7E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CA9625]/15 border border-[#CA9625]/30 text-[#024E7E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#CA9625]" />
            <span>Catalogue Officiel BGM Begnamam</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-[#024E7E] tracking-tight">
            Nos Projets & Dossiers Chantiers
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Découvrez nos villas d&apos;exception, nos modélisations 3D ainsi que nos <strong className="text-[#024E7E]">galeries complètes de chantiers</strong> (Fondation, Maçonnerie, Moyens matériels, Terrassement et VRD). Cliquez sur n&apos;importe quelle réalisation pour l&apos;explorer en Haute Définition.
          </p>
        </div>

        {/* Official Site Visits Event Announcement Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#024E7E] via-[#033758] to-[#041E33] text-white p-6 sm:p-8 lg:p-10 shadow-2xl border border-[#CA9625]/30 max-w-6xl mx-auto">
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA9625]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#024E7E]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CA9625]/20 border border-[#CA9625]/40 text-[#E8B94B] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#CA9625] animate-pulse"></span>
                <span>Visites Officielles de Terrain • BGM Ingénierie & Construction</span>
              </div>
              <span className="text-xs text-slate-300 font-mono font-medium">
                17 & 18 Octobre 2026 • Grand Libreville
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-white">
                Visites des Futurs Sites de Construction : <span className="text-[#E8B94B]">Okolassi</span> & <span className="text-[#E8B94B]">Akanda</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium max-w-4xl">
                BGM a franchi une étape décisive pour l&apos;édification des futurs logements. La visite du site d&apos;<strong className="text-white">Okolassi</strong> s&apos;est tenue le <strong className="text-[#E8B94B]">samedi 17 octobre</strong>, suivie de celle d&apos;<strong className="text-white">Akanda</strong> le <strong className="text-[#E8B94B]">dimanche 18 octobre</strong>. La délégation était composée du <strong className="text-white">Directeur Général de BGM</strong>, d&apos;un représentant de chacun des sites visités et des <strong className="text-white">futurs acquéreurs des futurs logements</strong>. Au programme : inspection des emprises, échange direct avec les acquéreurs et présentation des plans 3D in situ.
              </p>
            </div>

            {/* Key delegation & media highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[#E8B94B] text-xs font-bold uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Dates Clés</span>
                </div>
                <p className="text-xs font-semibold text-white">17 & 18 Octobre 2026</p>
                <p className="text-[11px] text-slate-300">Okolassi & Akanda</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[#E8B94B] text-xs font-bold uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>Délégation</span>
                </div>
                <p className="text-xs font-semibold text-white">DG BGM & Représentants</p>
                <p className="text-[11px] text-slate-300">Avec futurs acquéreurs</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[#E8B94B] text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>2 Sites Validés</span>
                </div>
                <p className="text-xs font-semibold text-white">Okolassi & Akanda</p>
                <p className="text-[11px] text-slate-300">Voiries & Emprises prêtes</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[#E8B94B] text-xs font-bold uppercase tracking-wider mb-1">
                  <Film className="w-4 h-4 shrink-0" />
                  <span>Médias In Situ</span>
                </div>
                <p className="text-xs font-semibold text-white">5 Photos HD & 9 Vidéos</p>
                <p className="text-[11px] text-slate-300">Reportages complets</p>
              </div>
            </div>

            {/* Quick Filter CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveCategory("visites");
                  setSelectedProjectIndex(null);
                  setSelectedPhotoIndex(0);
                }}
                className="btn-sunset-gradient px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <MapPin className="w-4 h-4 text-[#024E7E]" />
                <span>Voir les Dossiers des 2 Visites (Okolassi & Akanda)</span>
              </button>

              <button
                onClick={() => {
                  setActiveCategory("videos");
                  setSelectedProjectIndex(null);
                  setSelectedPhotoIndex(0);
                }}
                className="bg-white/15 hover:bg-white/25 text-white px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 border border-white/20 transition-all hover:scale-105"
              >
                <Play className="w-4 h-4 text-[#E8B94B] fill-[#E8B94B]" />
                <span>Consulter la Vidéothèque des 9 Vidéos de Terrain</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Pill Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedProjectIndex(null);
                setSelectedPhotoIndex(0);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 shadow-sm ${
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
                onClick={() => {
                  setSelectedProjectIndex(0);
                  setSelectedPhotoIndex(0);
                }}
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
                  <span>{filteredProjects[0].status}</span>
                </div>

                {filteredProjects[0].gallery && (
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 flex items-center gap-1.5">
                    <span>📁 Galerie : {filteredProjects[0].gallery.length} médias (photos & vidéos)</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-[#024E7E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="btn-sunset-gradient px-6 py-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#024E7E]" />
                    <span>Explorer la Galerie en Plein Écran HD</span>
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
                    onClick={() => {
                      setSelectedProjectIndex(0);
                      setSelectedPhotoIndex(0);
                    }}
                    className="text-2xl lg:text-3xl font-black font-heading text-[#024E7E] hover:text-[#024E7E] transition-colors cursor-pointer leading-tight"
                  >
                    {filteredProjects[0].title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {filteredProjects[0].description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                    <p className="text-[#CA9625] font-bold text-[11px] uppercase tracking-wider mb-1">Détails & Spécifications :</p>
                    <p>{filteredProjects[0].specs}</p>
                  </div>

                  {/* Preview Thumbnails if folder */}
                  {filteredProjects[0].gallery && (
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Aperçu du dossier ({filteredProjects[0].gallery.length} médias) :</p>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {filteredProjects[0].gallery.map((imgUrl, thumbIdx) => {
                          const isVid = isVideoUrl(imgUrl);
                          return (
                            <button
                              key={thumbIdx}
                              onClick={() => {
                                setSelectedProjectIndex(0);
                                setSelectedPhotoIndex(thumbIdx);
                              }}
                              className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 border-slate-200 hover:border-[#CA9625] transition-all hover:scale-105 bg-slate-900"
                              title={isVid ? `Vidéo ${thumbIdx + 1}` : `Photo ${thumbIdx + 1}`}
                            >
                              {isVid ? (
                                <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
                                  <video
                                    src={`${imgUrl}#t=0.5`}
                                    preload="metadata"
                                    className="w-full h-full object-cover pointer-events-none opacity-70"
                                    muted
                                    playsInline
                                  />
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-[#CA9625] text-[#024E7E] flex items-center justify-center shadow">
                                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Image src={imgUrl} alt={`Photo ${thumbIdx + 1}`} fill className="object-cover" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
                    onClick={() => {
                      setSelectedProjectIndex(0);
                      setSelectedPhotoIndex(0);
                    }}
                    className="text-xs font-bold text-[#024E7E] hover:text-[#CA9625] flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[#CA9625]" />
                    <span>Explorer l&apos;Album HD</span>
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
                      onClick={() => {
                        setSelectedProjectIndex(actualIndex);
                        setSelectedPhotoIndex(0);
                      }}
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

                      {project.gallery && (
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 flex items-center gap-1.5">
                          <span>📁 Album : {project.gallery.length} médias</span>
                        </div>
                      )}

                      <div className="absolute top-4 right-4 text-xs font-mono font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        {project.isFolder ? `DOSSIER 0${actualIndex + 1}` : `PROJET 0${actualIndex + 1}`}
                      </div>

                      <div className="absolute inset-0 bg-[#024E7E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="btn-sunset-gradient px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                          <Maximize2 className="w-4 h-4 text-[#024E7E]" />
                          <span>{project.gallery ? "Ouvrir la Galerie Complète" : "Vue Grand Format HD"}</span>
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
                          onClick={() => {
                            setSelectedProjectIndex(actualIndex);
                            setSelectedPhotoIndex(0);
                          }}
                          className="text-xl font-bold text-[#024E7E] group-hover:text-[#024E7E] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>

                      {/* Mini Thumbnails for Folders */}
                      {project.gallery && (
                        <div className="space-y-2 pt-1 border-t border-slate-100">
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Médias du dossier ({project.gallery.length}) :</p>
                          <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {project.gallery.map((imgUrl, thumbIdx) => {
                              const isVid = isVideoUrl(imgUrl);
                              return (
                                <button
                                  key={thumbIdx}
                                  onClick={() => {
                                    setSelectedProjectIndex(actualIndex);
                                    setSelectedPhotoIndex(thumbIdx);
                                  }}
                                  className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-slate-200 hover:border-[#CA9625] transition-all hover:scale-105 bg-slate-900"
                                  title={isVid ? `Vidéo ${thumbIdx + 1}` : `Photo ${thumbIdx + 1}`}
                                >
                                  {isVid ? (
                                    <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
                                      <video
                                        src={`${imgUrl}#t=0.5`}
                                        preload="metadata"
                                        className="w-full h-full object-cover pointer-events-none opacity-70"
                                        muted
                                        playsInline
                                      />
                                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#CA9625] text-[#024E7E] flex items-center justify-center shadow">
                                          <Play className="w-2 h-2 fill-current ml-0.5" />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Image src={imgUrl} alt={`Média ${thumbIdx + 1}`} fill className="object-cover" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

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
                          onClick={() => {
                            setSelectedProjectIndex(actualIndex);
                            setSelectedPhotoIndex(0);
                          }}
                          className="text-xs text-[#024E7E] hover:text-[#024E7E] font-bold flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-xl border border-slate-200 transition-colors"
                        >
                          <Eye className="w-4 h-4 text-[#CA9625]" />
                          <span>{project.gallery ? "Voir l'Album HD" : "Voir en HD"}</span>
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
      {/* WORLD-CLASS LUXURY FULLSCREEN HD GALLERY LIGHTBOX (MOBILE & DESKTOP OPTIMIZED) */}
      {/* ========================================================================= */}
      {activeProject && selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#040D1A]/95 backdrop-blur-3xl flex flex-col justify-between animate-fadeIn text-white select-none overflow-hidden"
          onClick={() => setSelectedProjectIndex(null)}
        >
          {/* Ambient Blurred Background from Active Photo for Immersion */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {!isVideoUrl(currentActiveImage) ? (
              <Image
                src={currentActiveImage}
                alt="Backdrop glow"
                fill
                className="object-cover filter blur-[90px] scale-125 opacity-25"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#024E7E]/40 via-[#CA9625]/20 to-[#040D1A]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-[#040D1A]/80" />
          </div>

          {/* TOP FLOATING GLASS HEADER */}
          <div
            className="px-3 py-2.5 sm:px-8 sm:py-4 flex items-center justify-between bg-black/50 backdrop-blur-xl border-b border-white/10 relative z-30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project & Photo Metadata */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1 mr-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-gradient-to-r from-[#CA9625] to-[#E8B94B] text-[#024E7E] shadow-md shrink-0">
                {isVideoUrl(currentActiveImage) ? (
                  <>
                    <Video className="w-3 h-3 text-[#024E7E]" />
                    <span>Vidéo {selectedPhotoIndex + 1}/{activeProject.gallery?.length || 1}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#024E7E]" />
                    <span>
                      {activeProject.gallery
                        ? `${selectedPhotoIndex + 1}/${activeProject.gallery.length}`
                        : `${selectedProjectIndex + 1}/${filteredProjects.length}`}
                    </span>
                  </>
                )}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-base font-bold text-white truncate">
                  {activeProject.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-amber-200/90 flex items-center gap-1 truncate">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{activeProject.location}</span>
                </p>
              </div>
            </div>

            {/* Actions & Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button
                onClick={() => setFitMode(fitMode === "contain" ? "cover" : "contain")}
                className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
                title="Changer le mode d'affichage"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#CA9625]" />
                <span>{fitMode === "contain" ? "Mode Adapté" : "Plein Écran"}</span>
              </button>

              <a
                href="https://wa.me/241077167607"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sunset-gradient p-2 sm:px-4 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                title="Demander le prix sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#024E7E]" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-rose-600/80 text-white flex items-center justify-center transition-all border border-white/20 hover:border-rose-400 shadow-md"
                aria-label="Fermer"
                title="Fermer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* CENTER IMMERSIVE STAGE WITH TOUCH SWIPE */}
          <div
            className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (activeProject.gallery && activeProject.gallery.length > 1) {
                  setSelectedPhotoIndex(
                    (selectedPhotoIndex - 1 + activeProject.gallery.length) %
                      activeProject.gallery.length
                  );
                } else {
                  setSelectedProjectIndex(
                    (selectedProjectIndex - 1 + filteredProjects.length) %
                      filteredProjects.length
                  );
                  setSelectedPhotoIndex(0);
                }
              }}
              className="absolute left-2 sm:left-6 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-black/60 hover:bg-[#CA9625] text-white hover:text-[#024E7E] backdrop-blur-xl flex items-center justify-center transition-all border border-white/20 hover:border-[#CA9625] shadow-2xl hover:scale-110 group"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Central Photo/Video Display Card */}
            <div className="relative w-full h-[52vh] sm:h-[62vh] max-w-5xl flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.85)] border border-white/15 ring-1 ring-white/10 bg-black/60 flex items-center justify-center">
                {isVideoUrl(currentActiveImage) ? (
                  <video
                    key={currentActiveImage}
                    src={currentActiveImage}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-full object-contain"
                  >
                    Votre navigateur ne prend pas en charge la lecture de vidéos.
                  </video>
                ) : (
                  <Image
                    src={currentActiveImage}
                    alt={activeProject.title}
                    fill
                    quality={100}
                    unoptimized
                    priority
                    className={`transition-all duration-300 ${
                      fitMode === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (activeProject.gallery && activeProject.gallery.length > 1) {
                  setSelectedPhotoIndex(
                    (selectedPhotoIndex + 1) % activeProject.gallery.length
                  );
                } else {
                  setSelectedProjectIndex(
                    (selectedProjectIndex + 1) % filteredProjects.length
                  );
                  setSelectedPhotoIndex(0);
                }
              }}
              className="absolute right-2 sm:right-6 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-black/60 hover:bg-[#CA9625] text-white hover:text-[#024E7E] backdrop-blur-xl flex items-center justify-center transition-all border border-white/20 hover:border-[#CA9625] shadow-2xl hover:scale-110 group"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* BOTTOM COMPACT DOCK */}
          <div
            className="p-2.5 sm:px-8 sm:py-4 bg-black/70 backdrop-blur-2xl border-t border-white/15 relative z-30 flex flex-col gap-2 sm:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Interactive Thumbnails Ribbon */}
            {activeProject.gallery && activeProject.gallery.length > 1 && (
              <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-0.5 scrollbar-none">
                {activeProject.gallery.map((mediaUrl, idx) => {
                  const isActive = selectedPhotoIndex === idx;
                  const isVid = isVideoUrl(mediaUrl);
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 transition-all duration-200 bg-slate-900 ${
                        isActive
                          ? "ring-2 ring-[#CA9625] ring-offset-2 ring-offset-[#040D1A] scale-105 shadow-md shadow-[#CA9625]/30 border-2 border-white"
                          : "opacity-60 hover:opacity-100 border border-white/20"
                      }`}
                      title={isVid ? `Vidéo ${idx + 1}` : `Photo ${idx + 1}`}
                    >
                      {isVid ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
                          <video
                            src={`${mediaUrl}#t=0.5`}
                            preload="metadata"
                            className="w-full h-full object-cover pointer-events-none opacity-70"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="w-3.5 h-3.5 text-[#CA9625] fill-[#CA9625]" />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={mediaUrl}
                          alt={`Média ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      )}
                      <span className="absolute bottom-0.5 right-1 text-[8px] sm:text-[9px] font-mono font-bold bg-black/80 px-1 rounded text-white flex items-center gap-0.5">
                        {isVid && <Film className="w-2 h-2 text-[#CA9625]" />}
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Meta Details & CTAs */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pt-1.5 border-t border-white/10">
              <div className="space-y-1.5 max-w-3xl w-full">
                {/* Category & Location Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-[#CA9625]/20 text-[#E8B94B] text-[10px] sm:text-xs font-bold uppercase tracking-wide border border-[#CA9625]/30">
                    {activeProject.categoryName}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#CA9625] shrink-0" />
                    <span>{activeProject.location}</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] text-slate-400 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                    Touches clavier ← → pour naviguer
                  </span>
                </div>

                {/* Full Readable Description (No truncation) */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Specs formatted as clean wrapped badges */}
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  {activeProject.specs.split("|").map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/10 text-amber-200 text-[10px] sm:text-[11px] font-medium border border-white/10"
                    >
                      {spec.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 w-full lg:w-auto pt-1 lg:pt-0">
                <Link
                  href="/estimation"
                  className="btn-sunset-gradient flex-1 lg:flex-initial py-2.5 px-4 sm:px-5 rounded-xl text-xs font-bold text-center shadow-lg hover:scale-105 transition-transform"
                >
                  Estimer ce projet
                </Link>
                <a
                  href="tel:+241077167607"
                  className="bg-[#024E7E] hover:bg-[#024E7E]/80 text-white flex-1 lg:flex-initial py-2.5 px-4 sm:px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-[#CA9625]/40 transition-colors shadow-lg hover:scale-105"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CA9625]" />
                  <span>Appeler Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




