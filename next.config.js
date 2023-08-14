module.exports = {
  reactStrictMode: true,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  }
}
