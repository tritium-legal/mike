/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */

export type ReadableStreamType = "bytes";

export interface LaunchOptions {
    folder?: string;
    files?: File[];
    settings?: Settings;
}


export interface Identity {
    first_name?: string | null;
    last_name?: string | null;
    organization?: string | null;
}

export interface ProviderConfiguration {
    name?: string;
    token?: string | null;
    model?: string | null;
    url?: string;
    query_parameters?: [string, string][];
    location?: TokenLocation;
    payload_type?: ProviderPayloadType;
}

export interface Settings {
    install_id?: string;
    /**
     * Configurable end-user/platform Settings
     */
    identity?: Identity;
    dark_mode?: boolean;
    formatting_marks?: boolean;
    blackline_mode?: boolean;
    provider?: Provider | null;
    recent_folders?: string[];
    recent_files?: string[];
    panels?: string[][];
    clean_exit?: boolean;
    /**
     * Session token for the signed-in tritium.legal account (GitHub OAuth).
     */
    auth_token?: string | null;
}

export type Provider = { Tritium: ProviderConfiguration } | { OpenAI: ProviderConfiguration } | { Claude: ProviderConfiguration } | { DeepSeek: ProviderConfiguration } | { Gemini: ProviderConfiguration } | { Custom: ProviderConfiguration };

export type ProviderPayloadType = "Json" | "Form";

export type TokenLocation = "Memory" | { File: string };


/**
 * Chroma subsampling format
 */
export enum ChromaSampling {
    /**
     * Both vertically and horizontally subsampled.
     */
    Cs420 = 0,
    /**
     * Horizontally subsampled.
     */
    Cs422 = 1,
    /**
     * Not subsampled.
     */
    Cs444 = 2,
    /**
     * Monochrome.
     */
    Cs400 = 3,
}

export class IntoUnderlyingByteSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableByteStreamController): Promise<any>;
    start(controller: ReadableByteStreamController): void;
    readonly autoAllocateChunkSize: number;
    readonly type: ReadableStreamType;
}

export class IntoUnderlyingSink {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abort(reason: any): Promise<any>;
    close(): Promise<any>;
    write(chunk: any): Promise<any>;
}

export class IntoUnderlyingSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableStreamDefaultController): Promise<any>;
}

export function init(): void;

export function open_array_buffer(path: string, buffer: ArrayBuffer, activate: boolean): void;

export function open_bytes(path: string, bytes: Uint8Array, activate: boolean): void;

export function open_file(file: File): Promise<void>;

export function open_folder(path: string, files: File[]): Promise<void>;

export function set_exit_handler(func: Function): void;

export function set_save_handler(func: Function): void;

export function shutdown(): void;

export function start(options?: LaunchOptions | null): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: (a: number, b: number) => number;
    readonly init: () => void;
    readonly open_array_buffer: (a: number, b: number, c: any, d: number) => void;
    readonly open_bytes: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly open_file: (a: any) => any;
    readonly open_folder: (a: number, b: number, c: number, d: number) => any;
    readonly set_exit_handler: (a: any) => void;
    readonly set_save_handler: (a: any) => void;
    readonly shutdown: () => [number, number];
    readonly start: (a: number) => [number, number];
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: any) => any;
    readonly intounderlyingbytesource_start: (a: number, b: any) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly intounderlyingsink_abort: (a: number, b: any) => any;
    readonly intounderlyingsink_close: (a: number) => any;
    readonly intounderlyingsink_write: (a: number, b: any) => any;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: any) => any;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___wasm_bindgen_c59ab73ac38cad0a___JsValue__core_e48f7a02345547b9___result__Result_____wasm_bindgen_c59ab73ac38cad0a___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___js_sys_b68f62e620831c6a___Function__js_sys_b68f62e620831c6a___Function______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___js_sys_b68f62e620831c6a___Function_fn_wasm_bindgen_c59ab73ac38cad0a___JsValue_____wasm_bindgen_c59ab73ac38cad0a___sys__Undefined___js_sys_b68f62e620831c6a___Function_fn_wasm_bindgen_c59ab73ac38cad0a___JsValue_____wasm_bindgen_c59ab73ac38cad0a___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___wasm_bindgen_c59ab73ac38cad0a___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___js_sys_b68f62e620831c6a___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___web_sys_3b0b69154d216510___features__gen_Event__Event______true__1_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___web_sys_3b0b69154d216510___features__gen_Event__Event______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___web_sys_3b0b69154d216510___features__gen_KeyboardEvent__KeyboardEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___web_sys_3b0b69154d216510___features__gen_MessageEvent__MessageEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___core_e48f7a02345547b9___result__Result_____wasm_bindgen_c59ab73ac38cad0a___JsValue___true_: (a: number, b: number) => [number, number];
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke___bool__true_: (a: number, b: number) => number;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke_______true__2_: (a: number, b: number) => void;
    readonly wasm_bindgen_c59ab73ac38cad0a___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
