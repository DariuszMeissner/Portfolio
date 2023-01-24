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
    title: 'Simple Shop',
    subtitle: 'Ecommerce site',
    description:
      'Private project to learn create ecommerce website with typescript.\n Api from Fake Rest Api(dummyJSON).',
    customHooks: [
      'useSizeScreen: to detect size of screen',
      'useOutClick: to detect click out of element',
      'useImageLoad: to detect when image is loading',
      'useForm: to automate fill out inputs, detect errors and validate',
      'seDisableScroll: to turn off/on scroll when modal is close/open'
    ],
    features: [
      'Pages: Home, Products listing, Product page, Checkout, Thank you page',
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
      'Loading skeleton',
      'React Router'
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
    title: 'SpeedClick',
    subtitle: 'JavaScript Game',
    description:
      'You have to click many time as possible within the given time.\nSecond version of game with refreshed design.',
    features: [],
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
    title: 'Text editor',
    subtitle: 'JavaScript online text editor',
    description: 'A little experiment to try create text editor in javascript.',
    features: [
      'Bold',
      'Underline',
      'Italic',
      'Align(center, left, right)',
      'Font-size',
      'Font-name',
      'Uppercase',
      'Regular',
      'Color text',
      'Save document to pdf',
      'Save document to .txt format',
      'Open document from .txt format'
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
    subtitle: 'Plan your meal with application',
    description:
      'Application and landing page for planning meals.\nScrum project during workshop Coders Lab school 10.2021 r.',
    features: [
      'User login by Web Storage Api',
      'Saving recipes and schedules in Web Storage Api',
      'Images carousel',
      'Hamburger menu',
      'Dashboard to planning meals',
      'Adding and saving plans and recipes',
      'Planning schedules based on recipes added earlier',
      'Dashboard: displaying current or closest schedules based on current week of year',
      'Rendering list of recipes and schedules',
      'Removing instruction or ingredient during adding new recipes'
    ],
    customHooks: [],
    techStack: ['HTML5', 'JavaScript', 'SASS', 'BEM'],
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
    subtitle: 'First Landing page',
    description:
      'This is my fisrt web application which im making during workshop Coders Lab school 08.2021 r.',
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
