import { TicketStatus } from './entities/ticket-status.entity';
import { CreateTicketStatusDto } from './dto/create-ticket-status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { TicketStatusService } from './ticket-status.service';
export declare class TicketStatusController {
    private readonly ticketStatusService;
    constructor(ticketStatusService: TicketStatusService);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<TicketStatus>;
    findAll(): Promise<TicketStatus[]>;
    findOne(id: string): Promise<TicketStatus>;
    update(id: string, updateTicketStatusDto: UpdateTicketStatusDto): Promise<TicketStatus>;
    remove(id: string): Promise<TicketStatus>;
    findByStatusName(statusName: string): Promise<TicketStatus>;
}
