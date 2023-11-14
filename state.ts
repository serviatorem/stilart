import { IService } from '~/interfaces/IService'
export const services: IService[] = [
  {
    id: 1,
    img: 'services2.png',
    title: 'Дизайн-проект',
    descriptionFirstPage: [
      'Дизайн проект',
      'Ремонтные работы',
      'Авторский контроль',
      'Управление, закупки',
      'Комплектация',
      'Декор и аксессуары'
    ],
    description: [
      {
        id: 1,
        briefly: 'Перепланировка',
        full: ['Обмер и фото помещения', 'Планировка с расстановкой мебели, поиск идеи', 'Строительный чертёж', 'Демонтажный план', 'Таблица обмеров поверхностей']
      },
      {
        id: 2,
        briefly: '3D картинки',
        full: ['Дизайн-концепция', 'Визуализация помещений', 'Ведомость отделки помещений']
      },
      {
        id: 3,
        briefly: 'Сопутствующие чертежи',
        full: ['Схема размещения светильников', 'Схема размещения выключателей', 'Схема размещения электрооборудования', 'Схема привязки сан. оборудования', 'Развёртка внутренней поверхности стен с/у', 'Схема раскладки плитки', 'Схема теплого пола', 'План отделки пола', 'План потолка', 'Схема размещения карнизов', 'Схема открывания дверей', 'Фрагменты декоративного оформления', 'Чертежи нестандартных деталей', 'Спецификация отделочных материалов и оборудования', 'Планировка с расстановкой мебели']
      }
    ]
  },
  {
    id: 2,
    img: 'services2.png',
    title: 'Ремонт',
    descriptionFirstPage: [
      'Дизайн проект',
      'Ремонтные работы',
      'Авторский контроль',
      'Управление, закупки',
      'Комплектация',
      'Декор и аксессуары'
    ],
    description: [
      {
        id: 1,
        briefly: 'Инженерные работы',
        full: 'Инженерные работы при ремонте квартиры включают в себя проектирование и монтаж инженерных систем, таких как системы водоснабжения и канализации, электроснабжения, отопления, кондиционирования воздуха и других коммуникаций.'
      },
      {
        id: 2,
        briefly: 'Отделочные работы',
        full: 'Отделочные работы при ремонте квартиры могут включать в себя следующие виды работ: покраска и шпаклевка стен и потолков; укладка напольных покрытий, таких как ламинат, паркет, ковровое покрытие и керамическая плитка; установка межкомнатных дверей и окон; монтаж плинтусов и наличников; установка светильников и электрических розеток; установка сантехники, такой как унитазы, раковины, душевые кабины и ванны; установка климатического оборудования, такого как кондиционеры и вентиляционные системы. Важно учитывать, что последовательность отделочных работ может варьироваться в зависимости от конкретного проекта ремонта и требований заказчика.'
      },
      {
        id: 3,
        briefly: 'Закупка всех материалов',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 4,
        briefly: 'Технический надзор',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      }
    ]
  },
  {
    id: 3,
    img: 'services1.png',
    title: 'Заходи и живи',
    descriptionFirstPage: [
      'Дизайн проект',
      'Ремонтные работы',
      'Авторский контроль',
      'Управление, закупки',
      'Комплектация',
      'Декор и аксессуары'
    ],
    description: [
      {
        id: 1,
        briefly: 'Авторский контроль',
        full: ['Высота и ширина каждой стены', 'Параметры оконных и дверных проёмов', 'Расположение вентиляционных шахт', 'Расположение систем электроснабжения', 'водоснабжения и водоотведения', 'Расположение системы отопления', 'Расположение других имеющихся инженерных коммуникаций']
      },
      {
        id: 2,
        briefly: 'Перепланировка',
        full: ['План расстановки мебели', 'План монтажа и демонтажа стен', 'План зонирования помещения', 'План покрытия пола', 'План теплого пола и радиаторов', 'План уровней потолка']
      },
      {
        id: 3,
        briefly: 'Снабжение',
        full: ['Схема размещения сантехнического оборудования', 'Схема подключения сантехнического оборудования', 'План расстановки светильников', 'План расстановки электроустановочного оборудования', 'Спецификация электрооборудования']
      },
      {
        id: 4,
        briefly: 'Комплектация',
        full: ['Проемы окон, дверей', 'Проекции мебели', 'Все существенные декоративные детали', 'Электрическая часть', 'Выноски с размерами и высотами']
      }
    ]
  }
]
