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

}
