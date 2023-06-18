import Head from 'next/head'
import {Button, Text} from "@one-ui/react";

export default function Page() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
                <Button size={'$sm'}>Small</Button>
                <Button size={'$md'}>Medium</Button>
                <Button size={'$lg'}>Large</Button>
            </div>
            <Text size={'$xl'}>Test</Text>
        </>
    )
}
