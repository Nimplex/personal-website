import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { MediaController } from './media.controller'

@Module({
    imports: [],
    controllers: [AppController, MediaController],
    providers: []
})
export class AppModule {}