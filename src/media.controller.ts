import { Controller, Get, Redirect, Render } from '@nestjs/common'

@Controller()
export class MediaController {
    @Get('/reddit')
    @Redirect('https://www.reddit.com/user/Nimplex')
    public reddit() {}

    @Get('/twitter')
    @Redirect('https://twitter.com/Nimplexy')
    public twitter() {}

    @Get('/youtube')
    @Redirect('https://youtube.com/Nimplex')
    public youtube() {}

    @Get('/steam')
    @Redirect('https://steamcommunity.com/id/Nimplexy')
    public steam() {}

    @Get('/github')
    @Redirect('https://github.com/Nimplex')
    public github() {}
}
