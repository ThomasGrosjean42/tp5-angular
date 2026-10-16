# TP5 Angular – Services et déploiement

M2 CIM – Module Champ d'Application (Angular)

Dépôt : https://github.com/ThomasGrosjean42/tp5-angular
Site en ligne : https://thomasgrosjean42.github.io/tp5-angular/

## Partie I : Services

### 1.1 – Création du service

J'ai généré le service avec `ng generate service services/activite`. Il a bien `providedIn: 'root'`, donc pas besoin de l'ajouter dans un tableau `providers`.

![Code 1.1](captures/code_q1.1_service.png)

### 1.2 – Injection dans HomeComponent

J'importe le service et je l'injecte dans le constructeur. Je l'ai mis en `public` pour pouvoir l'utiliser directement dans le template.

![Code 1.2](captures/code_q1.2_injection_home.png)

### 1.3 – Déplacement du tableau `objectifs`

Le tableau est maintenant dans le service. Dans le HTML j'utilise `activiteService.objectifs` au lieu de `objectifs`. L'animation marche toujours, elle se base sur `activiteService.objectifs.length`.

![Service](captures/code_q1.3a_service_tableau.png)

![Template de Home](captures/code_q1.3b_home_html.png)

Résultat :

![Home avec le service](captures/01_home_service_injecte.png)

### 1.4 – Vérification après navigation

J'ai ajouté deux éléments, je suis allé sur About puis je suis revenu sur Home : les éléments sont toujours là. Comme le service est un singleton, tous les composants partagent le même tableau.

![Ajout d'éléments](captures/02_q1.4_ajout_elements.png)

![Retour sur Home, la liste est conservée](captures/04_q1.4_retour_home_liste_conservee.png)

### 1.5 – Liste dans AboutComponent

Même chose dans `AboutComponent` : j'injecte le service et j'affiche la liste avec un `@for` dans un `<ol>`.

![about.component.ts](captures/code_q1.5a_about_ts.png)

![about.component.html](captures/code_q1.5b_about_html.png)

Résultat :

![About affiche la même liste](captures/03_q1.5_about_meme_liste.png)

### 1.6 – Clic vers le détail d'une activité

J'ai ajouté la route `consultAct/:id`. Sur Home, un clic sur une activité appelle `voirActivite($index)`, qui navigue vers `/consultAct/indice`.

![Route](captures/code_q1.6a_route.png)

![Clic dans le template](captures/code_q1.6b_home_html_clic.png)

![Navigation](captures/code_q1.6c_home_ts_navigation.png)

### 1.7 – Page de détail

Dans `ConsultActiviteComponent`, je récupère l'indice avec `ActivatedRoute` et je vais chercher l'activité dans le tableau du service.

![consult-activite.component.ts](captures/code_q1.7a_consult_ts.png)

![consult-activite.component.html](captures/code_q1.7b_consult_html.png)

Résultat :

![Détail d'une activité](captures/05_q1.7_detail_activite.png)

### 1.8 – Suppression

`removeItem` dans le service fait un `splice`. Dans le composant, `supprimeElem(i)` appelle `removeItem` puis redirige vers la page d'accueil.

![removeItem dans le service](captures/code_q1.8a_service_remove.png)

![supprimeElem](captures/code_q1.8b_consult_ts_supprime.png)

![Bouton Supprimer](captures/code_q1.8c_consult_html_bouton.png)

Résultat (l'élément a disparu sur Home et sur About) :

![Après suppression](captures/08_q1.8_apres_suppression.png)

![About après suppression](captures/09_q1.8_about_apres_suppression.png)

### 1.9 – Modification du titre

J'ai ajouté un booléen `edition`. Le bouton Modifier affiche un input (`[(ngModel)]`) et un bouton Sauvegarder, qui appelle `modifItem(index, titre)` dans le service.

![Template en mode édition](captures/code_q1.9a_consult_html_edition.png)

![modifier / sauvegarder](captures/code_q1.9b_consult_ts_edition.png)

![modifItem dans le service](captures/code_q1.9c_service_modif.png)

Résultat :

![Mode édition](captures/06_q1.9_edition.png)

![Après sauvegarde](captures/07_q1.9_sauvegarde.png)

## Partie II : Déploiement sur GitHub Pages

### 2.1 / 2.2 – Dépôt GitHub

J'ai créé le dépôt `tp5-angular` (public) et je l'ai relié au projet :

```bash
git init -b main
git add .
git commit -m "TP5 Angular - services et captures"
git remote add origin https://github.com/ThomasGrosjean42/tp5-angular.git
git push -u origin main
```

![Dépôt GitHub](captures/10_q2.1_q2.2_depot_github.png)

### 2.3 / 2.4 – Déploiement

```bash
ng add angular-cli-ghpages
ng deploy --base-href="/tp5-angular/"
```

`ng deploy` fait le build et pousse le résultat sur la branche `gh-pages`, qui est publiée par GitHub Pages.

![Site déployé](captures/11_q2.4_site_deploye.png)

Remarque : si on recharge directement une page comme `/about` sur GitHub Pages, GitHub ne connaît pas les routes Angular. Ce n'est pas un problème de déploiement. `angular-cli-ghpages` crée automatiquement un `404.html` (copie de `index.html`), donc l'appli se charge quand même.
