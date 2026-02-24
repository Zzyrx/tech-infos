// src/data/comparateurs.ts
// Donnees structurees pour les pages comparateurs

export interface ComparateurProduct {
  name: string;
  note: number; // sur 10
  prix: string;
  avantages: string[];
  inconvenients: string[];
  lienAffilie: string;
  choixRedaction?: boolean;
}

export interface Comparateur {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  products: ComparateurProduct[];
  updatedDate: string; // ISO date
}

export const comparateurs: Comparateur[] = [
  {
    slug: 'meilleur-vpn-2026',
    title: 'Meilleur VPN 2026 : comparatif complet',
    description: 'Notre selection des meilleurs VPN en 2026 pour proteger votre vie privee en ligne.',

    metaTitle: 'Meilleur VPN 2026 - Comparatif et guide d\'achat',
    metaDescription: 'Decouvrez notre comparatif des meilleurs VPN en 2026. Prix, performances, securite : tous les criteres pour choisir le VPN ideal.',
    intro: 'Le choix d\'un VPN est essentiel pour proteger sa vie privee en ligne. Nous avons teste et compare les principaux services VPN du marche pour vous aider a faire le meilleur choix en 2026.',
    updatedDate: '2026-02-01',
    products: [
      {
        name: 'NordVPN',
        note: 9.2,
        prix: '3,49 EUR/mois (2 ans)',
        avantages: ['6400+ serveurs dans 111 pays', 'Double VPN et Onion over VPN', 'Politique zero-log auditee', 'Vitesses excellentes'],
        inconvenients: ['Pas de version gratuite', 'Interface parfois complexe'],
        lienAffilie: '#',
        choixRedaction: true,
      },
      {
        name: 'Proton VPN',
        note: 8.8,
        prix: '4,99 EUR/mois (2 ans)',
        avantages: ['Version gratuite disponible', 'Base en Suisse (vie privee)', 'Open source', 'Secure Core (multi-hop)'],
        inconvenients: ['Moins de serveurs que NordVPN', 'Prix plus eleve pour le premium'],
        lienAffilie: '#',
      },
      {
        name: 'ExpressVPN',
        note: 8.5,
        prix: '6,67 EUR/mois (1 an)',
        avantages: ['Tres simple d\'utilisation', 'Serveurs dans 105 pays', 'TrustedServer (RAM only)', 'Support 24/7'],
        inconvenients: ['Le plus cher du marche', 'Limite a 8 appareils'],
        lienAffilie: '#',
      },
      {
        name: 'Surfshark',
        note: 8.3,
        prix: '2,19 EUR/mois (2 ans)',
        avantages: ['Appareils illimites', 'Prix tres competitif', 'CleanWeb (bloqueur pubs)', 'MultiHop'],
        inconvenients: ['Entreprise plus jeune', 'Vitesses variables selon serveurs'],
        lienAffilie: '#',
      },
    ],
  },
];
