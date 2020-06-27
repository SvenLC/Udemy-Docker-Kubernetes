const express = require('express');
const redis = require('redis');
const process = require('process')

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visists', 0)

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visists', (err, visists) => {
        res.send('Number of visists is ' + visists);
        client.set('visists', parseInt(visists) + 1)
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081')
})