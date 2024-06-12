import { Module } from "@nestjs/common";
import { RequestLogModuleBase } from "./base/requestLog.module.base";
import { RequestLogService } from "./requestLog.service";
import { RequestLogController } from "./requestLog.controller";
import { RequestLogResolver } from "./requestLog.resolver";

@Module({
  imports: [RequestLogModuleBase],
  controllers: [RequestLogController],
  providers: [RequestLogService, RequestLogResolver],
  exports: [RequestLogService],
})
export class RequestLogModule {}
