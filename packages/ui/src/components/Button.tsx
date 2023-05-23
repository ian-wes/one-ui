import { Button as BaseButton, ButtonProps, Spinner, TamaguiComponent } from 'tamagui'
import { forwardRef } from 'react'

export type LmButtonProps = ButtonProps & {
    loading?: boolean
}

export const Button = forwardRef(function LmButtonFunc(
    { loading, ...props }: LmButtonProps,
    ref
) {
    return (
        <BaseButton
            {...props}
            ref={ref as TamaguiComponent}
            {...(loading && {
                icon: <Spinner />,
                disabled: true,
            })}
        />
    )
})
