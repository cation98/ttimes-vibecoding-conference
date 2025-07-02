# VibeCoding Todo App

> **🎯 60분 라이브 데모**: AI 도구를 활용한 빠른 MVP 개발 방법론 학습  
> **✨ 완료된 프로젝트**: Go + React 풀스택 Todo 앱 성공적 구현

바이브 코딩(VibeCoding) 방법론을 사용하여 60분 내에 완전한 풀스택 애플리케이션을 구현한 라이브 데모 프로젝트입니다.

## 🚀 프로젝트 성과

- ✅ **60분 내 완전한 풀스택 애플리케이션 구현**
- ✅ **9개 GitHub Issues 완료** (체계적 작업 관리)
- ✅ **자동화된 코드 품질 관리** (Husky pre-commit hooks)
- ✅ **실시간 오류 해결** (TailwindCSS v4 문제 해결)
- ✅ **프롬프트 중심 개발** (10개 핵심 프롬프트)

## 🛠 기술 스택

- **백엔드**: Go + Gin + SQLite (포트: 8083)
- **프론트엔드**: React + Vite + TailwindCSS v4 (포트: 5174)
- **품질 관리**: Husky + ESLint + Prettier + Go fmt
- **개발 도구**: Claude Code + Perplexity MCP

## 🎮 빠른 시작

### 백엔드 실행
```bash
cd backend
go run main.go
# 서버가 http://localhost:8083에서 실행됩니다
```

### 프론트엔드 실행
```bash
cd frontend
npm install
npm run dev
# 서버가 http://localhost:5174에서 실행됩니다
```

### 품질 검사
```bash
npm run pre-commit
```

## 📊 접근 URL

- **프론트엔드 UI**: http://localhost:5174
- **백엔드 API**: http://localhost:8083/api/todos
- **헬스체크**: http://localhost:8083/health

## 🎯 핵심 기능

### 백엔드 (Go + SQLite)
- RESTful API 엔드포인트 (`/api/todos`)
- 완전한 CRUD 작업 (생성, 읽기, 업데이트, 삭제, 토글)
- CORS 설정으로 프론트엔드 연동
- SQLite 데이터베이스 자동 초기화

### 프론트엔드 (React + TailwindCSS)
- 반응형 Todo 관리 인터페이스
- 실시간 상태 업데이트
- 에러 핸들링 및 로딩 상태
- TailwindCSS v4 현대적 스타일링

### 품질 관리 (Husky)
- Pre-commit hooks로 자동 코드 검증
- Go: `go fmt`, `go mod tidy`, `go test`, `go build`
- React: ESLint, Prettier, `npm run build`

## 📚 VibeCoding 핵심 원칙

1. **프롬프트 중심 개발**: 명확한 요구사항을 단계별 프롬프트로 구성
2. **MVP 우선 접근**: 완벽함보다 작동하는 기능에 집중
3. **실시간 문제 해결**: MCP를 활용한 즉석 연구 및 해결
4. **자동화된 품질 관리**: 개발 초기부터 품질 게이트 구축
5. **체계적 이슈 관리**: GitHub Issues로 작업 추적 및 AC 검증

## 🔧 Claude Code 설정

`~/.claude/settings.json`:
```json
{
  "settings": {
    "mcp_servers": {
      "perplexity": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-perplexity"],
        "env": {
          "PERPLEXITY_API_KEY": "your-api-key"
        }
      }
    }
  }
}
```

## 📖 문서

- **[완전한 튜토리얼](docs/tutorial.md)**: 10개 핵심 프롬프트와 구현 세부사항
- **[PRD 문서](docs/prd.md)**: 제품 요구사항 명세서
- **[작업 계획](docs/tasks.md)**: GitHub Issues 기반 작업 관리

## 🎪 라이브 데모 하이라이트

### 해결한 기술적 문제
- **TailwindCSS v4 설정**: PostCSS → Vite 플러그인 전환
- **포트 충돌**: 동적 포트 할당 (8083, 5174)
- **품질 게이트**: 포괄적 pre-commit hooks 구성

### 사용된 핵심 프롬프트
```
이 프로젝트는 바이브 코딩을 학습하기 위한 라이브 데모 프로젝트야...
에러나는데? mcp로 브라우저 표시내용 확인해봐.
이제 계획대로 하나하나 구현해나가...
```

## 🏗 프로젝트 구조

```
/
├── backend/
│   ├── main.go              # Go 백엔드 서버 (단일 파일)
│   ├── go.mod               # Go 모듈 설정
│   └── todos.db             # SQLite 데이터베이스
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # 메인 React 컴포넌트
│   │   ├── index.css        # TailwindCSS 설정
│   │   └── main.jsx         # React 진입점
│   └── package.json         # NPM 의존성
├── docs/
│   ├── tutorial.md          # 완전한 구현 튜토리얼
│   ├── prd.md              # 제품 요구사항 문서
│   └── tasks.md            # 작업 계획
├── .husky/
│   └── pre-commit          # Pre-commit hook
└── package.json            # 루트 패키지 설정
```

## 🎓 학습 포인트

이 프로젝트는 **VibeCoding 방법론**의 실제 적용 사례로, AI 도구와 체계적인 프롬프트 엔지니어링을 활용하여 엄격한 시간 제약 내에서 고품질 풀스택 애플리케이션을 빠르게 구축하는 방법을 성공적으로 보여줍니다.

## 📄 라이센스

MIT License