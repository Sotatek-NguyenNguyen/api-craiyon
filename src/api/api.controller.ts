import { Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { ApiService } from './api.service';
import { GenerateDTO } from './dto/api.generate.dto';
import { ImgLargeDTO } from './dto/api.imglarge.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get("/test")
    test(): any {
        return "hello api";
    }

    @Post("/generate")
    generateImage(@Body() denerateDTO:GenerateDTO): any {
        return this.apiService.generateImage(denerateDTO);
    }

    @Post("/imglarge")
    imglarge(@Body() imgLargeDTO:ImgLargeDTO): any {
        return this.apiService.imglarge(imgLargeDTO);
    }
}
