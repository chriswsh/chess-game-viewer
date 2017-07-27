/* Code skeleton from https://daveceddia.com/create-react-app-express-production/ */

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Move the default game here
app.get(`/pgn/1`, (req, res) => {
    res.send(
`[Event "USA-ch"]
[Site "New York"]
[Date "1958.??.??"]
[Round "5"]
[White "Benko, Pal C"]
[Black "Fischer, Robert James"]
[Result "1/2-1/2"]
[WhiteElo ""]
[BlackElo ""]
[ECO "E61"]

1.d4 Nf6 2.c4 g6 3.g3 Bg7 4.Bg2 O-O 5.Nc3 c5 6.e3 Nc6 7.Nge2 d6 8.O-O Bd7
9.b3 Rb8 10.Bb2 a6 11.dxc5 dxc5 12.Na4 b6 13.Nf4 Na5 14.Be5 Rc8 15.Qc2 Bxa4
16.bxa4 Nd7 17.Bxg7 Kxg7 18.Bh3 Qe8 19.Qc3+ Kg8 20.Rad1 Rd8 21.Nd5 e6 22.Nxb6 Nxb6
23.Rxd8 Qxd8 24.Qxa5 Nxc4 25.Qxd8 Rxd8 26.Rc1 Nb2 27.a5 c4 28.Rc2 Rb8 29.Bf1 Rb5  1/2-1/2`
    );
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on port ${port}`);
