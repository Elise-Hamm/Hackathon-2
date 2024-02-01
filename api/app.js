const express = require('express');
const cors = require('cors');
const app = express();
const port = 4747;

app.use(cors());
app.use(express.json());

const maisons = [
   { id: 1, nom: 'Chaumière des Lys', prix: 300000, ville: 'Castelbourg', description: 'Charmante chaumière à louer, idéale pour une famille artisanale. Entourée de champs de lys, cette demeure offre un refuge paisible et artisanal.', avis: 4, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg' },
   { id: 2, nom: 'Manoir du Corbeau', prix: 500000, ville: 'Clairbois', description: ' Location exceptionnelle ! Manoir mystérieux sur une colline offrant une atmosphère noble et énigmatique. Parfait pour les amateurs de tranquillité.', avis: 5, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg' },
   { id: 3, nom: 'Maison Érable Doré', prix: 50000, ville: 'Tourmaline', description: 'À louer, une maison en bois dans la forêt, ornée de motifs inspirés des feuilles d érable dorées. Une retraite paisible au cœur de la nature.', avis: 3, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 4, nom: 'Chalet de la Brume', prix: 550000, ville: 'Havresombre', description: 'Chalet isolé en montagne, entouré de brume. Parfait pour les ermites en quête de calme et de contemplation. Disponible pour une location à long terme.', avis: 4, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 5, nom: 'Cabane du Loup Solitaire', prix: 700000, ville: 'Forgefroid', description: ' Location rustique ! Cabane en bois au bord d une clairière, parfaite pour les ermites ou les amoureux de la nature. Possibilité de location saisonnière.', avis: 4, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 6, nom: 'Tour Aigle Royal', prix: 80000, ville: 'Célestopolis', description: ' Location noble ! Tour de pierre sur une falaise, idéale pour les amateurs de fauconnerie. Une résidence majestueuse pour ceux qui recherchent une expérience unique.', avis: 4, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 7, nom: 'Pavillon du Cygne Blanc', prix: 5000, ville: 'Brisevent', description: ' Pavillon élégant entouré de jardins. Disponible pour des événements spéciaux ou des séjours prolongés. Location prestigieuse pour les amateurs d art et de culture.', avis: 1, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 8, nom: 'Hameau du Dragon Rouge', prix: 900000, ville: 'Sylvestrie', description: ' Hameau pittoresque aux maisons en briques rouges. Parfait pour les aventuriers cherchant un refuge proche d une forêt mystique. Locations disponibles pour des esprits intrépides.', avis: 2, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 9, nom: 'Bastide de la Fauconnerie', prix: 2500, ville: 'Aubeclaire', description: 'Bastide fortifiée entourée de champs de chasse. Location exclusive pour les passionnés de fauconnerie. Un cadre idyllique pour les amateurs de vie seigneuriale.', avis: 4, image: 'https://i.ibb.co/27DjBTh/Leonardo-Diffusion-XL-medieval-castel-5.jpg'},
   { id: 10, nom: 'Cottage de la Roseraie', prix: 50250, ville: 'Montéclat', description: ' Cottage enchanteur entouré de roses. Parfait pour les amoureux de la botanique. Location saisonnière pour une escapade romantique.', avis: 5, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 11, nom: 'Château des Trois Chênes', prix: 100000, ville: 'Clairbois', description: 'Majestueux château à louer, entouré de trois chênes centenaires. Parfait pour des événements royaux ou des vacances de luxe.', avis: 4, image: 'https://i.ibb.co/G0zn3QP/Leonardo-Diffusion-XL-medieval-castel-6.jpg'},
   { id: 12, nom: 'Hutte du Sombre Sorcier', prix: 404000, ville: 'Havresombre', description: 'Location mystique ! Hutte isolée au cœur de la forêt, idéale pour les sorciers en quête de tranquillité pour leurs études mystiques.', avis: 4, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 13, nom: 'Villa de la Cascade Argent', prix: 500000, ville: 'Célestopolis', description:' Villa élégante près d une cascade argentée. À louer pour des escapades romantiques ou des retraites méditatives.', avis: 3, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 14, nom: 'Gîte du Griffon Majestueux', prix: 50000, ville: 'Sylvestrie', description:'Gîte pittoresque avec une vue imprenable. À louer pour les amateurs de mythologie et aventures médiévales.', avis: 5, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 15, nom: 'Demeure Orchidée Pourpre', prix: 3000, ville: 'Montéclat', description: 'Demeure raffinée entourée d orchidées pourpres. Parfaite pour des séjours luxueux et des réceptions élégantes.', avis: 2, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 16, nom: 'Abri du Vent Mélodieux', prix: 10000, ville: 'Castelbourg', description: 'Charmant abri en bordure d une vallée, connu pour les mélodies apaisantes créées par le vent. Location idéale pour les mélomanes.', avis: 4, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 17, nom: 'Palais de la Lune Améthyste', prix: 21000, ville: 'Tourmaline', description: 'Palais majestueux éclairé par la lueur de la lune améthyste. Disponible pour des événements exclusifs et des séjours princiers.', avis: 4, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 18, nom: 'Tanière de la Chimère Mystique', prix: 33000, ville: 'Forgefroid', description: ' Location insolite ! Tanière isolée, réputée pour abriter des chimères mystiques. À louer pour les aventuriers intrépides.', avis: 4, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 19, nom: 'Abode Étoile Filante', prix: 500000, ville: 'Brisevent', description: 'Charmante demeure avec vue sur le ciel étoilé. Location romantique pour les amoureux de astronomie.', avis: 3, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 20, nom: 'Résidence de la Tourterelle Grise', prix: 74000, ville: 'Aubeclaire', description: 'Repaire discret près d une forêt, idéal pour les voyageurs furtifs. Location parfaite pour ceux qui préfèrent rester hors des regards indiscrets.', avis: 5, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 21, nom: 'Forteresse du Chevalier Vaillant', prix: 8000, ville: 'Forgefroid', description: 'Forteresse imposante à louer, jadis habitée par un chevalier vaillant. Convient pour des événements chevaleresques et des séjours historiques.', avis: 4, image: 'https://i.ibb.co/0hnY4DY/Leonardo-Diffusion-XL-medieval-house-1.jpg'},
   { id: 22, nom: 'Maisonnette du Hibou Sage', prix: 145000, ville: 'Sylvestrie', description: 'Maisonnette modeste mais accueillante, nichée près d un bois, réputée pour abriter un hibou sage. Location paisible pour les chercheurs de sagesse.', avis: 2, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 23, nom: 'Châtelet de la Perle Cachée', prix: 63000, ville: 'Montéclat', description: 'Châtelet mystérieux caché au creux d une vallée. Location exclusive pour ceux en quête de tranquillité et de secrets cachés.', avis: 4, image: 'https://i.ibb.co/27DjBTh/Leonardo-Diffusion-XL-medieval-castel-5.jpg'},
   { id: 24, nom: 'Logis du Ménestrel Errant', prix: 780000, ville: 'Castelbourg', description: 'Logis pittoresque au bord d une rivière, idéal pour les ménestrels en quête d inspiration. Location saisonnière pour des moments musicaux uniques.', avis: 4, image: 'https://i.ibb.co/1MdVF0Q/Leonardo-Diffusion-XL-medieval-house-5.jpg'},
   { id: 25, nom: 'Repaire du Lévrier Furtif', prix: 780000, ville: 'Brisevent', description: 'Repaire isolé réputé pour abriter un dragon endormi. Location à haut risque pour les aventuriers courageux en quête d une expérience unique.', avis: 3, image: 'https://i.ibb.co/27DjBTh/Leonardo-Diffusion-XL-medieval-castel-5.jpg'},
];

app.get('/api/maisons', (req, res) => {
   res.json(maisons);
});

app.get('/api/maisons/:id', (req, res) => {
   const maisonId = parseInt(req.params.id);
   const maison = maisons.find((maison) => maison.id === maisonId);

   if (!maison) {
      return res.status(404).json({ message: 'Maison non trouvée' });
   }

   res.json(maison);
});

app.post('/api/maisons', (req, res) => {
   const nouvelleMaison = req.body;
   nouvelleMaison.id = maisons.length + 1;
   maisons.push(nouvelleMaison);

   res.status(201).json(nouvelleMaison);
});

const restaurants =[
  
    { id: 1, nom:"La Taverne du Chevalier" , etablissement: "Restaurant", ville: " Castelbourg", avis: 4, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:" Une retraite chaleureuse où les chevaliers fatigués peuvent savourer des mets copieux dans une ambiance rustique, entourés d'armures étincelantes et de bannières colorées."  },
     { id: 2, nom:"L'Auberge du Dragon d'Or" , etablissement: "Taverne", ville: " Castelbourg", avis: 4, image:"https://eric-besson2.imgbb.com/" , presentation:"Un lieu mystique où les convives peuvent déguster des plats exotiques sous le regard bienveillant d'une statue de dragon doré, créant une atmosphère magique et intrigante."  },
     { id: 3, nom:"Le Festin du Château" , etablissement: "Taverne", ville: "Tourmaline", avis: 4, image:"https://eric-besson2.imgbb.com/" , presentation:" Un établissement majestueux situé au pied d'un château, proposant une cuisine raffinée et des festins somptueux pour la noblesse locale et les voyageurs distingués."  },
     { id: 3, nom:"La Broche Royale" , etablissement: "Restaurant", ville: " Castelbourg", avis: 4, image:"https://eric-besson2.imgbb.com/" , presentation:"Célèbre pour ses viandes rôties à la broche, cette taverne propose des mets succulents servis dans une ambiance animée, avec des musiciens jouant des mélodies entraînantes."  },
     { id: 5, nom:"La Table du Royaume" , etablissement: "Taverne", ville: " Castelbourg", avis: 4, image:"https://eric-besson2.imgbb.com/" , presentation:"Un restaurant accueillant qui offre une expérience gastronomique pour tous les goûts, mettant en avant des plats régionaux et des spécialités du royaume."  },
     { id: 6, nom:"La Potence Gourmande" , etablissement: "Restaurant", ville: "Clairbois", avis: 4, image:"https://eric-besson2.imgbb.com/" , presentation:" Un lieu singulier où les plats sont suspendus à des potences au-dessus des tables, créant une atmosphère unique et intrigante pour les convives aventureux."  },
     { id: 7, nom:"Le Festin Médiéval" , etablissement: "Restaurant", ville: "Tourmaline", avis: 4, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Une taverne festive qui organise régulièrement des festins costumés, invitant les clients à revivre l'atmosphère du Moyen Âge tout en savourant des mets délicieux."  },
     { id: 8, nom:"L'Écu Fumant" , etablissement: "Taverne", ville: "Clairbois", avis: 4, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Spécialisé dans les plats fumés et grillés, ce restaurant offre une expérience culinaire robuste dans un cadre authentique de bois sombre et de torches vacillantes."  },
     { id: 9, nom:"La Brasserie du Chevalier Errant" , etablissement: "Restaurant", ville: "Clairbois", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un endroit décontracté fréquenté par les chevaliers en quête d'aventures, offrant des bières artisanales, des plats simples et une atmosphère conviviale."  },
     { id: 10, nom:"Le Banquet des Épées" , etablissement: "Restaurant", ville: "Célestopolis", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un restaurant de prestige où les convives sont entourés d'armes anciennes et de blasons, créant une atmosphère noble et élégante pour les banquets mémorables."  },
     { id: 11, nom:"La Chope du Roy" , etablissement: "Restaurant", ville: "Tourmaline", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Une taverne populaire auprès des habitants, où les clients peuvent déguster des plats traditionnels dans une ambiance décontractée, souvent animée par des troubadours locaux."  },
     { id: 12, nom:"L'Hostellerie du Faucon" , etablissement: "Taverne", ville: "Clairbois", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un refuge accueillant pour les voyageurs, offrant une cuisine réconfortante et des chambres douillettes sous le signe d'un majestueux faucon en vol."  },
     { id: 13, nom:"Le Vieux Tonnelier" , etablissement: "Restaurant", ville: "Havresombre", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:" Une taverne établie dans un bâtiment en bois vieilli, célébrant l'art de la tonnellerie et servant des vins locaux dans une ambiance chaleureuse."  },
     { id: 14, nom:"La Taverne de l'Épée d'Argent" , etablissement: "Restaurant", ville: "Célestopolis", avis: 5, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Une taverne mystique réputée pour ses breuvages aromatiques et ses plats épicés, où chaque repas semble être imprégné de l'enchantement du Moyen Âge."  },
     { id: 15, nom:"Le Gobelet Enchanté" , etablissement: "Taverne", ville: "Forgefroid", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un restaurant au décor fantastique, orné de sculptures de griffons, proposant une cuisine audacieuse et créative pour ceux en quête d'une expérience culinaire unique."  },
     { id: 16, nom:"La Griffe du Griffon" , etablissement: "Taverne", ville: "Tourmaline", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:" Un établissement familial célèbre pour ses recettes transmises de génération en génération, offrant une cuisine réconfortante dans un cadre pittoresque près d'un château."  },
     { id: 17, nom:"La Cuisinière du Château" , etablissement: "Restaurant", ville: "Forgefroid", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un restaurant robuste au décor de forge, mettant en avant des plats copieux et des boissons revigorantes pour satisfaire les appétits des travailleurs acharnés."  },
     { id: 18, nom:"Le Festin du Forgeron" , etablissement: "Taverne", ville: "Havresombre", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Une auberge élégante où les convives peuvent déguster des mets délicats entourés de lys blancs, symbolisant la pureté et la noblesse."  },
     { id: 19, nom:"L'Auberge du Lys Blanc" , etablissement: "Restaurant", ville: "Havresombre", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un restaurant charmant où la décoration est centrée autour de la poterie et des éléments de contes de fées, offrant une expérience culinaire délicate et enchanteresse."  },
     { id: 20, nom:"La Poterie de la Princesse" , etablissement: "Restaurant", ville: "Forgefroid", avis: 2, image:"https://i.ibb.co/QfLtLNC/taverne-1.jpg" , presentation:"Un restaurant charmant où la décoration est centrée autour de la poterie et des éléments de contes de fées, offrant une expérience culinaire délicate et enchanteresse."  },
  
  ];

  app.get('/api/restaurants', (req, res) => {
    res.json(restaurants);
 });
 
 app.get('/api/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = restaurants.find((r) => r.id === restaurantId);
 
    if (!restaurant) {
       return res.status(404).json({ message: 'Restaurant not found' });
    }
 
    res.json(restaurant);
 });
 
 app.post('/api/restaurants', (req, res) => {
    const newRestaurant = req.body;
    newRestaurant.id = restaurants.length + 1;
    restaurants.push(newRestaurant);
 
    res.status(201).json(newRestaurant);
 });

 const activites = [
    { id: 1, nameA: 'Musée de la Préhistoire', textA: 'Bienvenue, gentil seigneur ou douce dame, à la demeure du Musée de la Préhistoire, où les parchemins et artefacts anciens narrent les récits lointains des premiers jours de notre monde. Plongez-vous dans l épopée des hommes des cavernes et des mystères des temps oubliés, contemplant les vestiges des aïeux qui ont jadis foulé cette terre.', imgA: 'https://i.ibb.co/GWxR9X0/1.png', localisationA: 'Castelbourg', rateA: '4.2', moneyEA: '8', moneyAA: '12', moneyFA: '25', clockSA: '9h - 12h30 / 14h - 18h', clockWA: '8h - 13h / 14h - 20h'},
    { id: 2, nameA: 'Musée de l Antiquité', textA: 'Voyagez dans le temps jusqu à l époque des anciens empires et des glorieuses civilisations au Musée de l Antiquité. Admirez les trésors gravés dans la pierre et la grandeur des héros oubliés, dont les exploits sont immortalisés dans des statues majestueuses. Que le savoir des temps révolus illumine votre esprit tel un flambeau dans l obscurité du passé.', imgA: 'https://i.ibb.co/HGmL3C7/2.png', localisationA: 'Clairbois', rateA: '2.7', moneyEA: '5', moneyAA: '8', moneyFA: '15', clockSA: '9h - 12h30 / 14h - 18h', clockWA: '8h - 13h / 14h - 20h'},
    { id: 3, nameA: 'Musée de l arme', textA: 'Entrez, noble visiteur, au Musée de l Arme, où les lames étincelantes et les boucliers impénétrables racontent les sagas des guerriers intrépides qui ont brandi ces armes avec bravoure sur les champs de bataille. Que l odeur de la forge et le son du métal résonnent à vos oreilles, vous rappelant les jours de gloire des chevaliers et des combattants valeureux.', imgA: 'https://i.ibb.co/tXP2Nb2/3.png', localisationA: 'Tourmaline', rateA: '3.8', moneyEA: '8', moneyAA: '12', moneyFA: '25', clockSA: '9h - 12h30 / 14h - 18h', clockWA: '8h - 13h / 14h - 20h'},
    { id: 4, nameA: 'Musée de la vaisselle', textA: 'Découvrez l élégance et la finesse au Musée de la Vaisselle, où des trésors de porcelaine, d argenterie et de verre vous transportent dans l opulence des banquets médiévaux. Plongez dans l art de la table des nobles et des seigneurs, et laissez-vous enivrer par la beauté des ustensiles qui ont jadis honoré les festins royaux.', imgA: 'https://i.ibb.co/Jdn7YXb/4.png', localisationA: 'Havresombre', rateA: '4.5', moneyEA: '3', moneyAA: '6', moneyFA: '10', clockSA: '9h - 12h30 / 14h - 18h', clockWA: '8h - 13h / 14h - 20h'},
    { id: 5, nameA: 'Musée d art', textA: 'Franchissez les portes du Musée d Art, où les œuvres maîtresses des artisans et des artistes vous transportent dans un monde de splendeur et de créativité. Contemplez les fresques murales, les sculptures gracieuses et les tableaux qui capturent l essence même de la beauté à travers les âges, témoignage de la grandeur artistique de notre noble histoire.', imgA: 'https://i.ibb.co/WPSTYsB/5.png', localisationA: 'Forgefroid', rateA: '3.6', moneyEA: '8', moneyAA: '12', moneyFA: '25', clockSA: '9h - 12h30 / 14h - 18h', clockWA: '8h - 13h / 14h - 20h'},
    { id: 6, nameA: 'Grotte de Célestopolis', textA: 'Bienvenue, voyageur intrépide, à la Grotte de Célestopolis, où les voiles de mystère et de magie dansent avec la lueur des cristaux célestes qui ornent les parois de cette sanctuaire souterrain. Explorez les profondeurs mystiques et laissez-vous envoûter par la douce mélodie des échos qui résonnent dans ces antres sacrées.', imgA: 'https://i.ibb.co/9yW4tz9/6.png', localisationA: 'Célestopolis', rateA: '4.4', moneyEA: '15', moneyAA: '25', moneyFA: '60', clockSA: '10h - 18h', clockWA: '10h - 22h'},
    { id: 7, nameA: 'Grotte de Brisevent', textA: 'Que vos pas vous guident vers la Grotte de Brisevent, où les souffles célestes se mêlent au doux murmure du vent. Les stalactites suspendues tels des joyaux célestes et les formations rocheuses sculptées par les éléments vous plongeront dans une symphonie de la nature, symbole de la puissance tranquille qui règne dans ce lieu magique.', imgA: 'https://i.ibb.co/vJjFbPY/7.png', localisationA: 'Brisevent', rateA: '5', moneyEA: '20', moneyAA: '30', moneyFA: '80', clockSA: '10h - 18h', clockWA: '10h - 22h'},
    { id: 8, nameA: 'Grotte de Sylvestrie', textA: 'Soyez bienvenu à la Grotte de Sylvestrie, où les racines des arbres anciens pénètrent délicatement la roche, créant un sanctuaire secret au cœur de la forêt. La lumière tamisée à travers le feuillage crée une ambiance féerique, tandis que les murmures de la nature résonnent, rappelant les mystères et les légendes qui habitent ces lieux enchantés.', imgA: 'https://i.ibb.co/qsRwB3V/8.png', localisationA: 'Sylvestrie', rateA: '4.2', moneyEA: '13', moneyAA: '23', moneyFA: '52', clockSA: '10h - 18h', clockWA: '10h - 22h'},
    { id: 9, nameA: 'Grotte de Aubeclaire', textA: 'Entrez, noble visiteur, dans la Grotte d Aubeclaire, où la lueur délicate des cristaux scintillants révèle les teintes pastel des gemmes cachées dans les profondeurs. Que la douce lumière de l aube éclaire votre chemin, vous invitant à contempler les joyaux naturels et à vous émerveiller devant la beauté intemporelle de cette caverne resplendissante.', imgA: 'https://i.ibb.co/d70WKKR/9.png', localisationA: 'Aubeclaire', rateA: '4.7', moneyEA: '18', moneyAA: '28', moneyFA: '72', clockSA: '10h - 18h', clockWA: '10h - 22h'},
    { id: 10, nameA: 'Grotte de Montéclat', textA: 'Franchissez les portails de la Grotte de Montéclat, un sanctuaire caché au sommet des montagnes, où les formations rocheuses majestueuses et les cascades cristallines créent une harmonie parfaite entre la terre et le ciel. Laissez-vous emporter par l aura majestueuse de ce lieu, où la nature façonne avec grâce les édifices de pierre qui témoignent du passage des âges.', imgA: 'https://i.ibb.co/F7YvJq9/10.png', localisationA: 'Montéclat', rateA: '4.1', moneyEA: '12', moneyAA: '22', moneyFA: '48', clockSA: '10h - 18h', clockWA: '10h - 22h'},
    { id: 11, nameA: 'Jeu d Echec', textA: 'Bienvenue, nobles esprits tactiques, sur l échiquier du Jeu d Échecs, où rois et reines dirigent leurs armées dans une danse stratégique. Chaque coup est une manœuvre audacieuse, et la victoire appartient à celui qui peut anticiper les mouvements de son adversaire avec astuce. Que votre esprit soit aiguisé comme une lame de chevalier, et que vos pièces avancent avec la grâce des nobles sur le champ de bataille.', imgA: '', localisationA: 'Castelbourg', rateA: '3.5', moneyEA: '2', moneyAA: '5', moneyFA: '10', clockSA: '10h - 12h', clockWA: 'h - h'},
    { id: 12, nameA: 'Jeu de cartes', textA: 'Que la chance vous sourie au Jeu de Cartes, où les rois, dames et valets s alignent dans des combinaisons mystérieuses. Les cartes sont le reflet du destin, et chaque partie est une aventure où la ruse et la chance s entremêlent. Puissiez-vous jouer vos atouts avec sagesse et triompher dans cette joute de hasard et d habileté.', imgA: '', localisationA: 'Clairbois', rateA: '4.5', moneyEA: '2', moneyAA: '5', moneyFA: '10', clockSA: 'h - h', clockWA: '10h - 13h'},
    { id: 13, nameA: 'Jeu de l oie', textA: 'Bienvenue sur le plateau du Jeu de l Oie, où chaque lancer de dé vous rapproche du triomphe ou du défi. Les cases dévoilent des mystères et des embûches, et seuls les joueurs les plus rusés réussiront à atteindre la case finale. Que votre chemin soit semé de bonnes fortunes, et que la victoire vous mène avec légèreté sur le chemin enchanté de cette course ludique.', imgA: '', localisationA: 'Tourmaline', rateA: '4', moneyEA: '10', moneyAA: '15', moneyFA: '35', clockSA: 'h - h', clockWA: '14h - 18h'},
    { id: 14, nameA: 'Course orientation', textA: 'Partez à l aventure dans la forêt dense de la Course d Orientation, où la boussole est votre guide et la carte votre compagne. Les balises dissimulées dans l épaisse végétation exigent une connaissance astucieuse du terrain et une compréhension fine de l orientation. Que vos pas soient assurés et que votre sens de l aventure vous mène à travers bois et vallées vers la victoire finale.', imgA: '', localisationA: 'Havresombre', rateA: '2.7', moneyEA: '5', moneyAA: '10', moneyFA: '20', clockSA: 'h - h', clockWA: '14h - 18h'},
    { id: 15, nameA: '', textA: '', imgA: '', localisationA: 'Forgefroid', rateA: '', moneyEA: '', moneyAA: '', moneyFA: '', clockSA: 'h - h', clockWA: 'h - h'},
    { id: 16, nameA: 'Tir à l arc', textA: 'Bienvenue, braves compétiteurs, à l Arène du Tir à l Arc, où les flèches volent telle une pluie de lances dans un ballet gracieux. Les archers, habiles et précis, défient les cibles lointaines avec une détermination digne des héros des légendes anciennes. Que votre œil soit affûté et votre arc tendu, car la gloire vous attend au bout de chaque volée.', imgA: '', localisationA: 'Célestopolis', rateA: '4.7', moneyEA: '10', moneyAA: '15', moneyFA: '30', clockSA: '10h - 16h', clockWA: '8h - 18h'},
    { id: 17, nameA: 'Lancé de Javelot', textA: 'Que les Dieux guident vos lances au Champ de Lancé de Javelot, où les guerriers athlétiques mesurent leur force et leur adresse. L air vibrant du passage des javelots ajoute une musique virile à cette compétition, où seuls les plus vaillants sauront faire trembler les cieux de leur habileté et de leur bravoure.', imgA: '', localisationA: 'Brisevent', rateA: '3.8', moneyEA: '5', moneyAA: '8', moneyFA: '15', clockSA: 'h - h', clockWA: '10h - 12h'},
    { id: 18, nameA: 'Equitation', textA: 'Sellez vos destriers et entrez dans l arène équestre, où l art noble de l Équitation prend vie. Cavaliers et chevaux ne font qu un, exécutant des mouvements gracieux et puissants dans une danse harmonieuse. Que le galop de votre monture résonne tel le tonnerre, emportant votre renommée au galop vers les sommets.', imgA: '', localisationA: 'Sylvestrie', rateA: '3.1', moneyEA: '15', moneyAA: '25', moneyFA: '60', clockSA: '16h - 18h', clockWA: '10h - 16h'},
    { id: 19, nameA: 'Course', textA: 'Sur la piste de Course, que vos jambes soient rapides comme le vent, défiant la distance avec une détermination féroce. Les foules acclament les athlètes qui franchissent la ligne d arrivée, glorifiant leur agilité et leur endurance dans cette épreuve où chaque pas compte.', imgA: '', localisationA: 'Aubeclaire', rateA: '1.5', moneyEA: '0', moneyAA: '0', moneyFA: '0', clockSA: 'h - h', clockWA: '13h - 15h'},
    { id: 20, nameA: 'Jeu de Paume', textA: 'Bienvenue au Jeu de Paume, où la balle rebondit sur les murs comme le destin lui-même. Les joueurs rivalisent dans un ballet frénétique, utilisant des raquettes habilement maniées pour renvoyer la balle avec une précision digne des plus grands stratèges. Que chaque échange soit une démonstration de virtuosité, captivant les spectateurs dans cette joute athlétique digne des cours royales.', imgA: '', localisationA: 'Montéclat', rateA: '4.6', moneyEA: '3', moneyAA: '8', moneyFA: '20', clockSA: '16h - 18h', clockWA: '14h - 18h'},
    { id: 21, nameA: 'Théâtre de Castelbourg', textA: 'Bienvenue, honorables spectateurs, au Théâtre de Castelbourg, où les rideaux de velours s ouvrent sur des récits captivants et des performances dignes des cours royales. Plongez-vous dans l art dramatique et laissez-vous emporter par la magie des acteurs qui donnent vie à des légendes éternelles sur les planches de ce noble établissement.', imgA: 'https://i.ibb.co/7XqGyks/21.png', localisationA: 'Castelbourg', rateA: '3.6', moneyEA: '15', moneyAA: '20', moneyFA: '40', clockSA: '17h - 19h', clockWA: '18h - 22h'},
    { id: 22, nameA: 'Théâtre de Clairbois', textA: 'Que les échos des applaudissements résonnent au Théâtre de Clairbois, un lieu où l atmosphère enchanteresse transporte les spectateurs dans un monde de fantaisie. Les décors somptueux et les costumes élégants servent de toile de fond à des pièces qui célèbrent l imagination et l éclat des arts scéniques.', imgA: 'https://i.ibb.co/x3sjDVK/22.png', localisationA: 'Clairbois', rateA: '4.7', moneyEA: '-', moneyAA: '40', moneyFA: '-', clockSA: '18h - 22h', clockWA: '20h - 00h'},
    { id: 23, nameA: 'Théâtre de Tourmaline', textA: 'Soyez les bienvenus au Théâtre de Tourmaline, où la scène brille comme une gemme rare, éclairant les talents exceptionnels des artistes qui se produisent dans ce lieu éblouissant. Les drames passionnés et les comédies enjouées résonnent à travers les murs, créant une atmosphère de célébration de l art théâtral.', imgA: 'https://i.ibb.co/nbJb5f6/23.png', localisationA: 'Tourmaline', rateA: '2.6', moneyEA: '5', moneyAA: '10', moneyFA: '20', clockSA: '17h - 19h', clockWA: '18h - 22h'},
    { id: 24, nameA: 'Théâtre de Havresombre', textA: 'Entrez, nobles spectateurs, dans le Théâtre de Havresombre, un sanctuaire où les ombres et la lumière dansent en harmonie, donnant vie à des pièces envoûtantes. L obscurité théâtrale crée une aura mystérieuse, amplifiant l impact émotionnel des performances qui se déroulent sous les projecteurs.', imgA: 'https://i.ibb.co/nQQ1Tcx/24.png', localisationA: 'Havresombre', rateA: '3.7', moneyEA: '15', moneyAA: '20', moneyFA: '40', clockSA: '17h - 19h', clockWA: '18h - 22h'},
    { id: 25, nameA: 'Théâtre de Forgefroid', textA: 'Franchissez les portes du Théâtre de Forgefroid, un lieu où la chaleur des récits dramatiques se mêle à la froideur de l acier. Les acteurs, tels des forgerons du divertissement, faconnent des moments inoubliables sur scène, créant un équilibre entre la passion ardente et la résilience glaciale. Que le rideau se lève sur un spectacle inoubliable dans ce théâtre unique en son genre.', imgA: 'https://i.ibb.co/v4y4d3n/25.png', localisationA: 'Forgefroid', rateA: '4.5', moneyEA: '-', moneyAA: '40', moneyFA: '-', clockSA: '18h - 22h', clockWA: '20h - 00h'}
 ];

 app.get('/api/activites', (req, res) => {
    res.json(activites);
 });
 
 app.get('/api/activites/:id', (req, res) => {
    const activitesId = parseInt(req.params.id);
    const activite = activites.find((r) => r.id === activitesId);
 
    if (!activite) {
       return res.status(404).json({ message: 'Activite not found' });
    }
 
    res.json(activite);
 });
 
 app.post('/api/restaurants', (req, res) => {
    const newActivite = req.body;
    newActivite.id = activites.length + 1;
    activites.push(newActivite);
 
    res.status(201).json(newActivite);
 });

app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
