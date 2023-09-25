// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Define a type for valid language keys
type Language = 'en' | 'ar' | 'fr';

const data = {
    en: {
        intilaka: "Discover Intilaka, a dynamic association that celebrates diverse passions and intellectual connections. Our motto, 'Where passions meet, minds ignite,' embodies our mission to stimulate creativity and learning through our unique clubs in programming, theater, astronomy, and literature. In this fertile ground, passionate intersections give rise to innovation and inspiration, creating a space where everyone explores, expands their creativity, and connects seemingly distant worlds. Whether you're amazed by the stars, captivated by theater, passionate about words, or intrigued by programming, join us on this exciting journey where curious minds flourish and passions drive learning and fun.",
        Certificate:"Certificate",
        Certificate2:"There are certificates for all courses.",
        exp:[
          {
            label: 'Students',
            value: '100+',
          },
          {
            label: 'Quality Course',
            value: '10+',
          },
          {
            label: 'Experience Mentors',
            value: '10+',
          },
        ],
        Started:'Get Started',
      },
    ar: {
        intilaka: "اكتشف إنطلاقة، جمعية ديناميّة تحتفل بالشغف المتنوع والروابط الفكريّة. شعارنا 'حيث تلتقي الشغف، تشتعل العقول' يجسد مهمتنا في تحفيز الإبداع والتعلّم من خلال نوادينا الفريدة في البرمجة، والمسرح، والفلك، والأدب. في هذا البيئة الخصبة، تلتقي الاهتمامات المتباينة لتخلق الابتكار والإلهام، مما يخلق مساحة يستكشف فيها الجميع ويوسّعون إبداعهم، ويربطون عوالم بعيدة المنال. سواء كنت مسحورًا بالنجوم، أو مسحوبًا إلى عالم المسرح، أو متحمسًا للكلمات، أو مثيرًا للاهتمام بالبرمجة، انضم إلينا في هذه الرحلة المثيرة حيث تزدهر العقول الفضولية وحيث تدفع الشغف عملية التعلّم واللعب.",
        Certificate:"شهادة",
        Certificate2:"هناك شهادات لجميع الدورات",  
        exp:[
          {
            label: 'الطلاب',
            value: '100+',
          },
          {
            label: 'جودة الدورة',
            value: '10+',
          },
          {
            label: 'المرشدين ذوي الخبرة',
            value: '10+',
          },
        ],
        Started:'ابدأ الآن',
      },
    fr: {
        intilaka:"Découvrez Intilaka, une association dynamique qui célèbre les passions diverses et les liens intellectuels. Notre devise, 'Là où les passions se rencontrent, les esprits s'enflamment', incarne notre mission de stimuler la créativité et l'apprentissage via nos clubs uniques en programmation, théâtre, astronomie et littérature. Dans ce vivier, les croisements passionnés engendrent innovation et inspiration, créant un espace où chacun explore, élargit sa créativité et connecte des mondes apparemment éloignés. Que vous soyez émerveillé par les étoiles, captivé par le théâtre, passionné par les mots ou intrigué par la programmation,  rejoignez-nous dans ce parcours passionnant où les esprits curieux prospèrent et où les passions propulsent l'apprentissage et le ludique.",
        Certificate:"Certificat",
        Certificate2:"Il y a des certificats pour tous les cours",
        exp:[
          {
            label: 'Étudiants',
            value: '100+',
          },
          {
            label: 'Cours de qualité',
            value: '10+',
          },
          {
            label: 'Mentors expérimentés',
            value: '10+',
          },
        ],
        Started:'Début',

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
  