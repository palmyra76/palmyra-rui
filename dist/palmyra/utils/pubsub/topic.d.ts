/**
 * Wrapper class for Pubsub-js library
 * /may rewrite the implementation later
 *
 */
interface TopicListener<T> {
    (topic: string, data: T, action: string): void;
}
declare class Topic {
    subscribe<T>(topic: string, listener: TopicListener<T>): string;
    publish<T>(topic: string, data: T): boolean;
    unsubscribe(handle: any): void;
    unsubsribeTopic(topic: string): void;
    reset(): void;
}
declare const topic: Topic;
export { topic };
export type { TopicListener };
