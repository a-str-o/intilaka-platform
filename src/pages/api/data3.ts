// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Define a type for valid language keys
type Language = 'en' | 'ar' | 'fr';

const data = {
  
  en: {
    intilaka: "INTILAKA CLUBS",
    data : [
      {
        id: 1,
        cover: '/images/clubs/logos-05.png',
        title: "Coding Club",
        description: "Join our club to let your children explore the world of programming, unleash their creativity by creating engaging projects with Scratch, and master the art of algorithms to solve real-world challenges. Give them the opportunity to discover a new realm while growing, having fun, and learning!",
      },
      {
        id: 2,
        cover: '/images/clubs/logos-03.png',
        title: "PopCorn Theatre Club",
        description:  "A trainee in the art of theater can learn a variety of skills, such as acting, understanding characters, developing verbal and physical communication skills, and improving emotional expression abilities. Additionally, they may learn public speaking techniques, understand and interpret theatrical texts, and how to manage lighting, sound, and stage design.",
      },
      {
        id: 3,
        cover: '/images/clubs/logos-04.png',
        title: "Kepler Astro Club",
        description:  "Members of the astronomy club can benefit from educational courses, informative lectures, as well as workshops on astronomy and space-related topics. Additionally, they can also enjoy observation and stargazing evenings with telescopes.",
      },
      {
        id: 4,
        cover: '/images/clubs/logos-06.png',
        title: "Gutenberg Club",
        description: "Language is a bridge that enables us as individuals to transport our thoughts and ideas to the rest of the world. Be it written or spoken, it insists upon itself throughout our daily life. Evidently, poorly chosen words can make a great idea fall from grace; conversely, a good idea can rocket to the skies of success once conveyed through precise and pertinent phrasing. Gutenberg club envisages gifting its members with the wisdom of the word. Our goal is to make a crafty speaker and writer out of each of the  participants. Our club is a journey which will enable the members to manifest their inner wordsmith."
      },
    ],
  },
  ar: {
    intilaka: "أندية إنطلاقة",
    data : [
      {
        id: 1,
        cover: '/images/clubs/logos-05.png',
        title: "نادي البرمجة",
        description: "انضموا إلى نادينا لاستكشاف عالم البرمجة وتطوير مهارات الإبداع من خلال إنشاء مشاريع رائعة باستخدام سكراتش، وفهم الخوارزميات لحل التحديات الواقعية. دعوا أطفالكم يكتشفون عالماً جديداً وينمون بمرح وتحدي",
      },
      {
        id: 2,
        cover: '/images/clubs/logos-03.png',
        title: "نادي مسرح الفشار",
        description: "يمكن للمتدرب في فن المسرح أن يتعلم مجموعة متنوعة من المهارات، مثل التمثيل، وفهم الشخصيات، وتطوير مهارات التواصل اللفظي والجسدي، وتحسين قدرات الانفعال والتعبير عن المشاعر. بالإضافة إلى ذلك، قد يتعلم تقنيات الإلقاء والتحدث أمام الجمهور، وفهم النصوص المسرحية وتفسيرها، وكيفية التعامل مع الإضاءة والأصوات والديكور على المسرح.",
      },
      {
        id: 3,
        cover: '/images/clubs/logos-04.png',
        title: "نادي كيبلر للفلك",
        description: "يمكن للمنضم لنادي الفلك الاستفادة من دورات تعليمية و محاضرات تثقيفية، و كذا ورشات حول مواضيع الفلك و الفضاء. كما يمكنه ايضا الاستفادة و الاستمتاع بأمسيات الرصد و المشاهدة بالتلسكوب.",
        
      },
      {
        id: 4,
        cover: '/images/clubs/logos-06.png',
        title: "نادي غوتنبرغ",
        description: "اللغة هي جسر يمكننا  من خلاله نقل أفكارنا  كأفراد إلى باقي العالم. سواء كانت مكتوبة أو محكية، فإنها جزء لا يتجزأ حياتنا اليومية. من الواضح أن الفكرة و لو كانت على قدر عال من الروعة لن تلقى الترحاب ان عبر عنها بالكلمات الخطأ ؛ على الجانب الآخر، يمكن لفكرة جيدة أن تصعد إلى سماء النجاح بمجرد أن تنقل من عبر عبارات دقيقة وملائمة. يتصور نادي ݣوتنبرغ أن يهدي أعضاؤه حكمة الكلم. هدفنا هو جعل كل من المشاركين متحدثين وكتّاب ماهرين. نادينا هو رحلة ستمكن الأعضاء من تجسيد الفنان الذي بداخلهم"
      },
    ],
  },
  fr: {
    intilaka: "Clubs INTILAKA",
    data : [
      {
        id: 1,
        cover: '/images/clubs/logos-05.png',
        title: "Club de Codage",
        description: " Rejoignez notre club pour permettre à vos enfants d'explorer le monde de la programmation, de stimuler leur créativité en créant des projets captivants avec Scratch, et de maîtriser l'art des algorithmes pour résoudre des défis du monde réel. Offrez-leur l'opportunité de découvrir un nouvel univers tout en s'épanouissant et s'amusant !",
      },
      {
        id: 2,
        cover: '/images/clubs/logos-03.png',
        title: "Club de Théâtre PopCorn",
        description:  "Un stagiaire en art dramatique peut acquérir diverses compétences telles que l'interprétation, la compréhension des personnages, le développement des compétences de communication verbale et corporelle, ainsi que l'amélioration des capacités d'expression émotionnelle. De plus, il peut apprendre les techniques de prise de parole en public, la compréhension et l'interprétation des textes théâtraux, ainsi que la gestion de l'éclairage, du son et du décor sur scène."
      },
      {
        id: 3,
        cover: '/images/clubs/logos-04.png',
        title: "Club d'Astronomie Kepler",
        description: "Les membres du club d'astronomie peuvent bénéficier de cours éducatifs, de conférences informatives, ainsi que d'ateliers sur les sujets de l'astronomie et de l'espace. De plus, ils peuvent profiter des soirées d'observation et d'observation au télescope.",
      },
      {
        id: 4,
        cover: '/images/clubs/logos-06.png',
        title: "Club Gutenberg",
        description : "La langue est votre billet pour le succès ! Chez le Club Gutenberg, nous comprenons que chaque mot compte. Notre mission ? Vous transformer en un maître des mots, un orateur captivant et un écrivain expert. Avec nous, vos idées s'élèveront vers de nouveaux sommets. Rejoignez-nous aujourd'hui et embrassez la puissance des mots."
      },
    ],
  },
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
  