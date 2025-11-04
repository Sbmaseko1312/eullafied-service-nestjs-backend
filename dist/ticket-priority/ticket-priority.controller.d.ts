import { CreateTicketPriorityDto } from './dto/create-ticket-priority.dto';
import { UpdateTicketPriorityDto } from './dto/update-ticket-priority.dto';
import { TicketPriority } from './entities/ticket-priority.entity';
import { TicketPriorityService } from './ticket-priority.service';
export declare class TicketPriorityController {
    private readonly ticketPriorityService;
    constructor(ticketPriorityService: TicketPriorityService);
    create(createTicketPriorityDto: CreateTicketPriorityDto): Promise<TicketPriority>;
    findAll(): Promise<TicketPriority[]>;
    findOne(id: string): Promise<TicketPriority>;
    update(id: string, updateTicketPriorityDto: UpdateTicketPriorityDto): Promise<TicketPriority>;
    remove(id: string): Promise<TicketPriority>;
}
