import * as React from 'react'
import {Button as BaseButton, styled, ButtonProps as BaseButtonProps, TamaguiComponent, Spinner, Stack} from "tamagui";

type ButtonProps = {
    variant?: 'primary' | 'secondary'
    size?: '$sm' | '$md' | '$lg';
    prefix?: ButtonProps['icon'];
    suffix?: ButtonProps['icon'];
    loading?: boolean
} & Omit<BaseButtonProps,'size'>

export const Button = React.forwardRef((
    {loading, size = '$md', variant = 'primary', disabled, children, prefix, suffix, ...props}: ButtonProps,
    ref
) => {
    const Component = {
        'primary': PrimaryButton,
        'secondary': PrimaryButton
    }[variant]
    const spinnerPosition = suffix ? 'suffix' : 'prefix';
    return (
        <Component
            ref={ref as TamaguiComponent}
            icon={prefix}
            iconAfter={suffix}
            size={size as never}
            disabled={disabled}
            {...(loading && spinnerPosition === 'prefix' && {
                icon: <Spinner size={'small'}/>,
                disabled: true,
            })}
            {...(loading && spinnerPosition === 'suffix' && {
                iconAfter: <Spinner size={'small'}/>,
                disabled: true,
            })}
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
    hoverStyle: {
        backgroundColor: '$accent.green.bold',
    },
    focusStyle: {
        backgroundColor: '$accent.green.bold',
        outlineStyle: 'none',
    },
    pressStyle: {
        backgroundColor: '$accent.green.bold',
    },
    variants: {
        disabled: {
            true: {
                pointerEvents: 'none',
                backgroundColor: '$accent.green.subtlest',
            }
        },
        size: size,
    } ,
})
