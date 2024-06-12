import * as graphql from "@nestjs/graphql";
import { RequestLogResolverBase } from "./base/requestLog.resolver.base";
import { RequestLog } from "./base/RequestLog";
import { RequestLogService } from "./requestLog.service";

@graphql.Resolver(() => RequestLog)
export class RequestLogResolver extends RequestLogResolverBase {
  constructor(protected readonly service: RequestLogService) {
    super(service);
  }
}
