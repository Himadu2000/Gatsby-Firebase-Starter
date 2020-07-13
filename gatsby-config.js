if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = key => {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Your Description.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.google.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyB2dWStjEbFsuUBdtmE8zcd8J8FKc0lhsE",
          authDomain: "fir-starter-2ddeb.firebaseapp.com",
          databaseURL: "https://fir-starter-2ddeb.firebaseio.com",
          projectId: "fir-starter-2ddeb",
          storageBucket: "fir-starter-2ddeb.appspot.com",
          messagingSenderId: "485551547849",
          appId: "1:485551547849:web:febc68662ad3617a76f418",
          measurementId: "G-9KY32EERRD",
        },
        loginPath: "/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },
    // flamelink
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          projectId: "fir-starter-2ddeb",
          clientEmail:
            "firebase-adminsdk-j6qd9@fir-starter-2ddeb.iam.gserviceaccount.com",
          privateKey: privateKey,
          databaseURL: "https://fir-starter-2ddeb.firebaseio.com",
          storageBucket: "fir-starter-2ddeb.appspot.com",
        },
        dbType: "cf",
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: false,
      },
    },
  ],
}
