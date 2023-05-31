import {Button as BaseButton, ButtonProps as BaseButtonProps, styled} from 'tamagui'

export type ButtonProps = BaseButtonProps & {
    loading?: boolean
}

export const Button = styled(BaseButton, {
    borderRadius: '$12',
    backgroundColor: "#00E28F",
    color: '#3a006a',
    width: '100%',
    maxWidth: 400,
    fontWeight: '700',
    fontSize: '16px',
    height: 56,
})
