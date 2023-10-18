import { IProject } from '~/interfaces/IProject'
import { IService } from '~/interfaces/IService'

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Поселок отрадное',
    image: 'projects_3-1.jpg',
    images: [
      'projects_3-1.jpg',
      'projects_3-2.jpg',
      'projects_3-3.jpg',
      'projects_3-4.jpg',
      'projects_3-5.jpg',
      'projects_3-6.jpg',
      'projects_3-7.jpg',
      'projects_3-8.jpg',
      'projects_3-9.jpg',
      'projects_3-10.jpg',
      'projects_3-11.jpg',
      'projects_3-12.jpg',
      'projects_3-13.jpg',
      'projects_3-14.jpg',
      'projects_3-15.jpg',
      'projects_3-16.jpg',
      'projects_3-17.jpg',
      'projects_3-18.jpg',
      'projects_3-19.jpg',
      'projects_3-20.jpg',
      'projects_3-21.jpg',
      'projects_3-22.jpg',
      'projects_3-23.jpg',
      'projects_3-24.jpg',
      'projects_3-25.jpg',
      'projects_3-26.jpg',
      'projects_3-27.jpg',
      'projects_3-28.jpg',
      'projects_3-29.jpg',
      'projects_3-30.jpg',
      'projects_3-31.jpg',
      'projects_3-32.jpg',
      'projects_3-33.jpg'
    ]
  },
  {
    id: 2,
    name: 'ЖК Вишневый сад',
    image: 'projects_5-1.jpg',
    images: ['projects_5-1.jpg', 'projects_5-2.jpg', 'projects_5-3.jpg', 'projects_5-4.jpg', 'projects_5-5.jpg', 'projects_5-6.jpg', 'projects_5-7.jpg', 'projects_5-8.jpg', 'projects_5-9.jpg', 'projects_5-10.jpg', 'projects_5-11.jpg', 'projects_5-12.jpg', 'projects_5-13.jpg', 'projects_5-14.jpg', 'projects_5-15.jpg', 'projects_5-16.jpg', 'projects_5-17.jpg', 'projects_5-18.jpg', 'projects_5-19.jpg', 'projects_5-20.jpg', 'projects_5-21.jpg', 'projects_5-22.jpg', 'projects_5-23.jpg', 'projects_5-23.jpg', 'projects_5-24.jpg', 'projects_5-25.jpg', 'projects_5-26.jpg', 'projects_5-27.jpg', 'projects_5-28.jpg', 'projects_5-30.jpg']
  },
  {
    id: 3,
    name: 'ЖК Домашний',
    image: 'projects_4-1.jpg',
    images: ['projects_4-1.jpg', 'projects_4-2.jpg', 'projects_4-3.jpg', 'projects_4-4.jpg', 'projects_4-5.jpg', 'projects_4-6.jpg', 'projects_4-7.jpg', 'projects_4-8.jpg', 'projects_4-9.jpg', 'projects_4-10.jpg', 'projects_4-11.jpg', 'projects_4-12.jpg', 'projects_4-13.jpg', 'projects_4-14.jpg', 'projects_4-15.jpg', 'projects_4-16.jpg', 'projects_4-17.jpg', 'projects_4-18.jpg', 'projects_4-19.jpg', 'projects_4-20.jpg', 'projects_4-21.jpg']
  },
  {
    id: 4,
    name: 'ЖК Ясный',
    image: 'projects_6-1.jpg',
    images: ['projects_6-1.jpg', 'projects_6-2.jpg', 'projects_6-3.jpg', 'projects_6-4.jpg', 'projects_6-5.jpg', 'projects_6-6.jpg', 'projects_6-7.jpg', 'projects_6-8.jpg', 'projects_6-9.jpg', 'projects_6-10.jpg', 'projects_6-11.jpg', 'projects_6-12.jpg', 'projects_6-13.jpg', 'projects_6-14.jpg', 'projects_6-15.jpg', 'projects_6-16.jpg']
  },
  {
    id: 5,
    name: 'Проект 5',
    image: 'projects_1-1.jpg',
    images: ['projects_1-1.jpg', 'projects_1-2.jpg', 'projects_1-3.jpg', 'projects_1-4.jpg', 'projects_1-5.jpg', 'projects_1-6.jpg', 'projects_1-7.jpg', 'projects_1-8.jpg', 'projects_1-9.jpg', 'projects_1-10.jpg']
  },
  {
    id: 6,
    name: 'Проект 6',
    image: 'projects_2-1.jpg',
    images: ['projects_2-1.jpg', 'projects_2-2.jpg', 'projects_2-3.jpg', 'projects_2-4.jpg', 'projects_2-5.jpg', 'projects_2-6.jpg', 'projects_2-7.jpg', 'projects_2-8.jpg', 'projects_2-9.jpg', 'projects_2-10.jpg', 'projects_2-11.jpg', 'projects_2-12.jpg']
  }
]

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
