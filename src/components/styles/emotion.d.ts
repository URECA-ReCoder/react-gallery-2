// emotions.d.ts (예: src/types/emotions.d.ts)
import "@emotion/react";
import { DefaultThemeColorKey } from "@emotion/react";

declare module "@emotion/react" {
    export type DefaultThemeColorKey =
        | "black"
        | "white"
        | "gray100" // Dark Charcoal
        | "gray200" // Charcoal Gray
        | "gray300" // Medium Gray
        | "gray400" // Soft Gray
        | "gray500" // Light Gray
        | "gray600" // Very Light Gray
        | "red";
}

// emotions.d.ts에서의 정의
export interface DefaultTheme {
    color: {
        [key in DefaultThemeColorKey]: string;
    };
    size: {
        size50: string;
        size100: string;
        size200: string;
        size300: string;
        size400: string;
        size500: string;
    };
    weight: {
        Light: string;
        Normal: string;
        Medium: string;
        SemiBold: string;
        Bold: string;
    };
}
