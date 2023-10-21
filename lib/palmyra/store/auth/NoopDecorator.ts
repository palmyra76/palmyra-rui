import { AuthDecorator } from "..";

class NoAuthDecorator implements AuthDecorator {
    decorate(request: any): void {
        console.log('No op decorator');
    }
}

const NOOPDecorator = new NoAuthDecorator();

export {NOOPDecorator};