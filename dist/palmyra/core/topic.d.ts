/**
 * Wrapper class for Pubsub-js library
 * /may rewrite the implementation later
 *
 */
interface TopicListener {
    (topic: string, data: any): void;
}
declare class Topic {
    subscribe(topic: string, listener: TopicListener): string;
    publish(topic: string, data: any): boolean;
    unsubscribe(handle: any): void;
    unsubsribeTopic(topic: string): void;
    reset(): void;
}
declare const topic: Topic;
export { topic };
export type { TopicListener };
