import * as React from 'react'
import {Button as BaseButton, styled, ButtonProps as BaseButtonProps, TamaguiComponent, Spinner} from "tamagui";

type ButtonProps = {
    loading?: boolean
} & BaseButtonProps

export const Button = React.forwardRef((
    {loading, children, ...props}: ButtonProps,
    ref
) => {
    const Component = {
        'primary': PrimaryButton
    }['primary']
    return (
        <Component
            ref={ref as TamaguiComponent}
            {...(loading && {
                icon: <Spinner size={'small'}/>,
                disabled: true,
            })}
            {...props}
        >
            {children}
        </Component>
    );
})


const PrimaryButton = styled(BaseButton, {
    name: 'button',
    borderRadius: '99px',
    color: '$brand',
    backgroundColor: '$accent.green',
    borderColor: 'transparent',
    focusStyle: {
        outlineColor: '$accent.green.subtle',
        outlineStyle: 'solid',
        outlineWidth: 1,
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
        }
    } as const,
})