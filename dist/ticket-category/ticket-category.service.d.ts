import { Repository } from 'typeorm';
import { TicketCategory } from './entities/ticket-category.entity';
import { CreateTicketCategoryDto } from './dto/create-ticket-category.dto';
import { UpdateTicketCategoryDto } from './dto/update-ticket-category.dto';
export declare class TicketCategoryService {
    private readonly ticketCategoryRepository;
    constructor(ticketCategoryRepository: Repository<TicketCategory>);
    create(createTicketCategoryDto: CreateTicketCategoryDto): Promise<TicketCategory>;
    findAll(): Promise<TicketCategory[]>;
    findOne(id: string): Promise<TicketCategory>;
    update(id: string, updateTicketCategoryDto: UpdateTicketCategoryDto): Promise<TicketCategory>;
    remove(id: string): Promise<TicketCategory>;
}
