module.exports = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    username: 'postgres',
    database: 'location_distance',
    password: 'David19967',
    synchronize: true,
    entities: ['dist/**/**/*.entity{.js,.ts}']
}