/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

const nextConfig = (phase, {defaultConfig}) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env: {
        mongoDB_username: 'Swich313',
        mongoDB_password: 'Heisen313berg',
        mongoDB_cluster: 'cluster0.9uteo.mongodb.net',
        mongoDB_database: 'blog-dev'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongoDB_username: 'Swich313',
      mongoDB_password: 'Heisen313berg',
      mongoDB_cluster: 'cluster0.9uteo.mongodb.net',
      mongoDB_database: 'blog'
    }
  }
}

module.exports = nextConfig
