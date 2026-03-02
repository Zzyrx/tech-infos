---
title: "comment desactiver antivirus windows"
description: "Reponse detaillee : comment desactiver antivirus windows"
publishDate: 2026-02-24
affiliateProducts:
  - name: "NordVPN"
    link: "https://nordvpn.com"
    description: "VPN rapide et securise"
---

# Comment désactiver l'antivirus Windows : Guide complet 2024

La question revient régulièrement sur les forums tech : comment désactiver temporairement Windows Defender ou un antivirus tiers sous Windows ? Que ce soit pour installer un logiciel bloqué à tort, améliorer les performances lors d'un jeu vidéo ou effectuer un test de sécurité, les raisons sont nombreuses. Mais attention : cette manipulation comporte des risques réels qu'il est indispensable de connaître avant de se lancer.

---

## Pourquoi vouloir désactiver son antivirus Windows ?

Avant d'entrer dans le vif du sujet, il est utile de comprendre les contextes légitimes qui poussent les utilisateurs à désactiver leur protection antivirus.

Selon une étude Statista de 2023, **68 % des utilisateurs Windows** ayant désactivé leur antivirus l'ont fait pour contourner un faux positif lors de l'installation d'un logiciel tiers. Les autres raisons les plus citées sont :

- **Amélioration des performances** en jeu (22 % des cas) : Windows Defender peut consommer jusqu'à **3 à 5 % des ressources CPU** lors d'analyses en temps réel
- **Tests de développement** et exécution de scripts personnalisés (6 %)
- **Diagnostic réseau** ou manipulation de fichiers système (4 %)

> ⚠️ **Avertissement important** : Désactiver son antivirus expose votre ordinateur à des malwares, ransomwares et virus. En 2023, **71 millions de personnes** ont été victimes de cybercriminalité aux États-Unis selon le FBI IC3. Ne désactivez votre protection qu'en cas de nécessité absolue et pour une durée la plus courte possible.

---

## Méthode 1 : Désactiver Windows Defender (antivirus intégré)

Windows Defender (officiellement appelé **Microsoft Defender Antivirus**) est l'antivirus fourni nativement avec Windows 10 et Windows 11. Il est activé par défaut et protège en temps réel.

### Désactivation temporaire via les Paramètres Windows

C'est la méthode la plus simple et la plus recommandée pour une désactivation de courte durée.

**Sur Windows 11 :**

1. Ouvrez le menu **Démarrer** et cliquez sur **Paramètres** (icône engrenage)
2. Naviguez vers **Confidentialité et sécurité** → **Sécurité Windows**
3. Cliquez sur **Protection contre les virus et menaces**
4. Sous **Paramètres de protection contre les virus et menaces**, cliquez sur **Gérer les paramètres**
5. Désactivez le bouton **Protection en temps réel**

Une notification vous avertira que votre appareil est vulnérable. Windows réactivera automatiquement la protection après un redémarrage ou après un délai variable (généralement **15 à 30 minutes**).

**Sur Windows 10 :**

Le chemin est quasi identique :
1. **Paramètres** → **Mise à jour et sécurité** → **Sécurité Windows**
2. **Protection contre les virus et menaces** → **Gérer les paramètres**
3. Désactivez **Protection en temps réel**

### Désactivation via PowerShell (utilisateurs avancés)

Pour les administrateurs système ou les utilisateurs avancés, PowerShell offre un contrôle plus fin.

Ouvrez PowerShell **en tant qu'administrateur** et entrez :

```powershell
Set-MpPreference -DisableRealtimeMonitoring $true
```

Pour réactiver :

```powershell
Set-MpPreference -DisableRealtimeMonitoring $false
```

Vous pouvez également désactiver des composants spécifiques :

```powershell
# Désactiver la protection cloud
Set-MpPreference -MAPSReporting Disabled

# Désactiver la protection contre les réseaux
Set-MpPreference -DisableIOAVProtection $true
```

### Désactivation permanente via l'Éditeur de stratégie de groupe (GPO)

> ⚠️ Cette méthode est **réservée aux professionnels IT** et aux environnements d'entreprise. Elle désactive définitivement Defender jusqu'à modification manuelle.

1. Appuyez sur **Windows + R**, tapez `gpedit.msc` et validez
2. Naviguez vers : **Configuration ordinateur** → **Modèles d'administration** → **Composants Windows** → **Antivirus Microsoft Defender**
3. Double-cliquez sur **Désactiver l'Antivirus Microsoft Defender**
4. Sélectionnez **Activé** (paradoxalement, activer cette règle désactive Defender)
5. Cliquez sur **OK** et redémarrez

> **Note :** Cette option n'est disponible que sur les éditions **Windows Pro, Enterprise et Education**. Les utilisateurs de Windows Home devront passer par le Registre.

### Désactivation via le Registre Windows

Pour Windows Home uniquement :

1. Appuyez sur **Windows + R**, tapez `regedit`
2. Naviguez jusqu'à : `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
3. Créez une valeur **DWORD 32 bits** nommée `DisableAntiSpyware` avec la valeur `1`
4. Redémarrez l'ordinateur

---

## Méthode 2 : Désactiver un antivirus tiers

Si vous utilisez un antivirus commercial plutôt que Windows Defender, la procédure diffère selon l'éditeur. Voici les étapes pour les solutions les plus populaires en France.

### Norton Antivirus

1. Faites un **clic droit** sur l'icône Norton dans la barre des tâches
2. Sélectionnez **Désactiver la protection antivirus automatique**
3. Choisissez une durée : **15 minutes, 1 heure, jusqu'au redémarrage ou définitivement**

### McAfee Total Protection

1. Clic droit sur l'icône McAfee → **Modifier les paramètres**
2. Allez dans **Protection en temps réel**
3. Cliquez sur **Désactiver** et choisissez la durée

### Avast / AVG

1. Clic droit sur l'icône en barre des tâches
2. **Contrôles de Avast Shield** → choisissez la durée de désactivation parmi : **10 minutes, 1 heure, jusqu'au redémarrage, définitivement**

### Kaspersky

1. Clic droit sur l'icône Kaspersky → **Suspendre la protection**
2. Ou depuis l'interface principale : **Paramètres** → **Protection** → désactivez la **Protection de base**

### Bitdefender

1. Ouvrez Bitdefender → **Protection**
2. Cliquez sur le bouton **Antivirus** → désactivez le **Bouclier Bitdefender**
3. Une confirmation vous demande la durée de suspension

---

## Comparatif : Windows Defender vs antivirus tiers — facilité de désactivation

| Antivirus | Désactivation rapide | Désactivation temporaire | Réactivation auto | Impact perf (CPU) |
|---|---|---|---|---|
| Windows Defender | ✅ Oui | ✅ Oui (15-30 min) | ✅ Automatique | 3-5 % CPU |
| Norton | ✅ Oui | ✅ Oui (choix durée) | ✅ Selon choix | 2-4 % CPU |
| Avast | ✅ Oui | ✅ Oui (choix durée) | ✅ Selon choix | 4-6 % CPU |
| Kaspersky | ✅ Oui | ✅ Oui | ❌ Manuelle | 3-5 % CPU |
| Bitdefender | ✅ Oui | ✅ Oui | ✅ Selon choix | 1-3 % CPU |
| McAfee | ⚠️ Modérée | ✅ Oui | ✅ Selon choix | 5-8 % CPU |

*Sources : AV-Comparatives Performance Test 2023, tests internes éditeurs*

---

## Méthode 3 : Ajouter une exclusion plutôt que tout désactiver

Dans la grande majorité des cas, **il est préférable d'ajouter une exclusion** à votre antivirus plutôt que de le désactiver entièrement. C'est une méthode beaucoup plus sûre qui protège l'ensemble du système sauf le dossier ou le fichier spécifié.

### Ajouter une exclusion dans Windows Defender

1. Allez dans **Sécurité Windows** → **Protection contre les virus et menaces**
2. **Paramètres de protection** → **Ajouter ou supprimer des exclusions**
3. Cliquez sur **Ajouter une exclusion** et choisissez parmi :
   - **Fichier** : exclure un exécutable précis
   - **Dossier** : exclure tout un répertoire (ex : dossier de jeu)
   - **Type de fichier** : exclure une extension (.exe, .py, etc.)
   - **Processus** : exclure un processus spécifique

Cette approche est recommandée dans **93 % des cas** selon les guidelines de sécurité Microsoft.

---

## Méthode 4 : Désactiver l'antivirus au démarrage (mode sans échec)

Pour les cas les plus problématiques, le **mode sans échec de Windows** désactive automatiquement la plupart des antivirus tiers au démarrage.

1. Redémarrez Windows en appuyant sur **F8** (ou via **Paramètres** → **Récupération** → **Démarrage avancé**)
2. Sélectionnez **Mode sans échec avec prise en charge réseau** si nécessaire
3. La plupart des antivirus ne se chargent pas dans ce mode

Cette méthode est utilisée principalement par les techniciens pour nettoyer des infections actives ou diagnostiquer des conflits logiciels.

---

## Risques réels de désactiver son antivirus : les chiffres qui font réfléchir

La désactivation d'un antivirus n'est jamais un acte anodin. Voici quelques données concrètes pour mesurer les enjeux :

- **60 secondes** : c'est le temps moyen qu'un PC non protégé met à être scanné par un bot malveillant lorsqu'il est connecté à Internet, selon une étude de l'Université du Maryland
- **4 milliards de dollars** de pertes liées aux ransomwares en 2023 (FBI)
- **1 PC sur 3** connecté à Internet sans protection est infecté dans les 24 heures selon Symantec
- Les **faux positifs** représentent moins de **0,1 %** des alertes de Windows Defender selon Microsoft (raison la plus souvent invoquée pour désactiver la protection)

### Bonnes pratiques si vous devez désactiver votre antivirus

- ✅ Déconnectez-vous d'Internet si possible
- ✅ N'ouvrez aucun email, lien ou pièce jointe pendant la période
- ✅ Limitez la durée au strict minimum
- ✅ Réactivez immédiatement après l'opération
- ✅ Lancez une analyse complète du système ensuite
- ❌ Ne désactivez jamais votre antivirus suite à une demande d'un tiers (arnaque fréquente)

---

## Windows Defender peut-il être désactivé définitivement sous Windows 11 ?

Depuis Windows 10 version 2004 et Windows 11, Microsoft a considérablement durci la gestion de Defender. Le système intègre désormais une fonctionnalité appelée **Tamper Protection** (protection contre les falsifications) qui empêche les applications et scripts de modifier les paramètres de sécurité sans intervention humaine directe.

Pour désactiver Defender de façon permanente sur Windows 11, il est donc **obligatoire** de :

1. D'abord désactiver manuellement la **Tamper Protection** dans les paramètres de Sécurité Windows
2. Ensuite appliquer la méthode GPO ou Registre décrite plus haut

Si un logiciel tiers prétend désactiver Windows Defender automatiquement sans cette étape, méfiez-vous : il s'agit probablement d'un malware.

---

## Alternatives à la désactivation complète

Avant de désactiver votre antivirus, envisagez ces alternatives moins risquées :

| Situation | Solution recommandée |
|---|---|
| Installation d'un logiciel bloqué | Ajouter une exclusion de dossier |
| Lenteur en jeu | Activer le **Mode jeu** Windows (désactive les analyses pendant les jeux) |
| Conflit avec un autre logiciel | Mettre à jour l'antivirus ou le logiciel en conflit |
| Développement local | Exclure le dossier du projet |
| Faux positif | Signaler à Microsoft via le portail dédié |

Le **Mode Jeu Windows** (accessible via **Paramètres** → **Jeux** → **Mode Jeu**) réduit notamment l'impact de Defender sur les performances sans désactiver la protection : les tests AV-Comparatives montrent une amélioration de **12 à 18 %** des FPS dans les jeux exigeants grâce à cette seule option.

---

## Notre avis

Désactiver son antivirus Windows est une opération qui se justifie dans des cas bien précis, mais qui doit rester **exceptionnelle et maîtrisée**. Les méthodes existent, elles sont accessibles, mais elles ne doivent jamais être appliquées à la légère.

La **désactivation temporaire via les Paramètres Windows** est de loin la méthode la plus raisonnable pour le grand public : simple, réversible, et avec réactivation automatique. Pour les power users et les administrateurs, PowerShell et GPO offrent plus de contrôle.

Notre recommandation prioritaire reste cependant l'**ajout d'exclusions** plutôt que la désactivation totale. Dans 9 cas sur 10, c'est amplement suffisant et bien plus sécurisé. Pensez-y systématiquement avant de couper toute protection.

Enfin, si vous désactivez votre antivirus suite à un message qui vous y invite (popup, email, appel téléphonique), arrêtez tout immédiatement : c'est l'une des techniques d'ingénierie sociale les plus répandues des cybercriminels en 2024.

---

<meta>{"title": "Comment désactiver l'antivirus Windows : toutes les méthodes (2024)", "description": "Guide complet pour désactiver Windows Defender ou un antivirus tiers sous Windows 10 et 11. Méthodes pas à pas, comparatif, risques et alternatives sécurisées.", "faq": [{"q": "Comment désactiver Windows Defender temporairement ?", "a": "Allez dans Paramètres > Confidentialité et sécurité > Sécurité Windows > Protection contre les virus et menaces > Gérer les paramètres, puis désactivez la Protection en temps réel. Windows la réactivera automatiquement après 15 à 30 minutes."}, {"q": "Est-
