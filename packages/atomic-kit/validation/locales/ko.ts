import { getUnNun } from 'atomic-kit/validation/utils/korean'
import { LocaleObject } from 'yup/lib/locale'

export const ko: LocaleObject = {
  // https://github.com/jquense/yup/blob/master/src/locale.ts#L71
  mixed: {
    required({ label, path }) {
      const unnun = getUnNun(label)

      return `${label || path}${unnun} 필수 입력값입니다.`
    },
    oneOf({ values, label, path }) {
      const unnun = getUnNun(label)

      return `${label || path}${unnun} ${values}중의 하나여야 합니다.`
    },
  },
  // https://github.com/jquense/yup/blob/master/src/locale.ts#L130
  array: {
    length({ label, path, length }) {
      const unnun = getUnNun(label)

      return `${label || path}${unnun} ${length}개 선택해야 합니다.`
    },
  },
  string: {
    length({ label, path, length }) {
      const unnun = getUnNun(label)

      return `${label || path}${unnun} ${length}자 입니다.`
    },
    email() {
      return '잘못된 이메일입니다.'
    },
  },
}
