import { Controller, Get, Render } from '@nestjs/common'

const projects = require('../projects.json')
const contacts = require('../contacts.json')

@Controller()
export class AppController {
    @Get()
    @Render('index')
    public index() {
        return { page: 'home', projects: projects }
    }

    @Get('/contact')
    @Render('contact')
    public contact() {
        return { page: 'contact', contacts: contacts }
    }
}