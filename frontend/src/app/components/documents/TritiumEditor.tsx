"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Document } from "@/app/components/shared/types";
import { getDocumentFile } from "@/app/lib/mikeApi";

type TritiumModule = typeof import("@/types/tritium");

const TRITIUM_SCRIPT_URL = "https://tritium.legal/static/init.js";

let tritiumModulePromise: Promise<TritiumModule> | null = null;

function loadTritium(): Promise<TritiumModule> {
    tritiumModulePromise ??= import(
        /* webpackIgnore: true */ TRITIUM_SCRIPT_URL
    ) as Promise<TritiumModule>;
    return tritiumModulePromise;
}

export function TritiumEditor({
    documents,
    folderName,
    onClose,
    onSave,
}: {
    documents: Document[];
    folderName?: string;
    onClose: () => void;
    onSave: (document: Document, file: File) => Promise<void>;
}) {
    const documentsRef = useRef(documents);
    const onCloseRef = useRef(onClose);
    const onSaveRef = useRef(onSave);
    const tritiumRef = useRef<TritiumModule | null>(null);

    useEffect(() => {
        documentsRef.current = documents;
        onCloseRef.current = onClose;
        onSaveRef.current = onSave;
    }, [documents, onClose, onSave]);

    useEffect(() => {
        async function openTarget() {
            const tritium = await loadTritium();
            tritiumRef.current = tritium;
            const fileResponses = await Promise.all(
                documents.map(async (document) => ({
                    document,
                    response: await getDocumentFile(document.id),
                })),
            );
            tritium.set_exit_handler(() => onCloseRef.current());
            tritium.set_save_handler(async (file: File) => {
                const source = documentsRef.current.find(
                    (document) => document.filename === file.name,
                );
                if (source) {
                    await onSaveRef.current(source, file);
                }
            });
            const files = fileResponses.map(({ document, response }) =>
                new File(
                    [response.blob],
                    response.filename ?? document.filename,
                    { type: response.blob.type },
                ),
            );
            tritium.start({
                settings: { provider: { Tritium: {} } },
                folder: folderName,
                files,
            });
        }
        void openTarget();
        return () => {};
    }, [documents, folderName]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white">
            <header className="flex h-12 shrink-0 items-center border-b border-gray-200 px-4">
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-900">
                    {folderName ?? documents[0]?.filename ?? "Tritium"}
                </span>
                <button
                    type="button"
                    onClick={() => tritiumRef.current?.shutdown()}
                    aria-label="Close editor"
                    className="ml-4 flex h-8 w-8 items-center justify-center rounded text-gray-600 hover:bg-gray-100"
                >
                    <X className="h-4 w-4" />
                </button>
            </header>
            <div className="relative min-h-0 flex-1">
                <canvas id="tritium-canvas" className="h-full w-full" />
            </div>
        </div>
    );
}
