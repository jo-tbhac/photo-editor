---
name: 'component'
root: './src/components'
output: '*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/types.ts`

```markdown
export interface {{ inputs.name | pascal }}PresenterProps {}

```

# `{{ inputs.name | pascal }}/presenter.tsx`

```markdown
import { css } from '@emotion/react'
import { FC } from 'react'

import { {{ inputs.name | pascal }}PresenterProps } from './types'

export const {{ inputs.name | pascal }}Presenter: FC<{{ inputs.name | pascal }}PresenterProps> = () => {
  return <div css={styles.container}>AAA</div>
}

const styles = {
  container: css``
}

```

# `{{ inputs.name | pascal }}/index.tsx`

```markdown
import { FC } from 'react'

import { {{ inputs.name | pascal }}Presenter } from './presenter'

export const {{ inputs.name | pascal }}: FC = () => {
  return <{{ inputs.name | pascal }}Presenter />
}

```
