const crypto = require('crypto');
const author = 't.me/Bengamin_Button t.me/XillenAdapter';
console.log(author);
console.log('xillen-crypto-wallet: Криптовалютный кошелёк');
class Wallet {
    constructor() {
        this.privateKey = crypto.randomBytes(32).toString('hex');
        this.publicKey = crypto.createHash('sha256').update(this.privateKey).digest('hex');
        this.balance = 0;
    }
    generateAddress() {
        return crypto.createHash('sha256').update(this.publicKey).digest('hex').substring(0, 40);
    }
    send(amount, to) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Отправлено ${amount} BTC на ${to}`);
            return true;
        }
        console.log('Недостаточно средств');
        return false;
    }
    receive(amount) {
        this.balance += amount;
        console.log(`Получено ${amount} BTC`);
    }
}
const wallet = new Wallet();
console.log('Адрес:', wallet.generateAddress());
console.log('Приватный ключ:', wallet.privateKey);
console.log('Публичный ключ:', wallet.publicKey);
wallet.receive(1.5);
wallet.send(0.5, '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
console.log('Баланс:', wallet.balance);

