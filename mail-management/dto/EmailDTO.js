export default class EmailDTO {
    constructor(sender, recipient, subject, body) {
        this.sender = sender;
        this.recipient = recipient;
        this.subject = subject;
        this.body = body;
    }
}