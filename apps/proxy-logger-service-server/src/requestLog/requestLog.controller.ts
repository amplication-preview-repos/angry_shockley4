import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestLogService } from "./requestLog.service";
import { RequestLogControllerBase } from "./base/requestLog.controller.base";

@swagger.ApiTags("requestLogs")
@common.Controller("requestLogs")
export class RequestLogController extends RequestLogControllerBase {
  constructor(protected readonly service: RequestLogService) {
    super(service);
  }
}
