const WORKS_DATA = [
  // {
  //   id: 1,
  //   thumbnail: 'images/thumbnails/bestshop-thumbnail.png',
  //   images: [],
  //   linkDemo: '/',
  //   linkGithub: 'https://github.com/DariuszMeissner/Portfolio',
  //   title: 'Portfolio',
  //   subtitle: 'subtitle',
  //   description:
  //     'My own portfolio website.\nI played with connecting React with 3D effects. To typechecking i used Prop-types library.',
  //   features: ['mini game', '3d model'],
  //   customHooks: ['useTimeout', 'useImageLoad'],
  //   techStack: [
  //     'React',
  //     'Prop types',
  //     'React three fiber',
  //     'Context api',
  //     'React transition group'
  //   ],
  //   date: 'January 2023',
  //   tag: 'web'
  // },
  {
    id: 2,
    thumbnail: 'images/thumbnails/store-thumbnail.png',
    images: [
      'images/react-store/store1.png',
      'images/react-store/store2.png',
      'images/react-store/store3.png',
      'images/react-store/store4.png',
      'images/react-store/store5.png',
      'images/react-store/store6.png',
      'images/react-store/store7.png',
      'images/react-store/store8.png',
      'images/react-store/store9.png',
      'images/react-store/store10.png',
      'images/react-store/store11.png',
      'images/react-store/store12.png'
    ],
    linkDemo: 'https://dariuszmeissner.github.io/React-Store-theme/',
    linkGithub: 'https://github.com/DariuszMeissner/React-Store-theme',
    title: 'Ecommerce site',
    subtitle: 'subtitle',
    description:
      'Private project to learn create ecommerce website with typescript.',
    customHooks: [
      'useSizeScreen: to detect size of screen',
      'useRect: to get primary value of element from getBoundingClientRect()',
      'useOutClick: to detect click out of element',
      'useImageLoad: to detect when image is loading',
      'useForm: to automate fill out inputs, detect errors and validate',
      'seDisableScroll: to turn off/on scroll when modal is close/open'
    ],
    features: [
      'Pages: Home page, Products listing page, Product page, Checkout page, Thank you page',
      'Full responsive website(breakpoints:S: 767, M: 768, L: 1024, X: 1365)',
      'One page Checkout with 4 steps',
      'Custom Validation of inputs',
      'Meganav',
      'Minibag',
      'Sticky Header',
      'Mobile menu with levels',
      'Filters on products listing page',
      'Zoom gallery'
    ],
    techStack: [
      'React',
      'Typescript',
      'React hooks',
      'Custom Hooks',
      'Redux Toolkit',
      'RTK Query',
      'Inline style and animations',
      'Fake Rest Api(dummyJSON)',
      'Loading skeleton',
      'React Router',
      'Swiper slider'
    ],
    date: 'December 2022',
    tag: 'web'
  },
  {
    id: 3,
    thumbnail: 'images/thumbnails/speedClick-thumbnail.png',
    images: [
      'images/speed-click/speedClick1.png',
      'images/speed-click/speedClick2.png',
      'images/speed-click/speedClick3.png',
      'images/speed-click/speedClick4.png',
      'images/speed-click/speedClick5.png',
      'images/speed-click/speedClick6.png'
    ],
    linkDemo: 'https://dariuszmeissner.github.io/SpeedClick-React/',
    linkGithub: 'https://github.com/DariuszMeissner/SpeedClick-React',
    title: 'SpeedClick Game',
    subtitle: 'subtitle',
    description:
      'You have to click many time as possible within the given time.\nSecond version of game with refreshed design.',
    features: [
      'set time of game',
      'remembering the best result',
      'menu after the game'
    ],
    techStack: [
      'React',
      'Typescript',
      'Context Api',
      'React Router',
      'React Transition Group'
    ],
    date: 'October 2022',
    tag: 'web'
  },
  {
    id: 4,
    thumbnail: 'images/thumbnails/textEditor-thumbnail.png',
    images: [''],
    linkDemo: 'https://dariuszmeissner.github.io/Online-text-editor/',
    linkGithub: 'https://github.com/DariuszMeissner/Online-text-editor',
    title: 'Online text editor',
    subtitle: 'JavaScript text editor',
    description: 'A little experiment to try create text editor in javascript',
    features: [
      'bold',
      'underline',
      'italic',
      'align(center, left, right)',
      'font-size',
      'font-name',
      'uppercase',
      'regular',
      'color',
      'save document to pdf',
      'save document to.txt format',
      'open document from.txt format'
    ],
    customHooks: [],
    techStack: ['React', 'Typescript'],
    date: 'September 2022',
    tag: 'web'
  },
  {
    id: 5,
    thumbnail: 'images/thumbnails/meal-planner-thumbnail.png',
    images: [
      'images/meal-planner/meal-planner1.png',
      'images/meal-planner/meal-planner2.png',
      'images/meal-planner/meal-planner3.png',
      'images/meal-planner/meal-planner4.png',
      'images/meal-planner/meal-planner5.png',
      'images/meal-planner/meal-planner6.png'
    ],
    linkDemo: 'https://dariuszmeissner.github.io/Meal-Planner-App-JS/app.html',
    linkGithub: 'https://github.com/DariuszMeissner/Meal-Planner-App-JS',
    title: 'Meal Planner',
    subtitle: 'subtitle',
    description:
      'Application and landing page for planning meals.\nScrum project during workshop Coders Lab school.',
    features: [
      'user login by Web Storage Api',
      'saving recipes and schedules in Web Storage Api',
      'images carousel',
      'hamburger menu',
      'dashboard to planning meals',
      'adding and saving plans and recipes',
      'planning schedules based on recipes added earlier',
      'dashboard: displaying current or closest schedules based on current week of year',
      'rendering list of recipes and schedules',
      'removing instruction or ingredient during adding new recipes'
    ],
    customHooks: [],
    techStack: ['HTML5', 'JavaScript', 'SASS', 'RWD', 'BEM'],
    date: 'October 2021',
    tag: 'web'
  },
  {
    id: 6,
    thumbnail: 'images/thumbnails/bestshop-thumbnail.png',
    images: [
      'images/bestshop/bestshop-layout1.jpg',
      'images/bestshop/bestshop-layout2.jpg',
      'images/bestshop/bestshop-layout3.jpg',
      'images/bestshop/bestshop-layout4.jpg',
      'images/bestshop/bestshop-layout5.jpg',
      'images/bestshop/bestshop-layout6.jpg',
      'images/bestshop/bestshop-layout7.jpg'
    ],
    linkDemo: 'https://dariuszmeissner.github.io/BestShop-web-app/',
    linkGithub: 'https://github.com/DariuszMeissner/BestShop-web-app',
    title: 'BestShop',
    subtitle: 'subtitle',
    description:
      'This is my fisrt web application which im making during workshop Coders Lab school',
    features: [
      'sticky header',
      'hamburger menu',
      'full responsive',
      'modular sections of page(BEM)',
      'grid system',
      'full customize from variables: colors, fonts size, space, shapes',
      ' product calculator'
    ],
    techStack: ['HTML5', 'JavaScript', 'SASS', 'RWD', 'BEM'],
    date: 'August 2021',
    tag: 'web'
  }
]

export default WORKS_DATA
