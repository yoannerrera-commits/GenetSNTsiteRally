// Base de données centralisée des actualités
const newsDatabase = [
  {
    id: 1,
    title: 'Victoire spectaculaire au Rallye de Monte-Carlo',
    date: '12 janvier 2026',
    summary: 'Résumé : Une course pleine de rebondissements avec des conditions météo changeantes et une stratégie gagnante.',
    content: 'Le Rallye de Monte-Carlo 2026 a offert un spectacle incontournable. Malgré des conditions météo imprévisibles alternant entre pluie, neige et soleil, S. Loeb a remporté une victoire de prestige. Ses qualifications en spéciales difficiles et sa gestion tactique en fin de course lui ont permis de devancer ses rivaux et de remporter ce rallye emblématique pour la quatrième fois.\n\nLe parcours s\'est déroulé sur 5 jours avec 20 spéciales réparties sur les Alpes maritimes. Les conditions changeantes ont mis à l\'épreuve tous les concurrents, mais Loeb et son copilote ont géré à merveille chaque transition. Une victoire méritée qui confirme la domination française en compétition automobile.'
  },
  {
    id: 2,
    title: 'Nouveau règlement pour la saison prochaine',
    date: '5 décembre 2025',
    summary: 'Résumé : Les organisateurs ont présenté des ajustements techniques pour favoriser l\'équité entre constructeurs.',
    content: 'La FIA a dévoilé les nouvelles spécifications techniques pour la saison 2026. Ces changements concernent notamment le système de suspension, les dimensions des pneus et la puissance moteur. Objectif : rééquilibrer la compétition et permettre à de nouveaux constructeurs de rivaliser au plus haut niveau.\n\nLes principaux changements incluent une réduction de 50 chevaux sur les moteurs, des pneus plus grands pour une meilleure adhérence et des suspensions plus souples pour améliorer le confort et la sécurité. Ces réglementations entreront en vigueur dès le Rallye de Monte-Carlo 2026.'
  },
  {
    id: 3,
    title: 'Champion du monde sacré au Rallye de Suède',
    date: '22 février 2025',
    summary: 'Résumé : S. Loeb remporte sa 10ème victoire en championnat après une performance exceptionnelle sur glace.',
    content: 'Une performance magistrale sur le verglas suédois a permis à S. Loeb de conquérir son dixième titre mondial. Le pilote français a dominé l\'épreuve avec une maîtrise exceptionnelle, confirmant son statut de légende vivante du rallye. Une victoire célébrée par toute la communauté du sport automobile.\n\nCette dixième couronne mondiale place Loeb définitivement comme le plus grand champion de l\'histoire des rallyes. Ses performances constantes sur plus de 20 ans de carrière témoignent d\'une dédication sans égal et d\'une technique de conduite inégalée.'
  },
  {
    id: 4,
    title: 'Nouvelle équipe Peugeot annoncée pour 2026',
    date: '15 novembre 2025',
    summary: 'Résumé : Peugeot confirme son retour au WRC avec une équipe renouvelée et des ambitions record.',
    content: 'Peugeot fait son grand retour en Championnat du Monde ! Le constructeur français a confirmé son engagement avec un budget ambitieux et une nouvelle structure d\'équipe. Trois équipages seront alignés dès le Rallye de Monte-Carlo, avec un pilote chevronné aux commandes et deux jeunes talents prometteurs.\n\nLe retour de Peugeot marque une nouvelle ère pour le WRC. Avec l\'appui d\'un budget record et d\'une structure technique robuste, le constructeur français espère conclure pour le titre constructeur dès 2026.'
  },
  {
    id: 5,
    title: 'Incident spectaculaire au Rallye de Turquie',
    date: '8 octobre 2025',
    summary: 'Résumé : Un pilote local impressionne en prenant la 3ème place malgré un accident mineur au second jour.',
    content: 'Malgré une sortie de route au deuxième jour de course, le pilote turc a remporté un exploit en terminant à la troisième place. Son courage et sa détermination à poursuivre la course après un accident spectaculaire ont impressionné tous les observateurs. Une belle histoire d\'accrochage et de rebond dans ce Rallye de Turquie.\n\nCette performance exceptionnelle a permis au pilote turc de gravir plusieurs places au classement général et de prouver que même après une mésaventure, il est possible de revenir fort et de terminer sur le podium.'
  },
  {
    id: 6,
    title: 'Hyundai dévoile sa nouvelle i20 pour 2026',
    date: '20 septembre 2025',
    summary: 'Résumé : La nouvelle génération promet des améliorations aérodynamiques et une meilleure traction.',
    content: 'Hyundai a dévoilé les plans de sa nouvelle i20 Rally1 pour la saison 2026. Avec des améliorations majeures en aérodynamique, châssis et motorisation, la nouvelle mouture devrait rivaliser avec la Toyota et la Ford. Des essais privés ont déjà montré des résultats prometteurs, laissant augurer une belle compétition.\n\nLes ingénieurs de Hyundai ont travaillé sans relâche pour optimiser chaque détail. Le nouveau diffuseur amélioré, les pneus plus performants et le moteur reprogrammé devraient donner à la i20 un avantage compétitif certain dès les premiers rallyes.'
  }
];
