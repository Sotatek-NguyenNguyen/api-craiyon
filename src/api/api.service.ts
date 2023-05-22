import { Injectable } from '@nestjs/common';
import { GenerateDTO } from './dto/api.generate.dto';
import { HttpService,  } from "@nestjs/axios";
import { catchError, map } from 'rxjs/operators';
import { ImgLargeDTO } from './dto/api.imglarge.dto';


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

    // {"image_id":"img.craiyon.com/2023-05-18/23fb4cf9332c46aea8d1b91b1b27b07b.webp",
    // "prompt":"The Way with Rick Jaffa",
    // "version":"35s5hfwn9n78gb06",
    // "token":null,
    // "model":"art",
    // "negative_prompt":"middle part, big forehead, ugly face, uneven proportions"}

    //return {
    //     "images": [
    //         "2023-05-18/c0f192e244f746a895556cfa8e6de3fb.webp"
    //     ]
    // }
    // ==> add domain https://pics.craiyon.com/2023-05-18/c0f192e244f746a895556cfa8e6de3fb.webp
    imglarge(imgLargeDTO:ImgLargeDTO): any {
       

        console.log("imgLargeDTO", imgLargeDTO);
        return this.httpService
        .post('https://api.craiyon.com/upscale', imgLargeDTO)
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
