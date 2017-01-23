import R from 'ramda'


export const disabled = css => props => props.disabled && css

export const checked = (checked, unchecked = '') => props && props.checked ? checked : unchecked

export const propPath = (...args) => R.path(args)

export const theme = prop => props => props.theme[prop]
