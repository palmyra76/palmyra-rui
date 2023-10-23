/**
 * Wrapper class for Pubsub-js library  
 * /may rewrite the implementation later
 * 
 */

import PubSub from 'pubsub-js'

interface TopicListener {
	(topic: string, data: any): void;
}

class Topic {

	subscribe(topic: string, listener: TopicListener): string {
		const result = PubSub.subscribe(topic, listener);
		if (result)
			return result;
		else {
			throw new Error("Not able to subscribe to topic " + topic);
		}
	}

	publish(topic: string, data: any): boolean {
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