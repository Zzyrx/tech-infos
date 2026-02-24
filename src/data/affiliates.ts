// src/data/affiliates.ts
// Produits affilies tech — liens placeholder, a remplacer par les vrais liens

export interface AffiliateProduct {
  name: string;
  link: string;
  description: string;
}

export const defaultAffiliates: AffiliateProduct[] = [
  {
    name: 'NordVPN',
    link: '#',
    description: 'Le VPN le plus populaire : 6400+ serveurs, double VPN, politique zero-log auditee. Ideal pour proteger sa vie privee en ligne.',
  },
  {
    name: 'Proton VPN',
    link: '#',
    description: 'VPN suisse open source avec version gratuite. Secure Core, chiffrement de bout en bout et engagement vie privee.',
  },
  {
    name: 'Hostinger',
    link: '#',
    description: 'Hebergement web rapide et abordable avec SSL gratuit, nom de domaine inclus et support 24/7. Ideal pour lancer un site.',
  },
];
