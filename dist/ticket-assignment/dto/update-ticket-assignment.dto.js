"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketAssignmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ticket_assignment_dto_1 = require("./create-ticket-assignment.dto");
class UpdateTicketAssignmentDto extends (0, swagger_1.PartialType)(create_ticket_assignment_dto_1.CreateTicketAssignmentDto) {
}
exports.UpdateTicketAssignmentDto = UpdateTicketAssignmentDto;
//# sourceMappingURL=update-ticket-assignment.dto.js.map