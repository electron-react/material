

export const Elevation = {
  Dialog: 24,
  Picker: 24,

  Drawer: 16,
  NavDrawer: 16,
  RightDrawer: 16,
  ModalBottomSheet: 16,

  FABRaised: 12,

  SubMenu: 9,
  SubMenu1: 10,
  SubMenu2: 11,
  SubMenu3: 12,
  SubMenu4: 13,
  SubMenu5: 14,

  BottomNavBar: 8,
  Menu: 8,
  CardRaised: 8,
  ButtonRaised: 8,

  FAB: 6,
  Snackbar: 6,

  AppBar: 4,

  RefreshIndicator: 3,
  QuickEntryRaised: 3,

  Card: 2,
  Button: 2,
  QuickEntry: 2,

  Switch: 1,
}

const makeShadow = elevation =>
  `0 ${elevation * 0.85}px ${elevation * 1.3}px -${elevation * 0.2}px rgba(0,0,0,.4)`
