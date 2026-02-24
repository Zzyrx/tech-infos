// src/data/site-config.ts
// Configuration centrale du micro-site — a modifier pour chaque niche

export const siteConfig = {
  // Identite du site
  name: 'tech-infos',
  domain: 'https://example.fr',     // Placeholder — mettre a jour avec le vrai domaine
  description: 'Guides et comparatifs cybersecurite, VPN, outils numeriques et protection des donnees.',

  // Niche unique
  niche: 'tech',
  nicheLabel: 'Tech & Cyber',
  nicheDescription: 'Cybersecurite, VPN, protection des donnees et outils numeriques : guides pratiques et comparatifs pour faire les bons choix.',

  // Couleurs
  color: {
    primary: 'violet',
    hex: '#a855f7',                 // Violet 500
  },

  // Icone SVG de la niche (bouclier cyber)
  nicheIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',

  // Reseaux sociaux
  social: {
    twitter: '',                    // @handle si existe
  },

  // Monetisation
  adsenseId: '',                    // PUBLIC_ADSENSE_ID
  adsenseVerification: '',          // Verification meta Google AdSense
};
