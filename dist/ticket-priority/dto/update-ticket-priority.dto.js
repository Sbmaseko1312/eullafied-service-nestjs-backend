"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketPriorityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ticket_priority_dto_1 = require("./create-ticket-priority.dto");
class UpdateTicketPriorityDto extends (0, swagger_1.PartialType)(create_ticket_priority_dto_1.CreateTicketPriorityDto) {
}
exports.UpdateTicketPriorityDto = UpdateTicketPriorityDto;
//# sourceMappingURL=update-ticket-priority.dto.js.map