import * as React from "react";
import {TamaguiProvider} from "tamagui";
import {config} from "../theme/tamagui.config";

export const UIProvider = ({children}: { children: React.ReactNode }) => {
    return <TamaguiProvider config={config} disableRootThemeClass>
        {children}
    </TamaguiProvider>
}