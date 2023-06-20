import Head from 'next/head'
import {Button, Text} from "@one-ui/react";
import {SVGProps} from "react";

export default function Page() {
    const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
        <svg
            width={24}
            height={24}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m11.738 2.17-.894.858c-.223.226-.223.588 0 .769l6.924 7.005H2.536a.546.546 0 0 0-.536.543v1.265a.52.52 0 0 0 .536.543h15.232l-6.924 7.05c-.223.181-.223.543 0 .769l.894.858c.178.227.536.227.759 0l9.335-9.446a.524.524 0 0 0 0-.768l-9.335-9.447c-.223-.226-.58-.226-.76 0Z" />
        </svg>
    );
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}}>
                <Button size={'$sm'} >Small</Button>
                <Button size={'$md'} disabled suffix={<ArrowRight/>}>Medium</Button>
                <Button size={'$lg'}>Large</Button>
            </div>
            <Text size={'$xl'}>Test</Text>
        </>
    )
}
