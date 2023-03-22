export enum EventTypes {
    TOKEN = "TOKEN",
    MESSAGE = "MESSAGE",
    WELCOME = "WELCOME",
    CONVERSATION_ID = "CONVERSATION_ID",
    PAUSE_SESSION = "PAUSE_SESSION",
    RESUME_SESSION = "RESUME_SESSION",
    END_SESSION = "END_SESSION",
    PLATFORM = "PLATFORM",
}

export type WebViewMessageEvents =
    | "READY"
    | "NOT_READY"
    | "END_SESSION"
    | "START_SPEAKING"
    | "FINISHED_SPEAKING"
    | "UPDATE_CONVERSATION"
    | "SHOW_CAMERA";

export type IEventTypes = keyof typeof EventTypes;
