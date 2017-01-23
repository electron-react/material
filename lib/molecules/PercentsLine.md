# PercentsLine

Line with chunks proportional sized to sum of all chunks

## Usage

```jsx
import { PercentsLine } from '@electron-react/material/atoms'


const chunks = [200, 13, 482, 60, 301, 77]

export default () => (
  <PercentsLine chunks={chunks} />
)
```

## Properties

| Name              | Type              | Default     | Description |
|:-----|:-----|:-----|:-----|
| `chunks`          | `Array<Number>`   |             | Array of chunk values |
| `height`          | `Number`          | `16`        | Height of line in `rem` |
