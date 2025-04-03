import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [0],
    'type-empty': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
    'header-max-length': [0],
  },
}

export default Configuration
