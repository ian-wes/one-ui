import {Button as BaseButton, ButtonProps as BaseButtonProps, Spinner} from 'tamagui'

export type ButtonProps = BaseButtonProps & {
    loading?: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <BaseButton
            {...props}
            {...(props.loading && {
                icon: <Spinner />,
                disabled: true,
            })}
        />
    )
}
