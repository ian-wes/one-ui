import * as React from 'react'
import {Button as BaseButton, styled, ButtonProps as BaseButtonProps, TamaguiComponent, Spinner} from "tamagui";

type ButtonProps = {
    variant?: 'primary' | 'secondary'
    size?: '$sm' | '$md' | '$lg';
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    loading?: boolean
} & Omit<BaseButtonProps,'size'>

export const Button = React.forwardRef((
    {loading, size = '$sm', variant = 'primary', children, ...props}: ButtonProps,
    ref
) => {
    const Component = {
        'primary': PrimaryButton,
        'secondary': PrimaryButton
    }[variant]
    return (
        <Component
            ref={ref as TamaguiComponent}
            {...(loading && {
                icon: <Spinner size={'small'}/>,
                disabled: true,
            })}
            size={size as never}
            {...props}
        >
            {children}
        </Component>
    );
})

const size = {
    '$sm': {
        height: 40,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 24,
        paddingLeft: 24,
    },
    '$md': {
        height: 56,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        paddingLeft: 24,
    },
    '$lg': {
        height: 72,
        paddingRight: 24,
        paddingLeft: 24,
    },
}

const PrimaryButton =  styled(BaseButton, {
    name: 'button',
    borderRadius: '999px',
    color: '$brand',
    backgroundColor: '$accent.green',
    borderColor: 'transparent',
    fontWeight: '$bold',
    focusStyle: {
        backgroundColor: '$accent.green.bold',
        outlineStyle: 'none',
    },
    hoverStyle: {
        backgroundColor: '$accent.green.bold',
    },
    pressStyle: {
        backgroundColor: '$accent.green.bold',
    },
    variants: {
        disabled: {
            true: {
                pointerEvents: 'none',
                cursor: 'not-allowed',
                backgroundColor: '$accent.green.subtlest'
            }
        },
        loading: {
            true: {
                pointerEvents: 'none',
                cursor: 'not-allowed',
                backgroundColor: '$accent.green.subtle'
            }
        },
        size: size,
    } ,
})
