let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/duan-demo-frontend'));
app.get('/* ', (req, resp) => {
    resp.sendFile(_dirname + '/dist/duan-demo-frontend/index.html');
});
lsof - i: 3000
request(app.callback());
app.listen(process.env.PORT || 8080);