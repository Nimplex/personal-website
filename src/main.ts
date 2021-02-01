import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as express from 'express'
import * as path from 'path'

const config = require('../config.json')

const bootstrap = async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.set('views', path.join(__dirname, '..', 'public', 'views'))
    app.set('view engine', 'pug')

    await app.listen(config.port)
}

bootstrap()