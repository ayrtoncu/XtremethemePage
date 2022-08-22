const settings = {
  "name": "xtreme",
  "state": {
    "frontity": {
      "url": "https://xtremecusco.com/",
      "title": "Xtreme Tourbulencia",
      "description": "Xtreme Tourism Agency"
    }
  },
  "packages": [
    {
      "name": "xtreme-theme",
      "state": {
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://xtremecusco.com/",
          "postTypes": [
            {
              type: "trip",
              endpoint: "trip",
              archive: "/trips"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
