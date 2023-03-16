/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

const nextConfig = (phase, {defaultConfig}) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env: {
        mongoDB_username: 'username',
        mongoDB_password: 'password',
        mongoDB_cluster: 'cluster',
        mongoDB_database: 'blog-dev'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongoDB_username: 'username',
      mongoDB_password: 'password',
      mongoDB_cluster: 'cluster',
      mongoDB_database: 'blog'
    }
  }
}

module.exports = nextConfig
