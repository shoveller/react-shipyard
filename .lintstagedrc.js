module.exports = {
  '**/*.{ts,tsx}': [
    // 모든 서브패키지의 타입을 체크
    () => 'npm exec --ws -- tsc --skipLibCheck --noEmit',
  ],
  '**/*.{ts,tsx,js,jsx,json}': [
    // 모든 서브패키지의 코딩 컨벤션을 체크
    () => 'npm run lint --ws',
  ],
}
