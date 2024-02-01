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

app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
