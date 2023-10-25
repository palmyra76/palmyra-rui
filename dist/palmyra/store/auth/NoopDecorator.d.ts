import { AuthDecorator } from "..";
declare class NoAuthDecorator implements AuthDecorator {
    decorate(request: any): void;
}
declare const NOOPDecorator: NoAuthDecorator;
export { NOOPDecorator };
