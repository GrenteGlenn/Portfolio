# Portfolio — Glenn Grente

Code source de mon portfolio de développeur fullstack : **[glenngrente.com](https://glenngrente.com)**

Le site présente mon parcours, mes expériences et des **études de cas détaillées** de mes projets : contexte, choix techniques, captures d'écran et résultats.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![AWS Amplify](https://img.shields.io/badge/déployé%20sur-AWS%20Amplify-FF9900?logo=awsamplify&logoColor=white)

---

## Contenu du site

- **Accueil** — présentation et chiffres clés (événement temps réel à 800 participants, migration Angular → Next.js, microservices testés en CI)
- **À propos** — parcours et compétences
- **Expériences** — postes et missions
- **Projets** — galerie de projets, chacun avec sa page d'étude de cas (`/projects/[slug]`)
  - Seeqle — SaaS de recrutement
  - Wonders — projet de Master
  - Human Things — bingo et cagnotte événementiels en temps réel
  - Simulateur CO₂
- **Contact**

---

## Stack

| Domaine     | Technologies |
| ----------- | ------------ |
| Framework   | Next.js 15 (App Router), React 19 |
| Langage     | TypeScript |
| UI          | Tailwind CSS, shadcn/ui (Radix), lucide-react, react-icons |
| Animations  | Framer Motion |
| Médias      | react-medium-image-zoom (zoom sur les captures) |
| Déploiement | AWS Amplify (build continu depuis `main`) |

---

## Points techniques

- **Routes dynamiques** : une seule route `/projects/[slug]` et un `ProjectRenderer` qui associe chaque slug à son composant d'étude de cas, ce qui permet d'ajouter un projet sans toucher au routage.
- **Navigation par section** : le hook `useActiveSection` observe le défilement pour surligner la section courante dans la barre de navigation.
- **Composants réutilisables** : `CaseStudy`, `ProjectGallery`, `SectionTitle` et `Card` donnent une mise en page commune à toutes les études de cas.
- **Responsive** et animations d'apparition au défilement.

---

## Structure

```
src/
├── app/
│   ├── page.tsx                      # Page d'accueil (sections)
│   └── (NavBar)/projects/[slug]/     # Pages d'étude de cas
├── components/
│   ├── about/  contact/  experiences/  navBar/
│   ├── projects/                     # Une étude de cas par projet + galerie
│   └── ui/                           # Composants génériques (shadcn)
└── hooks/useActiveSection.ts
public/images/                        # Captures des projets, CV
```

---

## Lancer en local

**Prérequis :** Node.js ≥ 18

```bash
git clone https://github.com/GrenteGlenn/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

| Script          | Action                      |
| --------------- | --------------------------- |
| `npm run dev`   | Serveur de développement    |
| `npm run build` | Build de production         |
| `npm start`     | Lance le build de production |

---

## Contact

**Glenn Grente** — Développeur fullstack React / TypeScript / Node.js
[glenngrente.com](https://glenngrente.com) · [GitHub](https://github.com/GrenteGlenn)
