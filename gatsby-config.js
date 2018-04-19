module.exports = {
  siteMetadata: {
    title: 'The Bastion Bot - One of the best Discord Bot',
    description: 'Give awesome perks to your Discord server!',
    image: 'https://resources.bastionbot.org/og-image.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#62d7fb'
      },
    }
  ]
};
