export class HttpError {
    static parse(error: any): string {
        if (!error) {
            return 'error occured';
        }
        if (error.message) {
            return error.message;
        }
        if (error.status) {
            return `error occured with status: ${error.status}`;
        }
        if (error.name) {
            return `error occured: ${error.name}`;
        }
        return 'error occured';
    }
}
