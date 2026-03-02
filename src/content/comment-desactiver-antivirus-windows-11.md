---
title: "comment désactiver antivirus windows 11"
description: "Reponse detaillee : comment désactiver antivirus windows 11"
publishDate: 2026-02-24
affiliateProducts:
  - name: "NordVPN"
    link: "https://nordvpn.com"
    description: "VPN rapide et securise"
---

# Comment désactiver l'antivirus Windows 11 : guide complet et sécurisé

Windows 11 intègre Microsoft Defender Antivirus, une solution de sécurité native qui surveille en permanence votre système. Mais il existe des situations légitimes où désactiver temporairement cette protection s'avère nécessaire : installation d'un logiciel bloqué à tort, test de performances, déploiement d'un antivirus tiers... Ce guide vous explique **toutes les méthodes disponibles**, leurs risques et les bonnes pratiques à adopter.

---

## Pourquoi désactiver l'antivirus Windows 11 ?

Avant de passer aux manipulations, il est utile de comprendre pourquoi cette question revient si souvent. Selon une étude de AV-Test Institute (2023), **Microsoft Defender bloque en moyenne 99,7 % des menaces connues**, ce qui en fait l'un des antivirus les plus efficaces du marché. Paradoxalement, cette efficacité génère aussi des **faux positifs** : des logiciels légitimes sont parfois détectés comme dangereux.

Voici les raisons les plus courantes qui poussent les utilisateurs à désactiver temporairement Defender :

- **Installation d'un logiciel de développement** (certains outils de compilation ou de virtualisation déclenchent des alertes)
- **Déploiement d'un antivirus tiers** (Kaspersky, Bitdefender, Norton...)
- **Amélioration des performances** lors de tâches intensives (rendu 3D, encodage vidéo)
- **Tests en environnement contrôlé** par des professionnels IT
- **Résolution de conflits** avec certains jeux vidéo ou VPN

> ⚠️ **Avertissement important** : Désactiver votre antivirus expose votre système. Ne le faites que temporairement et dans un environnement de confiance. Jamais lors d'une navigation sur Internet ou d'un téléchargement.

---

## Méthode 1 : Désactiver via les Paramètres Windows (interface graphique)

C'est la méthode la plus simple et la plus accessible pour le grand public. Elle ne nécessite aucune connaissance technique.

### Étapes détaillées

1. Cliquez sur le **menu Démarrer** puis ouvrez les **Paramètres** (icône engrenage)
2. Naviguez vers **Confidentialité et sécurité**
3. Cliquez sur **Sécurité Windows**
4. Sélectionnez **Protection contre les virus et menaces**
5. Sous la section **Paramètres de protection contre les virus et menaces**, cliquez sur **Gérer les paramètres**
6. Basculez le commutateur **Protection en temps réel** sur **Désactivé**

Windows 11 affichera une notification d'avertissement — c'est normal. La protection sera automatiquement **réactivée après un redémarrage** ou après quelques minutes (généralement entre 15 minutes et 1 heure selon les configurations).

### Limites de cette méthode

- **Temporaire uniquement** : Windows 11 réactive automatiquement la protection
- Ne désactive pas toutes les composantes de Defender (protection Cloud, envoi automatique d'échantillons...)
- Requiert des droits administrateur

---

## Méthode 2 : Désactiver via Windows Security Center

Cette approche offre un contrôle plus granulaire sur les différentes composantes de la protection.

### Les composantes que vous pouvez désactiver individuellement

| Composante | Rôle | Impact de la désactivation |
|---|---|---|
| Protection en temps réel | Surveillance active des fichiers | Élevé |
| Protection dans le Cloud | Analyse via serveurs Microsoft | Moyen |
| Envoi automatique d'échantillons | Partage de données suspectes | Faible |
| Protection contre les falsifications | Empêche la modification de Defender | Critique |

Pour accéder à ces options : **Sécurité Windows > Protection contre les virus et menaces > Gérer les paramètres**.

La **Protection contre les falsifications** (Tamper Protection) mérite une attention particulière : activée par défaut, elle empêche les applications et scripts de modifier les paramètres de Defender. Vous devez la désactiver manuellement avant de pouvoir agir sur les autres paramètres via PowerShell ou le registre.

---

## Méthode 3 : Désactiver via PowerShell (utilisateurs avancés)

Pour les professionnels IT et les utilisateurs avancés, PowerShell offre un contrôle total sur Microsoft Defender.

### Prérequis

- Ouvrir PowerShell **en tant qu'administrateur** (clic droit > Exécuter en tant qu'administrateur)
- Avoir désactivé la **Protection contre les falsifications** au préalable (voir Méthode 2)

### Commandes essentielles

**Désactiver la protection en temps réel :**
```powershell
Set-MpPreference -DisableRealtimeMonitoring $true
```

**Désactiver complètement Microsoft Defender :**
```powershell
Set-MpPreference -DisableRealtimeMonitoring $true
Set-MpPreference -DisableBehaviorMonitoring $true
Set-MpPreference -DisableBlockAtFirstSeen $true
Set-MpPreference -DisableIOAVProtection $true
```

**Réactiver Defender (commande de rétablissement) :**
```powershell
Set-MpPreference -DisableRealtimeMonitoring $false
```

**Vérifier l'état actuel de Defender :**
```powershell
Get-MpComputerStatus
```

Cette méthode est particulièrement utile dans les **scripts d'administration système** ou lors de déploiements automatisés en entreprise.

---

## Méthode 4 : Désactiver via l'Éditeur de stratégie de groupe (GPO)

Disponible uniquement sur les éditions **Windows 11 Pro, Enterprise et Education**, cette méthode permet une désactivation plus persistante.

### Étapes

1. Appuyez sur **Win + R**, tapez `gpedit.msc` et validez
2. Naviguez vers : **Configuration ordinateur > Modèles d'administration > Composants Windows > Antivirus Microsoft Defender**
3. Double-cliquez sur **Désactiver l'Antivirus Microsoft Defender**
4. Sélectionnez **Activé** (oui, "Activé" signifie ici que la règle de désactivation est active)
5. Cliquez sur **Appliquer** puis **OK**
6. Redémarrez votre ordinateur

### Avantages et inconvénients

✅ Désactivation persistante après redémarrage  
✅ Méthode officielle et documentée par Microsoft  
❌ Réservé aux éditions Pro et supérieures  
❌ Windows 11 peut réactiver Defender si aucun autre antivirus n'est détecté  

---

## Méthode 5 : Désactiver via l'Éditeur du Registre

> ⚠️ **Manipulation à risque** : Une modification incorrecte du registre peut endommager votre système. Créez un point de restauration avant toute intervention.

Cette méthode fonctionne sur toutes les éditions de Windows 11, y compris Home.

### Étapes

1. Appuyez sur **Win + R**, tapez `regedit` et validez
2. Naviguez vers la clé :  
   `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
3. Faites un clic droit dans le panneau de droite > **Nouveau > Valeur DWORD (32 bits)**
4. Nommez la valeur : `DisableAntiSpyware`
5. Double-cliquez dessus et assignez la valeur **1**
6. Redémarrez votre PC

**Pour réactiver**, supprimez la valeur DWORD créée ou remettez sa valeur à **0**.

---

## Méthode 6 : Ajouter des exclusions (alternative recommandée)

Plutôt que de désactiver complètement votre antivirus, **ajouter des exclusions** est souvent la meilleure solution. Cette approche permet à Defender de continuer à protéger votre système tout en ignorant un dossier ou fichier spécifique.

### Comment ajouter une exclusion

1. Ouvrez **Sécurité Windows > Protection contre les virus et menaces**
2. Cliquez sur **Gérer les paramètres**
3. Faites défiler jusqu'à **Exclusions** et cliquez sur **Ajouter ou supprimer des exclusions**
4. Cliquez sur **Ajouter une exclusion** et choisissez entre :
   - **Fichier** (un exécutable précis)
   - **Dossier** (tout un répertoire)
   - **Type de fichier** (par extension)
   - **Processus** (un processus en cours d'exécution)

Cette méthode est **de loin préférable** à une désactivation complète dans 80 % des cas d'usage.

---

## Comparatif des méthodes : laquelle choisir ?

| Méthode | Difficulté | Persistance | Éditions compatibles | Recommandation |
|---|---|---|---|---|
| Paramètres Windows | ⭐ Facile | Temporaire | Toutes | ✅ Usage courant |
| PowerShell | ⭐⭐⭐ Expert | Semi-permanente | Toutes | ✅ IT Pro |
| Stratégie de groupe | ⭐⭐ Intermédiaire | Permanente | Pro/Enterprise | ✅ Entreprises |
| Éditeur de registre | ⭐⭐⭐ Expert | Permanente | Toutes | ⚠️ Avec prudence |
| Ajout d'exclusions | ⭐ Facile | Permanente | Toutes | ✅✅ Recommandée |

---

## Que se passe-t-il quand vous désactivez Defender ?

Comprendre les implications est essentiel. Selon les données de Microsoft Security Intelligence (rapport 2023) :

- **44,15 milliards** de menaces ont été bloquées par Defender en 2022
- Un PC sans protection est **15 fois plus susceptible** d'être infecté
- Le délai moyen entre l'exposition et l'infection sans antivirus actif est de **moins de 4 minutes** sur certains réseaux

Lorsque vous désactivez Defender, **Windows 11 vous alertera** via :
- Une notification dans la barre des tâches
- Un bandeau rouge dans le Centre de sécurité Windows
- Des rappels périodiques pour réactiver la protection

Ces alertes disparaissent automatiquement si vous installez un **antivirus tiers reconnu** (Windows détecte la protection alternative et désactive Defender de lui-même).

---

## Désactivation automatique : quand Windows le fait pour vous

Il est important de savoir que Windows 11 désactive automatiquement Microsoft Defender dans un cas précis : **lorsqu'un antivirus tiers compatible est installé et actif**. C'est le comportement par défaut du système.

Les antivirus les mieux notés qui déclenchent cette désactivation automatique incluent :

- **Bitdefender Total Security** — Score AV-Test : 100 %
- **Kaspersky Standard** — Score AV-Test : 99,9 %
- **Norton 360** — Score AV-Test : 99,8 %
- **ESET NOD32** — Score AV-Test : 99,7 %

Dans ce scénario, il n'est pas nécessaire de manipuler manuellement les paramètres de Defender.

---

## Bonnes pratiques et recommandations de sécurité

Si vous devez absolument désactiver votre antivirus, respectez ces règles :

1. **Déconnectez-vous d'Internet** pendant toute la durée de la désactivation
2. **Fixez une durée précise** et notez-la (maximum 30 minutes recommandé)
3. **Créez un point de restauration système** avant toute manipulation
4. **Réactivez immédiatement** après avoir effectué l'opération nécessaire
5. **Lancez une analyse complète** (Full Scan) dès la réactivation
6. **Évitez de télécharger ou d'ouvrir** des fichiers pendant cette période
7. **Préférez les exclusions** à la désactivation complète quand c'est possible

---

## Notre avis

Désactiver l'antivirus Windows 11 est une manipulation **légitime mais qui doit rester exceptionnelle**. Microsoft Defender s'est considérablement amélioré ces dernières années — il était jugé "passable" en 2017, il est aujourd'hui **classé parmi les meilleures solutions du marché** par des organismes indépendants comme AV-Test et AV-Comparatives.

Pour la grande majorité des cas d'usage, **l'ajout d'une exclusion est largement suffisant** et infiniment plus sûr qu'une désactivation complète. Si vous êtes un utilisateur domestique, la méthode via les Paramètres Windows (Méthode 1) reste la plus adaptée : simple, réversible automatiquement et sans risque pour l'intégrité du système.

Si vous êtes administrateur système ou développeur, la méthode PowerShell ou GPO vous offrira la granularité nécessaire pour vos workflows professionnels.

Ce qu'il faut retenir : **ne désactivez jamais votre antivirus de façon permanente sans déployer une solution de remplacement**. La menace cybernétique est réelle — en France, l'ANSSI recensait plus de **3 800 incidents de cybersécurité** en 2022, un chiffre en hausse constante. Votre antivirus est votre première ligne de défense. Traitez-la avec le respect qu'elle mérite.

---

<meta>{"title": "Comment désactiver l'antivirus Windows 11 : 6 méthodes complètes (2024)", "description": "Découvrez comment désactiver Microsoft Defender sur Windows 11 avec 6 méthodes détaillées : paramètres, PowerShell, GPO, registre. Guide sécurisé avec bonnes pratiques.", "faq": [{"q": "Comment désactiver temporairement l'antivirus Windows 11 ?", "a": "Allez dans Paramètres > Confidentialité et sécurité > Sécurité Windows > Protection contre les virus et menaces > Gérer les paramètres, puis désactivez la Protection en temps réel. Windows 11 la réactivera automatiquement après quelques minutes ou au redémarrage."}, {"q": "Comment désactiver définitivement Microsoft Defender sur Windows 11 ?", "a": "La méthode la plus fiable pour une désactivation persistante est l'Éditeur de stratégie de groupe (gpedit.msc) sur Windows 11 Pro, ou l'Éditeur du Registre pour toutes les éditions. Attention : cette manipulation est déconseillée sans antivirus de remplacement."}, {"q": "Pourquoi Windows 11 réactive-t-il l'antivirus automatiquement ?", "a": "Windows 11 est conçu pour réactiver Microsoft Defender automatiquement si aucune autre solution antivirus n'est détectée, afin de protéger en permanence le système. C'est un comportement de sécurité voulu par Microsoft."}, {"q": "Est-il dangereux de désactiver l'
