import { Controller, Get, Render } from '@nestjs/common';
import { ViewsService } from './views.service';

@Controller('views')
export class ViewsController {
    constructor(
        private readonly viewsService: ViewsService,
    ) { }

    @Get()
    @Render('index.ejs')
    index() {
        return { message: '끼이이야아아ㅏ아아아아아앙앙아아아아아앙앙아아아앙아아앙아아아아아아아아앙앙아아아앙아아앙아아아아' };
    }
}
