# 주의사항
- 의존성은 반드시 프로젝트 루트에서 설치할 것
- 프로젝트 루트에 설치하지 않은 패키지는 프로젝트 루트로 옮길 것

## 사용법

### next-boilerplate로 새 프로젝트 생성
아래의 커맨드는 `atomic-kit` 이라는 프로젝트를 생성한다.
```shell
npx copyPackage -s 'packages/nextjs-boilerplate' -d 'packages/atomic-kit' -n atomic-kit -e 'node_modules' -e '.next' -e 'package-lock.json' -e 'tsconfig.tsbuildinfo'
```

### 프로젝트별 주요 커맨드
- `npm run dev` : next.js 를 개발 모드로 기동
- `npm run storybook` : storybook 을 개발 모드로 기동

### 프로젝트 루트의 주요 커맨드
- `npm run clean:i` : 서브 패키지의 node_modules를 지우고 프로젝트에 의존성을 다시 설치
- `npm run dev:nextjs:boilerplate` : next.js 용 보일러플레이트를 개발 모드로 기동
