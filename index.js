/* Code skeleton from https://daveceddia.com/create-react-app-express-production/ */

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Move the default game here
app.get(`/pgn/:gameId`, (req, res) => {
    const pgns = [
`[Event "HUN-ch"]
[Site "Budapest"]
[Date "1946.??.??"]
[Round "?"]
[White "Bakonyi, Elek"]
[Black "Benko, Pal C"]
[Result "1-0"]
[WhiteElo ""]
[BlackElo ""]
[ECO "B44"]

1.c4 Nf6 2.Nc3 e6 3.e4 c5 4.Nf3 Nc6 5.d4 cxd4 6.Nxd4 Bb4 7.Nxc6 bxc6 8.Bd3 O-O
9.O-O d5 10.e5 Nd7 11.cxd5 Nxe5 12.Bxh7+ Kxh7 13.Qh5+ Kg8 14.Qxe5 cxd5 15.f4 f6
16.Qd4 Qb6 17.Be3 Qxd4 18.Bxd4 Bd7 19.Rad1 Bc6 20.a3 Bd6 21.Be3 Rfd8 22.Rf2 g6
23.h4 Kf7 24.h5 gxh5 25.f5 e5 26.Nxd5 Rd7 27.Nc3 Rad8 28.Rfd2 Bb8 29.Rxd7+ Rxd7
30.Bc5 Ba4 31.Rf1 Bb3 32.Rf2 a6 33.Kf1 Rd3 34.Ke1 Rg3 35.Rd2 Ke8 36.Ne4 Rg7
37.Nxf6+ Kf7 38.Nxh5 Rg5 39.Rd7+ Kg8 40.Nf6+  1-0`,
`[Event "HUN-ch"]
[Site "Budapest"]
[Date "1946.??.??"]
[Round "?"]
[White "Benko, Pal C"]
[Black "Fuster, Geza"]
[Result "1-0"]
[WhiteElo ""]
[BlackElo ""]
[ECO "A12"]

1.Nf3 Nf6 2.g3 d5 3.Bg2 c6 4.b3 Bf5 5.Bb2 e6 6.c4 Nbd7 7.O-O Bd6 8.Nc3 O-O
9.d4 Qe7 10.Nd2 Ba3 11.Bxa3 Qxa3 12.e4 dxe4 13.Ndxe4 Rfd8 14.Qe2 Bxe4 15.Bxe4 Nb6
16.Rad1 Rd7 17.Rd2 Rad8 18.Rfd1 g6 19.Bf3 Qa5 20.Qe3 e5 21.dxe5 Rxd2 22.Rxd2 Nfd7
23.Bg4 Qb4 24.e6 fxe6 25.Bxe6+ Kg7 26.Qd4+  1-0`,
`[Event "HUN-ch"]
[Site "Budapest"]
[Date "1946.??.??"]
[Round "?"]
[White "Benko, Pal C"]
[Black "Szilagyi, Gyorgy"]
[Result "1-0"]
[WhiteElo ""]
[BlackElo ""]
[ECO "D26"]

1.c4 Nf6 2.Nc3 d5 3.d4 c5 4.e3 cxd4 5.exd4 e6 6.Nf3 dxc4 7.Bxc4 Be7 8.O-O O-O
9.Bg5 Nbd7 10.Qe2 Nb6 11.Bb3 Nbd5 12.Rad1 b6 13.Nxd5 exd5 14.Rfe1 Be6 15.Ne5 Rc8
16.Nxf7 Bxf7 17.Qxe7 Re8 18.Qxd8 Rcxd8 19.f3 Kf8 20.Kf2 Rxe1 21.Rxe1 Rc8
22.Rc1 Rxc1 23.Bxc1 Ke7 24.Bf4 a6 25.g4 h6 26.Be5 Ke6 27.Bc2 g6 28.Bd3 b5
29.Kg3 Be8 30.h4 a5 31.Bc7 a4 32.Be5 Ng8 33.Bf4 h5 34.Bg5 b4 35.a3 bxa3 36.bxa3 Nf6
37.Bxf6 Kxf6 38.g5+ Kf7 39.Kf4 Ke6 40.Bc2 Kd6 41.Ke3 Ke6 42.Kd2 Kd6 43.Kc3 Ke7
44.Kb4 Ke6 45.Bxa4  1-0`,
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
23.Rxd8 Qxd8 24.Qxa5 Nxc4 25.Qxd8 Rxd8 26.Rc1 Nb2 27.a5 c4 28.Rc2 Rb8 29.Bf1 Rb5  1/2-1/2`,
    ];

    const manifest = { manifest: [`Bakonyi, Elek vs. Benko, Pal C (1-0)`, 
                                `Benko, Pal C vs. Fuster, Geza (1-0)`,
                                `Benko, Pal C vs. Szilagyi, Gyorgy (1-0)`,
                                `Benko, Pal C vs. Fischer, Robert James (1/2-1/2)`]};

    switch (req.params.gameId) {
        case `manifest`:
            res.send(JSON.stringify(manifest));
            break;
        default:
            res.send(
                pgns[req.params.gameId] ? pgns[req.params.gameId] : ``
            );
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on port ${port}`);
