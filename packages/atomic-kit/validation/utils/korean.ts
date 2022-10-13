/**
 * 한글의 받침 여부 확인
 * @param word
 */
export const hasBatchim = (word: string) => {
  if (!word) {
    return true
  }

  const lastLetter = word[word.length - 1]
  const uni = lastLetter.charCodeAt(0)

  if (uni < 44032 || uni > 55203) return null

  return (uni - 44032) % 28 != 0
}

/**
 * 받침 여부에 따라 은/는 을 반환
 * @param word
 */
export const getUnNun = (word: string) => {
  if (hasBatchim(word)) {
    return '은'
  }

  return '는'
}
