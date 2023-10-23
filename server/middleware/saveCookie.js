const savecookie = (idtoken, res) => {
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  admin.auth().createSessionCookie(idtoken, {expiresIn})
  .then((sessionCookie) => {
     const options = {maxAge: expiresIn, 
              httpOnly: true, secure: true};
 
     admin.auth().verifyIdToken(idtoken)
      .then(function(decodedClaims) {
         res.redirect('/success');
     });
  }, error => {
      res.status(401).send("UnAuthorised Request");
  });
}

module.exports = savecookie;