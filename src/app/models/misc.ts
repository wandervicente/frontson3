import { formatDate } from "@angular/common";

class Misc {
    static ptbrDate(date: Date): string {
        return formatDate(date, 'dd/MM/yyyy', 'en-US');
    }
}

export default Misc