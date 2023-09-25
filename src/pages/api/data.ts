// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Define a type for valid language keys
type Language = 'en' | 'ar' | 'fr';

const data = {
    en: {
        titleCoding: "Coding Club",
        descriptionCoding: "Discover the creative and stimulating world of programming by joining our coding club for children and adults! Learn to create your own games, websites, and applications while developing essential skills for the future. Regardless of your experience level, our club offers an exciting opportunity to explore technology in a fun and collaborative way. Join us to turn your ideas into digital reality starting today!",
        
        titlePopCorn: "PopCorn Theatre Club",
        descriptionPopCorn: "Immerse yourself in the fascinating universe of theater with the PopCorn Theatre Club! With 6 years of experience, we invite you to join a captivating artistic adventure. Explore stages, unleash your creativity, and discover the power of expression. Join us for an unforgettable theatrical experience!",
        
        titleKepler: "Kepler Astro Club",
        descriptionKepler: "Discover celestial mysteries like never before by joining our exciting astronomy club! Dive into the boundless universe of stars, planets, and galaxies, while exploring fascinating cosmic phenomena. Whether you're a novice or a seasoned astronomer, our club offers enriching experiences, captivating night observations, and lively discussions about the entire universe. Join us to expand your horizons and share your love for the cosmos with other curious minds.",
        
        titleGutenberg: "Gutenberg Club",
        descriptionGutenberg: "Immerse yourself in enchanted worlds, captivating plots, and unforgettable characters by joining our Book Club! Whether you're a fan of fiction, mystery, or science fiction, our club offers the perfect opportunity to share your literary impressions, explore new reading horizons, and discuss your favorite works with fellow enthusiasts. Join us to celebrate the power of words and discover literary treasures together.",
        
        intilaka: "Discover Intilaka, a dynamic association that celebrates diverse passions and intellectual connections. Our motto, 'Where passions meet, minds ignite,' embodies our mission to stimulate creativity and learning through our unique clubs in programming, theater, astronomy, and literature. In this fertile ground, passionate intersections give rise to innovation and inspiration, creating a space where everyone explores, expands their creativity, and connects seemingly distant worlds. Whether you're amazed by the stars, captivated by theater, passionate about words, or intrigued by programming, join us on this exciting journey where curious minds flourish and passions drive learning and fun."
    
    },
    ar: {
        titleCoding: "نادي البرمجة",
        descriptionCoding: "اكتشف عالم البرمجة الإبداعي والمثير من خلال الانضمام إلى نادي البرمجة للأطفال والبالغين! تعلم كيفية إنشاء ألعابك ومواقعك الإلكترونية وتطبيقاتك الخاصة وفي الوقت نفسه تطوير المهارات الأساسية للمستقبل. بغض النظر عن مستوى خبرتك، يقدم لك نادينا فرصة مثيرة لاستكشاف التكنولوجيا بطريقة ممتعة وتعاونية. انضم إلينا لتحويل أفكارك إلى واقع رقمي ابتداءً من اليوم!",
        
        titlePopCorn: "نادي المسرح  بوبكورن",
        descriptionPopCorn: "انغمس في عالم مسرحي مثير مع نادي المسرح  بوبكورن! بخبرة تمتد لست سنوات، ندعوك للانضمام إلى مغامرة فنية مشوقة. استكشف المسارح، وافتح أبواب إبداعك، واكتشف قوة التعبير. انضم إلينا لتجربة مسرحية لا تُنسى!",
        
        titleKepler: "نادي كيبلر الفلكي",
        descriptionKepler: "اكتشف أسرار السماء كما لم تفعل من قبل من خلال الانضمام إلى نادي الفلك كيبلر المثير! اغمر نفسك في عالم لا حدود له من النجوم والكواكب والمجرات، مع استكشاف الظواهر الكونية المذهلة. سواء كنت مبتدئًا أو عالم فلك متمرس، يقدم نادينا تجارب مثمرة، ومراقبات ليلية مشوقة، ومناقشات مفعمة بالحيوية حول كوننا بأسره. انضم إلينا لتوسيع آفاقك ومشاركة حبك للكون مع عقول فضولية أخرى.",
        
        titleGutenberg: "نادي غوتنبرغ",
        descriptionGutenberg: "انغمس في عوالم ساحرة، ومؤامرات مشوقة، وشخصيات لا تُنسى من خلال الانضمام إلى نادي غوتنبرغ للكتب! سواء كنت محبًا للخيال، أو للغموض، أو للخيال العلمي، يقدم نادينا الفرصة المثالية لمشاركة انطباعاتك الأدبية، واستكشاف آفاق قراءة جديدة، ومناقشة أعمالك المفضلة مع محبين آخرين. انضم إلينا لنحتفل بقوة الكلمات ونكتشف كنوز الأدب معًا."    ,

        intilaka: "اكتشف إنطلاقة، جمعية ديناميّة تحتفل بالشغف المتنوع والروابط الفكريّة. شعارنا 'حيث تلتقي الشغف، تشتعل العقول' يجسد مهمتنا في تحفيز الإبداع والتعلّم من خلال نوادينا الفريدة في البرمجة، والمسرح، والفلك، والأدب. في هذا البيئة الخصبة، تلتقي الاهتمامات المتباينة لتخلق الابتكار والإلهام، مما يخلق مساحة يستكشف فيها الجميع ويوسّعون إبداعهم، ويربطون عوالم بعيدة المنال. سواء كنت مسحورًا بالنجوم، أو مسحوبًا إلى عالم المسرح، أو متحمسًا للكلمات، أو مثيرًا للاهتمام بالبرمجة، انضم إلينا في هذه الرحلة المثيرة حيث تزدهر العقول الفضولية وحيث تدفع الشغف عملية التعلّم واللعب."

    },
    fr: {
        
        descriptionCoding: "Découvrez le monde créatif et stimulant de la programmation en rejoignant notre club de coding pour enfants et adultes ! Apprenez à créer vos propres jeux, sites web et applications tout en développant des compétences essentielles pour l'avenir. Peu importe votre niveau d'expérience, notre club vous offre une opportunité passionnante d'explorer la technologie de manière amusante et collaborative. Rejoignez-nous pour transformer vos idées en réalité numérique dès aujourd'hui !",
    
        titlePopCorn: "PopCorn Theatre Club",
        descriptionPopCorn: "Plongez dans l'univers fascinant du théâtre avec le club Popcorne ! Fort de 6 années d'expérience, nous vous invitons à rejoindre une aventure artistique captivante. Explorez les scènes, libérez votre créativité et découvrez le pouvoir de l'expression. Rejoignez-nous pour une expérience théâtrale inoubliable !",
    
        titleKepler: "Kepler Astro Club",
        descriptionKepler: "Découvrez les mystères célestes comme jamais auparavant en rejoignant notre passionnant club d'astronomie ! Plongez dans l'univers infini des étoiles, des planètes et des galaxies, tout en explorant les phénomènes cosmiques fascinants. Que vous soyez novice ou astronome chevronné, notre club offre des expériences enrichissantes, des observations nocturnes captivantes et des discussions animées sur l'ensemble de l'univers. Rejoignez-nous pour élargir vos horizons et partager votre amour du cosmos avec d'autres esprits curieux.",
    
        titleGutenberg: "Gutenberg Club",
        descriptionGutenberg: "Plongez dans des mondes enchantés, des intrigues captivantes et des personnages inoubliables en rejoignant notre Club de Livre ! Que vous soyez un amateur de fiction, de mystère ou de science-fiction, notre club offre l'occasion parfaite de partager vos impressions littéraires, d'explorer de nouveaux horizons de lecture et de discuter de vos œuvres préférées avec d'autres passionnés. Rejoignez-nous pour célébrer le pouvoir des mots et découvrir des trésors littéraires ensemble.",
        
        intilaka:"Découvrez Intilaka, une association dynamique qui célèbre les passions diverses et les liens intellectuels. Notre devise, 'Là où les passions se rencontrent, les esprits s'enflamment', incarne notre mission de stimuler la créativité et l'apprentissage via nos clubs uniques en programmation, théâtre, astronomie et littérature. Dans ce vivier, les croisements passionnés engendrent innovation et inspiration, créant un espace où chacun explore, élargit sa créativité et connecte des mondes apparemment éloignés. Que vous soyez émerveillé par les étoiles, captivé par le théâtre, passionné par les mots ou intrigué par la programmation,  rejoignez-nous dans ce parcours passionnant où les esprits curieux prospèrent et où les passions propulsent l'apprentissage et le ludique."
        
    }
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      if (req.method === 'GET') {
        const lang = req.query.lang as Language;
        const languageData = data[lang] || data['en'];
  
        res.status(200).json(languageData);
      } else {
        res.status(405).json({ message: 'Method not allowed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  