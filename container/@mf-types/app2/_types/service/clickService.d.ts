export declare const clickService: {
    count: {
        on: (callback: (data: number) => void) => () => void;
        off: (callback: (data: number) => void) => void;
        emit: (data: number) => void;
        get: () => number;
    };
    click: {
        on: (callback: (data: void) => void) => () => void;
        off: (callback: (data: void) => void) => void;
        emit: (data: void) => void;
        get: () => void;
    };
};
export declare type ClickService = typeof clickService;
export default clickService;
