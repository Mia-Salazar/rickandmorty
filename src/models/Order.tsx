export interface OrderModel {
    sortOrder: "asc" | "desc"
    handleSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}