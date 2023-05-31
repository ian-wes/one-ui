import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'
import {Button} from 'ahpoi-one-universe-react'
import * as React from 'react'

import {TamaguiProvider} from 'tamagui'

import config from './tamagui.config'

export const Root = () => {
    return (
        <TamaguiProvider config={config} >
            <Button loading={true}>Hello world</Button>
        </TamaguiProvider>
    )
}
