/**
 * Wrapper class for Pubsub-js library  
 * /may rewrite the implementation later
 * 
 */

import PubSub from 'pubsub-js'

interface TopicListener<T> {
	(topic: string, data: T, action: string): void;
}

class Topic {

	subscribe<T>(topic: string, listener: TopicListener<T>): string {
		const result = PubSub.subscribe(topic, listener);
		if (result)
			return result;
		else {
			throw new Error("Not able to subscribe to topic " + topic);
		}
	}

	publish<T>(topic: string, data: T): boolean {
		return PubSub.publish(topic, data);
	}

	unsubscribe(handle: any): void {
		PubSub.unsubscribe(handle);
	}

	unsubsribeTopic(topic: string): void {
		PubSub.unsubscribe(topic);
	}

	reset(): void {
		PubSub.clearAllSubscriptions();
	}
}

const topic = new Topic();

export { topic }
export type { TopicListener }