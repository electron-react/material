import { Indigo, Black, White, Grey, Pink } from 'styles/palette'

export default {
  primary: Indigo.default,
  primaryLight: Indigo[100],
  primaryMiddle: Indigo[700],
  primaryDark: Indigo[800],

  accent: Pink['A200'],
  accentLight: White,
  accentMiddle: Pink['A100'],
  accentDark: Pink['A400'],

  divider: Grey.default,

  text: 'rgba(0,0,0,.87)',
  textPrimary: 'rgba(0,0,0,.87)',
  textSecondary: 'rgba(0,0,0,.54)',
  textOnPrimary: White,
  textOnAccent: White,
  textHint: 'rgba(0,0,0,.38)',

  icon: 'rgba(0,0,0,.54)',
  iconInactive: 'rgba(0,0,0,.38)',

  iconOnColor: 'rgba(255,255,255,1)',
  iconInactiveOnColor: 'rgba(255,255,255,.5)',

  background: Grey[50],
  level1: Grey[300],
  level2: Grey[100],
  level3: Grey[50],
  level4: White,
}
