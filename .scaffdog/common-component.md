---
name: 'common-component'
root: '.'
output: './src/components/commons'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/types.ts`

```markdown
export type {{ inputs.name | pascal }}Props = {}

```

# `{{ inputs.name | pascal }}/index.tsx`

```markdown
import { css } from '@emotion/react'
import { FC } from 'react'

import { {{ inputs.name | pascal }}Props } from './types'

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal }}Props> = () => {
  return <div css={styles.container}>AAA</div>
}

const styles = {
  container: css``
}

```
