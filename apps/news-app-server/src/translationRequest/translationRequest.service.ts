import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranslationRequestServiceBase } from "./base/translationRequest.service.base";

@Injectable()
export class TranslationRequestService extends TranslationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
