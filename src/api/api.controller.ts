import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { GenerateDTO } from './dto/api.generate.dto';
import { ImgLargeDTO } from './dto/api.imglarge.dto';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Post("/generate")
    generateImage(@Body() denerateDTO:GenerateDTO): any {
        return this.apiService.generateImage(denerateDTO);
    }

    @Post("/imglarge")
    imglarge(@Body() imgLargeDTO:ImgLargeDTO): any {
        return this.apiService.imglarge(imgLargeDTO);
    }
}
