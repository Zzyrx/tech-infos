---
title: "comment désactiver antivirus windows 10"
description: "Reponse detaillee : comment désactiver antivirus windows 10"
publishDate: 2026-02-24
affiliateProducts:
  - name: "NordVPN"
    link: "https://nordvpn.com"
    description: "VPN rapide et securise"
---

# Comment désactiver l'antivirus Windows 10 : Guide complet 2024

La question revient régulièrement chez les utilisateurs de Windows 10 : comment désactiver temporairement ou définitivement Microsoft Defender, l'antivirus intégré au système ? Que ce soit pour installer un logiciel bloqué à tort, améliorer les performances lors d'un jeu vidéo ou tester une application sensible, les raisons sont nombreuses. Ce guide complet vous explique toutes les méthodes disponibles, leurs avantages, leurs risques et les précautions à prendre.

---

## Pourquoi vouloir désactiver l'antivirus Windows 10 ?

Avant de plonger dans le vif du sujet, il est important de comprendre pourquoi certains utilisateurs cherchent à désactiver Microsoft Defender. Voici les raisons les plus courantes :

- **Faux positifs** : Defender signale environ 2 à 5 % des logiciels légitimes comme des menaces potentielles selon les études de AV-Comparatives.
- **Impact sur les performances** : L'antivirus peut consommer jusqu'à **5 à 15 % des ressources CPU** lors d'analyses en temps réel, ce qui affecte les jeux vidéo ou la compilation de code.
- **Installation de logiciels tiers** : Certains programmes (VPN, outils de développement, émulateurs) sont bloqués par Defender.
- **Remplacement par un antivirus tiers** : Bitdefender, Kaspersky ou Norton offrent parfois une meilleure couverture selon les benchmarks indépendants.

> ⚠️ **Avertissement important** : Désactiver votre antivirus vous expose à des risques réels. En 2023, Microsoft a recensé plus de **1,5 milliard de tentatives de logiciels malveillants** détectées via Defender chaque mois. Ne désactivez jamais votre protection sans une raison valable et pour la durée la plus courte possible.

---

## Méthode 1 : Désactiver Microsoft Defender via les Paramètres Windows

C'est la méthode la plus simple et la plus accessible pour tous les utilisateurs.

### Étapes détaillées

1. Cliquez sur le menu **Démarrer** puis sur l'icône **Paramètres** (roue dentée).
2. Sélectionnez **Mise à jour et sécurité**.
3. Dans le menu de gauche, cliquez sur **Sécurité Windows**.
4. Cliquez sur **Protection contre les virus et menaces**.
5. Sous la section *Paramètres de protection contre les virus et menaces*, cliquez sur **Gérer les paramètres**.
6. Basculez l'interrupteur **Protection en temps réel** sur **Désactivé**.

### Ce que cela change concrètement

- La protection en temps réel est suspendue **temporairement**.
- Windows 10 la **réactivera automatiquement** après un redémarrage ou après un délai variable (généralement quelques minutes à quelques heures).
- Une notification s'affichera dans la barre des tâches pour vous avertir.

**Avantage** : Rapide, réversible, aucun risque système.  
**Inconvénient** : Temporaire uniquement, Defender se réactive seul.

---

## Méthode 2 : Désactiver Defender via l'Éditeur de stratégie de groupe (Gpedit)

Cette méthode est réservée aux utilisateurs de **Windows 10 Pro, Entreprise et Éducation**. Elle permet une désactivation plus durable.

### Accéder à l'éditeur de stratégie

1. Appuyez sur **Windows + R**, tapez `gpedit.msc` et validez.
2. Naviguez jusqu'à : `Configuration ordinateur > Modèles d'administration > Composants Windows > Antivirus Microsoft Defender`.
3. Double-cliquez sur **Désactiver l'antivirus Microsoft Defender**.
4. Sélectionnez **Activé** (ce qui désactive Defender, malgré la terminologie contre-intuitive).
5. Cliquez sur **Appliquer** puis **OK**.
6. Redémarrez votre ordinateur.

### Points importants

- Cette méthode **désactive Defender de manière persistante** jusqu'à ce que vous reveniez modifier ce paramètre.
- Elle n'est **pas disponible sur Windows 10 Home** (environ 60 % des utilisateurs selon les statistiques Steam).
- Si Windows Defender Antivirus Tamper Protection est activé, cette méthode peut être bloquée.

---

## Méthode 3 : Désactiver Defender via le Registre Windows

Pour les utilisateurs de **Windows 10 Home** qui n'ont pas accès à Gpedit, la modification du registre est une alternative.

### ⚠️ Précaution absolue

Modifier le registre Windows peut rendre votre système instable si vous faites une erreur. **Créez un point de restauration** avant de procéder.

### Étapes à suivre

1. Appuyez sur **Windows + R**, tapez `regedit` et validez.
2. Naviguez jusqu'à la clé : `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
3. Faites un clic droit dans le panneau de droite > **Nouveau** > **Valeur DWORD (32 bits)**.
4. Nommez-la **DisableAntiSpyware**.
5. Double-cliquez dessus et attribuez-lui la valeur **1**.
6. Redémarrez votre PC.

Pour réactiver Defender, remettez la valeur à **0** ou supprimez l'entrée.

**Note** : Depuis Windows 10 version 2004, Microsoft a renforcé la **Tamper Protection**, qui peut bloquer ces modifications. Vous devrez la désactiver préalablement dans les paramètres de sécurité.

---

## Méthode 4 : Désactiver via PowerShell

PowerShell offre une approche rapide pour les utilisateurs à l'aise avec les lignes de commande.

### Commandes à utiliser

Ouvrez PowerShell **en tant qu'administrateur** (clic droit sur le menu Démarrer > Windows PowerShell (Admin)) et entrez :

```powershell
# Désactiver la protection en temps réel
Set-MpPreference -DisableRealtimeMonitoring $true

# Désactiver complètement Defender
Set-MpPreference -DisableAntiSpyware $true
```

Pour réactiver :

```powershell
Set-MpPreference -DisableRealtimeMonitoring $false
Set-MpPreference -DisableAntiSpyware $false
```

**Avantage** : Rapide, scriptable, idéal pour les administrateurs système.  
**Inconvénient** : Nécessite des droits administrateur et des connaissances techniques.

---

## Méthode 5 : Désactiver temporairement les analyses planifiées

Si votre objectif est uniquement de gagner en performances sans supprimer la protection permanente, vous pouvez désactiver les **analyses planifiées** de Defender.

### Via le Planificateur de tâches

1. Appuyez sur **Windows + R**, tapez `taskschd.msc`.
2. Naviguez vers : `Bibliothèque du Planificateur de tâches > Microsoft > Windows > Windows Defender`.
3. Cliquez droit sur **Windows Defender Scheduled Scan** > **Désactiver**.

Cette manipulation réduit la charge CPU de **8 à 12 %** en moyenne pendant les heures de travail intensif, sans supprimer la protection en temps réel.

---

## Comparatif des méthodes : Tableau récapitulatif

| Méthode | Durée | Difficulté | Windows Home | Réversible |
|---|---|---|---|---|
| Paramètres Windows | Temporaire | ⭐ Facile | ✅ Oui | ✅ Oui |
| Gpedit.msc | Permanente | ⭐⭐ Moyen | ❌ Non | ✅ Oui |
| Registre Windows | Permanente | ⭐⭐⭐ Avancé | ✅ Oui | ✅ Oui |
| PowerShell | Variable | ⭐⭐ Moyen | ✅ Oui | ✅ Oui |
| Planificateur de tâches | Permanente | ⭐⭐ Moyen | ✅ Oui | ✅ Oui |

---

## Désactiver Defender pour installer un antivirus tiers : ce qu'il faut savoir

Si vous installez un antivirus tiers comme **Bitdefender, Avast, Kaspersky ou ESET**, bonne nouvelle : **Windows 10 désactive automatiquement Defender** dès que l'antivirus tiers est détecté et actif. C'est un comportement natif de Windows depuis la version 1703.

### Comparatif des antivirus selon AV-Test (2024)

| Antivirus | Score protection | Score performance | Score facilité | Prix/an |
|---|---|---|---|---|
| Microsoft Defender | 6/6 | 5.5/6 | 6/6 | Gratuit |
| Bitdefender Total Security | 6/6 | 6/6 | 5.5/6 | ~35€ |
| Kaspersky Standard | 6/6 | 5.8/6 | 6/6 | ~30€ |
| ESET NOD32 | 5.8/6 | 6/6 | 5.5/6 | ~40€ |
| Avast Free | 5.5/6 | 5.2/6 | 5/6 | Gratuit |

**Conclusion** : Microsoft Defender obtient d'excellents scores et rivalise désormais avec des solutions payantes. Le désactiver au profit d'un antivirus gratuit de moindre qualité n'est pas forcément pertinent.

---

## Désactiver les exclusions : une alternative intelligente

Plutôt que de désactiver complètement votre antivirus, pensez à **créer des exclusions**. Cela permet à Defender d'ignorer certains dossiers, fichiers ou processus tout en continuant à protéger le reste du système.

### Comment ajouter une exclusion

1. Allez dans **Paramètres > Mise à jour et sécurité > Sécurité Windows > Protection contre les virus et menaces**.
2. Cliquez sur **Gérer les paramètres**.
3. Faites défiler jusqu'à **Exclusions** > **Ajouter ou supprimer des exclusions**.
4. Cliquez sur **Ajouter une exclusion** et choisissez un fichier, dossier, type de fichier ou processus.

Cette approche est recommandée pour :
- Les **dossiers de développement** (Node.js, Python, compilateurs)
- Les **répertoires de jeux vidéo** pour éviter les ralentissements
- Les **logiciels légitimes** détectés comme faux positifs

---

## Les risques réels de désactiver son antivirus

Soyons honnêtes sur les chiffres. Selon le **Rapport Microsoft Digital Defense 2023** :

- **93 % des attaques réussies** auraient pu être bloquées par une protection en temps réel active.
- Les ransomwares ont augmenté de **195 % entre 2021 et 2023**.
- Le délai moyen entre l'infection et la détection sans antivirus est de **24 à 72 heures**.
- Le coût moyen d'une attaque ransomware pour un particulier est estimé à **500 à 2000 €** (rançon, récupération, perte de données).

### Bonnes pratiques si vous désactivez temporairement Defender

1. **Ne naviguez pas sur Internet** pendant la désactivation.
2. **Déconnectez-vous du réseau** si possible.
3. **Réactivez immédiatement** après l'opération effectuée.
4. **Lancez une analyse complète** dès la réactivation.
5. **Vérifiez vos sauvegardes** régulièrement (règle du 3-2-1 : 3 copies, 2 supports différents, 1 hors site).

---

## Réactiver Microsoft Defender : procédure de sécurité

Si vous avez désactivé Defender et souhaitez le réactiver complètement :

1. Allez dans **Paramètres > Mise à jour et sécurité > Sécurité Windows**.
2. Cliquez sur **Protection contre les virus et menaces**.
3. Réactivez la **Protection en temps réel**, la **Protection cloud** et la **Protection contre les falsifications (Tamper Protection)**.
4. Effectuez immédiatement une **analyse complète** du système.
5. Vérifiez que toutes les définitions de virus sont à jour.

---

## Notre avis

Désactiver l'antivirus Windows 10 peut sembler anodin, mais c'est une décision qui mérite réflexion. Microsoft Defender a considérablement évolué ces dernières années et atteint désormais un niveau de protection comparable aux meilleures solutions payantes du marché, comme en témoignent ses scores régulièrement proches de la perfection sur AV-Test et AV-Comparatives.

Si vous rencontrez un faux positif ou un problème de performance, **privilégiez toujours les exclusions ciblées** plutôt qu'une désactivation totale. Cette approche vous offre le meilleur des deux mondes : flexibilité pour vos cas d'usage spécifiques, et protection maintenue pour le reste du système.

Pour ceux qui souhaitent néanmoins désactiver Defender, la **méthode via les Paramètres Windows** reste la plus sûre car elle est temporaire et réversible automatiquement. Les méthodes via le registre ou Gpedit sont à réserver aux utilisateurs avancés ayant une bonne compréhension des risques.

Enfin, rappelons que **aucun antivirus ne remplace** de bonnes habitudes numériques : mises à jour régulières, téléchargements depuis des sources officielles, vigilance face aux emails suspects et sauvegardes régulières. La sécurité informatique est une chaîne dont vous êtes le maillon central.

---

<meta>{"title": "Comment désactiver l'antivirus Windows 10 : 5 méthodes complètes (2024)", "description": "Découvrez comment désactiver Microsoft Defender sur Windows 10 avec 5 méthodes détaillées : Paramètres, Gpedit, Registre, PowerShell. Comparatifs, risques et conseils d'experts.", "faq": [{"q": "Est-ce dangereux de désactiver l'antivirus Windows 10 ?", "a": "Oui, cela expose votre PC aux malwares, ransomwares et virus. Selon Microsoft, 93 % des attaques réussies auraient pu être bloquées par un antivirus actif. Ne désactivez Defender que temporairement et pour une raison précise."}, {"q": "Comment désactiver définitivement Microsoft Defender sur Windows 10 ?", "a": "La méthode la plus efficace est via l'Éditeur de stratégie de groupe (gpedit.msc) sur Windows 10 Pro, ou via l'Éditeur de registre (regedit) sur Windows 10 Home. Pensez à désactiver la Tamper Protection au
