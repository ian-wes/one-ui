import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'
import * as React from 'react'

import {TamaguiProvider} from 'tamagui'
import {Button, config} from 'ahpoi-one-universe-react'

export const Root = () => {
    return (
        <TamaguiProvider config={config}>
            <Button marginTop={'50px'} asChild>
               <a href={"https://google.com"}>Google</a>
            </Button>
            <Button marginTop={'50px'} >
                Click me
            </Button>
        </TamaguiProvider>
    )
}
