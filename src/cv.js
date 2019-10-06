const translationProxy = require("./translation-proxy");

const cv = {
  name: "Johannes Ulén",
  locale$: {
    en: "en",
    sv: "sv"
  },
  now$: {
    en: "now",
    sv: "nu"
  },
  download$: {
    en: "Download",
    sv: "Ladda ned"
  },
  description$: {
    en: `Johannes Ulén's CV`,
    sv: `Johannes Uléns CV`
  },
  locales: {
    en: {
      name: "English",
      link: "/"
    },
    sv: {
      name: "Svenska",
      link: "/sv"
    }
  },
  title$: {
    en: `Johannes Ulén's CV`,
    sv: "Johannes Uléns CV"
  },
  email$: {
    en: "contact@johannesulen.se",
    sv: "kontakt@johannesulen.se"
  },
  phoneNumber$: {
    en: "+46738370791",
    sv: "0738370791"
  },
  location$: {
    en: "Västerås, Sweden",
    sv: "Västerås"
  },
  urlPrefix$: {
    en: "",
    sv: "/sv"
  },
  experience: {
    title$: {
      en: "Experience",
      sv: "Erfarenhet"
    },
    items: [
      {
        employer: "Lägenhetsbyte",
        role$: {
          en: "Full-stack developer",
          sv: "Full-stackutvecklare"
        },
        start: new Date("2019-09"),
        description$: {
          en: `Full-stack development using Node.js, Vue, and various AWS services, including Lambda, S3 and DynamoDB.`,
          sv: `Full-stackutveckling med hjälp av Node.js, Vue och olika AWS-tjänster, till exempel Lambda, S3 och DynamoDB.`
        },
        bulletPoints$: {
            en: [
                'Full-stack development using mainly Node.js and Vue',
                'Developed using CQRS and event sourcing principles',
                'Used various AWS services such as Lambda, S3, DynamoDB and Cognito'
            ],
            sv: [
                'Full-stackutveckling med fokus på Node.js och Vue',
                'Utvecklade enligt CQRS- och event sourcing-principer',
                'Använde diverse AWS-tjänster så som Lambda, S3, DynamoDB och Cognito'
            ]
        }
      },
      {
        employer: "Pingdom",
        role$: {
          en: "Full-stack developer",
          sv: "Full-stackutvecklare"
        },
        start: new Date("2017-05"),
        end: new Date("2019-09"),
        description$: {
          en: `Full-stack development with a focus on Node.js, Python, PHP and Go in different parts of the Pingdom product.`,
          sv: `Full-stackutveckling med fokus på Node.js, Python, PHP och Go i olika delar av Pingdoms produkt.`
        },
        bulletPoints$: {
          en: [
            "Worked mainly with JS, Node.js, Python, PHP and Go",
            "Implemented features and fixed bugs in all parts of the stack of the Pingdom product",
            "Was part of the migration from a homegrown billing system to Chargify"
          ],
          sv: [
            "Jobbade huvudsakligen med JS, Node.js, Python, PHP och Go",
            "Implementerade funktionalitet och fixade buggar i alla delar av stacken i Pingdoms produkt",
            "Var del av migrationen från ett hembyggt betalsystem till Chargify"
          ]
        }
      },
      {
        employer: "Rabalder Media",
        role$: {
          en: "Front-end developer",
          sv: "Front-endutvecklare"
        },
        start: new Date("2016-04"),
        end: new Date("2017-05"),
        description$: {
          en: `Web development with modern tools and languages. Mainly front-end (hosted on Netlify and the like), but also some back-end on both custom infrastructure and PaaS systems like Heroku.`,
          sv: `Webbutveckling med moderna verktyg och språk. Mestadels front-end (hostad på bland annat Netlify), men även en hel del back-end på egen infrastruktur samt på PaaS-system som Heroku.`
        },
        bulletPoints$: {
          en: [
            "Worked in a variety of projects with different customers",
            "Mainly front-end work hosted on Netlify, but also some back-end work on custom infrastructure and PaaS systems like Heroku",
            "Developed custom WordPress themes with Timber and Bedrock"
          ],
          sv: [
            "Jobbade i flera olika projekt med olika kunder",
            "Huvudsakligen front-endarbete hostat på Netlify, men även en del back-endarbete på egen infrastruktur samt PaaS-system som Heroku",
            "Utvecklade WordPress-teman med Timber och Bedrock"
          ]
        }
      },
      {
        employer: "CGI",
        role$: {
          en: "Developer",
          sv: "Utvecklare"
        },
        start: new Date("2015-11"),
        end: new Date("2016-04"),
        description$: {
          en: `Mainly web development in Java and ASP.NET.`,
          sv: `Huvudsakligen webbutveckling i Java och ASP.NET.`
        },
        bulletPoints$: {
          en: [
            "Mostly web development in Java and ASP.NET",
            "Maintenance work on a legacy system used in dentist offices in the Västernorrland county"
          ],
          sv: [
            "Huvudsakligen webbutveckling i Java och ASP.NET",
            "Underhållsarbete i ett legacysystem som används av tandläkare i Västernorrland"
          ]
        }
      }
    ]
  },
  education: {
    title$: {
      en: "Education",
      sv: "Utbildning"
    },
    items: [
      {
        title$: {
          en: "Bachelor of Science in Computer Engineering",
          sv: "Kandidatexamen i programvaruteknik"
        },
        start: new Date("2012"),
        end: new Date("2015"),
        location$: {
          en: "Mid Sweden University",
          sv: "Mittuniversitetet"
        }
      }
    ]
  }
};

module.exports = {
  en: translationProxy(cv, "en"),
  sv: translationProxy(cv, "sv")
};