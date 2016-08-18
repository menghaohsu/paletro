module.exports = {
  "DATABASE_URI": "postgres://localhost:5432/bps",
  "SESSION_SECRET": "Optimus Prime is my real dad",
  "TWITTER": {
    "consumerKey": "jYkRXXrRC8u2pOOUrUD7AXi3J",
    "consumerSecret": "6cGaQg5WCK9L65wflTDNjNDr4QmoCxga4yVKKbpOcVTk31fwo2",
    "callbackUrl": "http://192.168.4.175:1337/auth/twitter/callback"

  },
  "FACEBOOK": {
    "clientID": "804385426364514",
    "clientSecret": "9d02855cdad8adcd4bbbf025acbc1f97",
    "callbackURL": "http://localhost:1337/auth/facebook/callback"
  },
  "GOOGLE": {
    "clientID": "682775662196-mv4nc2gd6sbi6ors1kde38et838dticl.apps.googleusercontent.com",
    "clientSecret": "wz4Ye8Uc9w9S1RX3jYNcTzfP",
    "callbackURL": "http://localhost:1337/auth/google/callback"
  },
  "STRIPE": {
    "testSecretKey": "sk_test_Xl8aPq2pTuHPSsUHJJLoeHhk",
    "testPublicKey": "pk_test_i9QeHVWyjSlZlAOEqEHZmLzl"
  },
  "LOGGING": true
};
