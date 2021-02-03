import { Controller, Get, Render } from '@nestjs/common'

@Controller()
export class AppController {
    @Get()
    @Render('index')
    public index() {
        return { page: 'home' }
    }

    @Get('/contact')
    @Render('contact')
    public contact() {
        return { page: 'contact' }
    }
}