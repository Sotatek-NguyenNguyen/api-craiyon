import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("request.headers?.appid" , request.headers?.appid);
    console.log("process.env.APP_ID" , process.env.APP_ID);
    if (request.headers?.appid == undefined || request.headers?.webservice_api_key == undefined) {
      return false;
    }
    return request.headers?.appid === process.env.APP_ID && request.headers?.webservice_api_key === process.env.WEBSERVICE_API_KEY;
  }

}