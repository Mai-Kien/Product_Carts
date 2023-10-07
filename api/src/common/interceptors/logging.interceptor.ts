import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        return next
            .handle()
            .pipe(
                map(data => {
                    // delete response.message
                    return classToPlain({
                        statusCode: context.switchToHttp().getResponse().statusCode,
                        message: data?.message,
                        data,
                        timestamp: `${Date.now() - now}ms`,
                    })
                }
                )
            );
    }
}