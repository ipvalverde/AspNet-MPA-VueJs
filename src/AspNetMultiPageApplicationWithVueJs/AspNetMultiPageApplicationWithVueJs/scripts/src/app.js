class DemoApp
{
    constructor(message)
    {
        this.message = message;
    }

    print() {
        console.log(this.message);
    }
}

var demo = new DemoApp('This is a test');
demo.print();