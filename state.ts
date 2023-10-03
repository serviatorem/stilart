import { IProject } from '~/interfaces/IProject'
import { IService } from '~/interfaces/IService'

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Шоу рум IKEA',
    image: 'projects_1-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_1-1.jpg', 'projects_1-2.jpg', 'projects_1-3.jpg', 'projects_1-4.jpg', 'projects_1-5.jpg', 'projects_1-6.jpg', 'projects_1-7.jpg', 'projects_1-8.jpg', 'projects_1-9.jpg', 'projects_1-10.jpg']
    }
  },
  {
    id: 2,
    name: 'Шоу рум IKEA',
    image: 'projects_2-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_2-1.jpg', 'projects_2-2.jpg', 'projects_2-3.jpg', 'projects_2-4.jpg', 'projects_2-5.jpg', 'projects_2-6.jpg', 'projects_2-7.jpg', 'projects_2-8.jpg', 'projects_2-9.jpg', 'projects_2-10.jpg', 'projects_2-11.jpg', 'projects_2-12.jpg']
    }
  },
  {
    id: 3,
    name: 'Шоу рум IKEA',
    image: 'projects_3-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_3-1.jpg', 'projects_3-2.jpg', 'projects_3-3.jpg', 'projects_3-4.jpg', 'projects_3-5.jpg', 'projects_3-6.jpg', 'projects_3-7.jpg', 'projects_3-8.jpg']
    }
  },
  {
    id: 4,
    name: 'Шоу рум IKEA',
    image: 'projects_4-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_4-1.jpg', 'projects_4-2.jpg', 'projects_4-3.jpg', 'projects_4-4.jpg', 'projects_4-5.jpg', 'projects_4-6.jpg']
    }
  },
  {
    id: 5,
    name: 'Шоу рум IKEA',
    image: 'projects_5-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_5-1.jpg', 'projects_5-2.jpg', 'projects_5-3.jpg', 'projects_5-4.jpg', 'projects_5-5.jpg', 'projects_5-6.jpg', 'projects_5-7.jpg', 'projects_5-8.jpg', 'projects_5-9.jpg', 'projects_5-10.jpg', 'projects_5-11.jpg', 'projects_5-12.jpg', 'projects_5-13.jpg', 'projects_5-14.jpg', 'projects_5-15.jpg', 'projects_5-16.jpg', 'projects_5-17.jpg', 'projects_5-18.jpg', 'projects_5-19.jpg', 'projects_5-20.jpg', 'projects_5-21.jpg', 'projects_5-22.jpg', 'projects_5-23.jpg', 'projects_5-23.jpg', 'projects_5-24.jpg', 'projects_5-25.jpg', 'projects_5-26.jpg', 'projects_5-27.jpg', 'projects_5-28.jpg', 'projects_5-30.jpg']
    }
  },
  {
    id: 6,
    name: 'Шоу рум IKEA',
    image: 'projects_1-1.jpg',
    info: {
      year: '2021',
      square: '125 м2',
      designers: 'Тихон и я',
      decorator: 'Тихон',
      photograph: 'Тихон',
      countRoom: '4',
      term: '10 месяцев',
      images: ['projects_1-1.jpg', 'projects_1-2.jpg', 'projects_1-3.jpg', 'projects_1-4.jpg', 'projects_1-5.jpg', 'projects_1-6.jpg', 'projects_1-7.jpg', 'projects_1-8.jpg', 'projects_1-9.jpg', 'projects_1-10.jpg']
    }
  }
]

export const services: IService[] = [
  {
    id: 1,
    img: 'services1.png',
    title: 'Заходи и живи',
    descriptionFirstPage: 'Мгновенный путеводитель в мир беззаботности и комфорта. Мы предлагаем полное сопровождение вашего ремонтного проекта от начала и до самого завершения.',
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
  },
  {
    id: 2,
    img: 'services2.png',
    title: 'Ремонт',
    descriptionFirstPage: 'Мы предлагаем вам профессиональные услуги ремонта, чтобы ваши дома, офисы и пространства стали идеально подходить к вашему стилю и потребностям.',
    description: [
      {
        id: 1,
        briefly: 'Общестроительные работы',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 2,
        briefly: 'Инженерные работы',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 3,
        briefly: 'Отделочные работы',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 4,
        briefly: 'Закупка всех материалов',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 5,
        briefly: 'Технический надзор',
        full: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      }
    ]
  },
  {
    id: 3,
    img: 'services2.png',
    title: 'Дизайн-проект',
    descriptionFirstPage: 'Уникальное искусство создания и воплощения креативных идей. Вместе мы сможем воплотить мечты в реальность.',
    description: [
      {
        id: 1,
        briefly: 'Обмерный план',
        full: ['Высота и ширина каждой стены', 'Параметры оконных и дверных проёмов', 'Расположение вентиляционных шахт', 'Расположение систем электроснабжения', 'водоснабжения и водоотведения', 'Расположение системы отопления', 'Расположение других имеющихся инженерных коммуникаций']
      },
      {
        id: 2,
        briefly: 'Планировочное решение',
        full: ['План расстановки мебели', 'План монтажа и демонтажа стен', 'План зонирования помещения', 'План покрытия пола', 'План теплого пола и радиаторов', 'План уровней потолка']
      },
      {
        id: 3,
        briefly: 'План сантехнического и осветительного оборудования',
        full: ['Схема размещения сантехнического оборудования', 'Схема подключения сантехнического оборудования', 'План расстановки светильников', 'План расстановки электроустановочного оборудования', 'Спецификация электрооборудования']
      },
      {
        id: 4,
        briefly: 'Развертки стен',
        full: ['Проемы окон, дверей', 'Проекции мебели', 'Все существенные декоративные детали', 'Электрическая часть', 'Выноски с размерами и высотами']
      },
      {
        id: 5,
        briefly: 'Визуализация',
        full: ['Моделирование 2-3 ракурсов на каждую комнату', 'Фактурные составляющие стен, полов, потолков и мебели', 'Цветовая гамма каждого помещения', 'Планировка квартиры и месторасположение мебели']
      }
    ]
  }
]
