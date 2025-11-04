import { TicketCategoryService } from './ticket-category.service';
import { CreateTicketCategoryDto } from './dto/create-ticket-category.dto';
import { TicketCategory } from './entities/ticket-category.entity';
import { UpdateTicketCategoryDto } from './dto/update-ticket-category.dto';
export declare class TicketCategoryController {
    private readonly ticketCategoryService;
    constructor(ticketCategoryService: TicketCategoryService);
    create(createTicketCategoryDto: CreateTicketCategoryDto): Promise<TicketCategory>;
    findAll(): Promise<TicketCategory[]>;
    findOne(id: string): Promise<TicketCategory>;
    update(id: string, updateTicketCategoryDto: UpdateTicketCategoryDto): Promise<TicketCategory>;
    remove(id: string): Promise<TicketCategory>;
}
