class AbhishekAI {

    constructor() {

        this.lastIntent = null;
        this.chatHistory = [];

    }

    normalize(text) {

        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s]/g, "");

    }

    detectIntent(message) {

        message = this.normalize(message);

        for (const intent in INTENTS) {

            for (const keyword of INTENTS[intent]) {

                if (message.includes(keyword.toLowerCase())) {

                    return intent;

                }

            }

        }

        return "unknown";

    }

    randomResponse(intent) {

        const responses = RESPONSES[intent];

        if (!responses) {

            return RESPONSES.unknown[0];

        }

        const item =
            responses[Math.floor(Math.random() * responses.length)];

        if (typeof item === "function") {

            return item();

        }

        return item;

    }

    remember(message, intent) {

        this.lastIntent = intent;

        this.chatHistory.push({
            message,
            intent,
            time: Date.now()
        });

        if (this.chatHistory.length > 10) {
            this.chatHistory.shift();
        }

    }

    followUpIntent(message) {

        message = this.normalize(message);

        if (!this.lastIntent) return null;

        const followUps = [
            "more",
            "tell me more",
            "more details",
            "explain",
            "next",
            "continue",
            "and",
            "what else",
            "which one",
            "best one",
            "best"
        ];

        if (followUps.some(word => message.includes(word))) {
            return this.lastIntent;
        }

        return null;

    }

    reply(message) {

        const followIntent = this.followUpIntent(message);

        let intent = followIntent || this.detectIntent(message);

        this.remember(message, intent);

        return this.randomResponse(intent);

    }

}

const AI = new AbhishekAI();
