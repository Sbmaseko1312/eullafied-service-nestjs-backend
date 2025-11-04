import { Department } from 'src/department/entities/department.entity';
import { TicketAssignment } from 'src/ticket-assignment/entities/ticket-assignment.entity';
import { TicketCategory } from 'src/ticket-category/entities/ticket-category.entity';
import { TicketPriority } from 'src/ticket-priority/entities/ticket-priority.entity';
import { TicketStatus } from 'src/ticket-status/entities/ticket-status.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Ticket {
    ticket_id: string;
    ticket_number: string;
    description: string;
    requester: User;
    department: Department;
    category: TicketCategory;
    priority: TicketPriority;
    status: TicketStatus;
    manager: User;
    manager_approved_at: Date;
    manager_comment: string;
    created_at: Date;
    updated_at: Date;
    closed_at: Date;
    cancelled_at: Date;
    resolution_summary: string;
    assignments: TicketAssignment[];
}
