## 주의사항
- 의존성은 반드시 프로젝트 루트에서 설치할 것


## next-boilerplate로 새 프로젝트 생성하기
아래의 커맨드는 `hello-nextjs` 라는 프로젝트를 생성한다.
```shell
npx copyPackage -s 'packages/nextjs-boilerplate' -d 'packages/hello-nextjs' -n hello-nextjs -e 'node_modules' -e '.next' -e 'package-lock.json' -e 'tsconfig.tsbuildinfo'
```

## 프로젝트 루트의 커맨드
- `npm run clean:i` : 서브 패키지의 node_modules를 지우고 프로젝트에 의존성을 다시 설치
- `npm run dev:nextjs:boilerplate` : next.js 용 보일러플레이트를 개발 모드로 기동
