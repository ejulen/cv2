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
        employer: "Pingdom",
        role$: {
          en: "Fullstack developer",
          sv: "Fullstack-utvecklare",
        },
        start: new Date("2020-12-01"),
        bulletPoints$: {
          en: [
            "Developed and maintained backend services written in PHP, Go, Python, Node.js and C, and frontend systems written in Mithril and React",
            "Made improvements to internal tooling used by the majority of internal services and by all developers",
          ],
          sv: [
            "Utvecklade och underhöll backend-tjänster skrivna i PHP, Go, Python, Node.js och C, och frontend-system skrivna i Mithril och React",
            "Förbättrade interna verktyg som användes av majoriteten av interna system och av alla utvecklare",
          ]
        }
      },
      {
        employer: "Qasa",
        role$: {
          en: "Front-end developer",
          sv: "Front-endutvecklare"
        },
        start: new Date("2020-07-01"),
        end: new Date("2020-12-01"),
        bulletPoints$: {
          en: [
            "Wrote React-based views in the Qasa application",
            "Worked on a GraphQL API written in Ruby on Rails",
            "Developed and maintained internal tooling written in Node.js",
          ],
          sv: [
            "Skrev React-baserade vyer i Qasa-applikationen",
            "Jobbade på ett GraphQL-API skrivet i Ruby on Rails",
            "Utvecklade och underhöll interna verktyg skrivna i Node.js"
          ]
        }
      },
      {
        employer: "Westermo",
        role: "Software Engineer",
        start: new Date("2020-02-03"),
        end: new Date("2020-07-01"),
        bulletPoints$: {
          en: [
            "Developed and maintained the internal testing framework written in Python and Go",
            "Researched and experimented with running said framework in a Kubernetes cluster",
            "Helped with developing modern web applications using Node.js and Vue"
          ],
          sv: [
            "Utvecklade och underhöll det interna testramverket skrivet i Python och Go",
            "Undersökte och experimenterade med att köra ovan nämnda ramverk i ett Kubernetes-kluster",
            "Hjälpte till att utveckla moderna webbapplikationer med Node.js och Vue"
          ]
        }
      },
      {
        employer: "Lägenhetsbyte",
        role$: {
          en: "Fullstack developer",
          sv: "Fullstack-utvecklare"
        },
        start: new Date("2019-09"),
        end: new Date("2020-01-17"),
        bulletPoints$: {
          en: [
            "Full-stack development using mainly Node.js and Vue",
            "Developed using CQRS and event sourcing principles",
            "Used various AWS services such as Lambda, S3, DynamoDB and Cognito"
          ],
          sv: [
            "Full-stackutveckling med fokus på Node.js och Vue",
            "Utvecklade enligt CQRS- och event sourcing-principer",
            "Använde diverse AWS-tjänster så som Lambda, S3, DynamoDB och Cognito"
          ]
        }
      },
      {
        employer: "Pingdom",
        role$: {
          en: "Fullstack developer",
          sv: "Fullstack-utvecklare"
        },
        start: new Date("2017-05"),
        end: new Date("2019-09"),
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
          en: "Frontend developer",
          sv: "Frontend-utvecklare"
        },
        start: new Date("2016-04"),
        end: new Date("2017-05"),
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
