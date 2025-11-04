export declare class CreateTicketDto {
    ticket_number: string;
    description?: string;
    requester_id: string;
    department_id?: string;
    category_id?: string;
    priority_id: string;
    status_id: string;
    manager_id?: string;
    manager_comment?: string;
    closed_at?: Date;
    cancelled_at?: Date;
    resolution_summary?: string;
}
