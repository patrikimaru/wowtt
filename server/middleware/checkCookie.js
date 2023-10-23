const checkCookie = (req, res, next) => {
   
  const sessionCookie = req.cookies.__session || '';
  admin.auth().verifySessionCookie(
      sessionCookie, true).then((decodedClaims) => {
          req.decodedClaims = decodedClaims;
          next();
      })
      .catch((error) => {
        console.log(error);
        res.redirect('/login');
      });
}

module.exports = checkCookie;