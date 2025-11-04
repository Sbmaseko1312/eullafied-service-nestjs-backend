"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketPriorityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_priority_entity_1 = require("./entities/ticket-priority.entity");
const typeorm_2 = require("typeorm");
let TicketPriorityService = class TicketPriorityService {
    ticketPriorityRepository;
    constructor(ticketPriorityRepository) {
        this.ticketPriorityRepository = ticketPriorityRepository;
    }
    async create(createTicketPriorityDto) {
        const priority = this.ticketPriorityRepository.create(createTicketPriorityDto);
        return this.ticketPriorityRepository.save(priority);
    }
    async findAll() {
        return this.ticketPriorityRepository.find();
    }
    async findOne(id) {
        const priority = await this.ticketPriorityRepository.findOne({
            where: { priority_id: id },
        });
        if (!priority) {
            throw new common_1.NotFoundException(`Ticket Priority with ID ${id} not found`);
        }
        return priority;
    }
    async update(id, updateTicketPriorityDto) {
        const priority = await this.findOne(id);
        Object.assign(priority, updateTicketPriorityDto);
        return this.ticketPriorityRepository.save(priority);
    }
    async remove(id) {
        const priority = await this.findOne(id);
        await this.ticketPriorityRepository.remove(priority);
        return priority;
    }
};
exports.TicketPriorityService = TicketPriorityService;
exports.TicketPriorityService = TicketPriorityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_priority_entity_1.TicketPriority)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketPriorityService);
//# sourceMappingURL=ticket-priority.service.js.map