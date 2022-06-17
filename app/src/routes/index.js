const express = require('express')
const helloRoute = require('./hello.route')

const router = express.Router()

const appRoutes = [
    {
        path: '/',
        route: helloRoute,
    },
]

appRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
