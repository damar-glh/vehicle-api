const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');

server.use(middlewares);

server.get('/vehicles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vehicle = db.vehicles.find(v => v.id === id);
  const telemetry = db.telemetry.find(t => t.vehicleId === id);

  if (!vehicle || !telemetry) {
    return res.status(404).json({ error: 'Not found' });
  }
  return res.json(telemetry);
});

server.use(router);
server.listen(10000, () => {
  console.log('JSON Server is running at port 10000');
});