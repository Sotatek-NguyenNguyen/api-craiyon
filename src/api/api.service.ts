import { Injectable } from '@nestjs/common';
import { GenerateDTO } from './dto/api.generate.dto';
import { HttpService,  } from "@nestjs/axios";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) {}

    generateImage(generateDTO:GenerateDTO): any {
        // let param = {"prompt":"The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa","version":"35s5hfwn9n78gb06","token":null,"model":"art","negative_prompt":""}

        console.log("denerateDTO", generateDTO);
        return this.httpService
        .post('https://api.craiyon.com/v3', generateDTO)
        .pipe(
          map((response) => {
              console.log(response.data)
                return response.data;
            }),
          catchError((e) => {
            throw e;
          }),
        );
    }
}
