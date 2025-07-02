# VibeCoding Todo App 라이브 데모 튜토리얼

> **바이브 코딩(Vibe Coding)**: AI 도구를 활용한 빠른 MVP 개발 방법론  
> **데모 목표**: Go + React 풀스택 Todo 앱을 60분 내에 구현

## 프로젝트 개요

### 데모 세션 정보
- **제목**: Live Demo Todo App: Go + React in 60 Minutes
- **목적**: 바이브 코딩 학습을 위한 라이브 데모
- **시간 제약**: 60분 이내 완성
- **접근 방식**: MVP(Minimum Viable Product) 개발

### 기술 스택
- **백엔드**: Go + Gin + SQLite + JWT
- **프론트엔드**: React + Vite + Tailwind CSS + React Query
- **인프라**: Docker + Docker Compose (로컬 컨테이너)
- **원칙**: "Do the dumbest possible thing that will work"

## 핵심 프롬프트와 개발 워크플로우

### 1. 프로젝트 시작 프롬프트

```
이 프로젝트는 바이브 코딩을 학습하기 위한 라이브 데모 프로젝트야. 
만들려고 하는 앱은 백앤드와 프론트엔드를 갖춘 todo list 관리 앱이야. 
최소한의 로그인(메일 인증은 필요 없어)을 갖춘 앱을 MVP방식으로 개발해 나가려고 해. 
먼저 prd를 작성하기 전에 prd를 작성하기 위해서 필요한 내용들을 정리해줘.
```

**결과**:
- PRD 준비 문서 생성 (`docs/prd-preparation.md`)
- MVP 접근법을 핵심 개발 방법론으로 설정
- 10개 주요 섹션으로 구성된 포괄적 기획

### 2. 기술 스택 선택 프롬프트

```
기술 스택은 https://lucumr.pocoo.org/2025/6/12/agentic-coding/ 여기에서 제안한 기술 스택을 사용해줘. 
이 프로젝트는 라이브 데모용 프로젝트야. 빠르게 구현하는게 생명이니까 저장소는 sqlite를 사용하고 인프라는 로컬에서 컨테이너로 띄워줘.
```

**핵심 기술 선택 기준**:
- 빠른 개발 속도 우선
- 단순한 배포 환경 (로컬 컨테이너)
- SQLite로 복잡성 최소화

### 3. PRD 문서 생성 프롬프트

```
그럼 제안대로 prd문서를 생성해줘.
```

**결과**:
- 완전한 PRD 문서 작성 (`docs/prd.md`)
- API 설계, 데이터베이스 스키마 포함
- 성공 기준과 개발 단계 정의

### 4. GitHub 저장소 설정 프롬프트

```
현재 워크스페이스를 github에 올려줘. github org은 roboco-io를 사용해줘.
```

**실행 과정**:
- Git 저장소 초기화
- roboco-io 조직 저장소 생성
- README.md와 .gitignore 추가
- 문서화와 함께 초기 커밋

### 5. 시간 제약 조정 프롬프트

```
이건 라이브 코딩 데모라서 1시간 이내애 끝내야해. 일정 빼줘.
```

**60분 라이브 데모 계획**:
- **백엔드**: 25분 (단일 파일 구현)
- **프론트엔드**: 25분 (단일 컴포넌트 접근)
- **통합**: 10분
- **간소화된 범위**: 인증 제거, 복잡한 구조 제거

### 6. GitHub 이슈 생성 프롬프트

```
@docs/tasks.md 에 기반해서 github issue를 만들어줘. 
깃헙 이슈에는 반드시 작업 내용, 작업 목적, 인수조건(AC) 가 들어가야 해. 
각 테스크들간의 의존성도 기술해줘.
```

**생성된 이슈들**:
1. **Issue #1**: Go 백엔드 프로젝트 설정 ✅
2. **Issue #2**: SQLite 데이터베이스 & Todo 모델 설정 ✅
3. **Issue #3**: Todo CRUD API 구현 ✅
4. **Issue #4**: React 프론트엔드 프로젝트 설정 ✅
5. **Issue #5**: Todo UI 컴포넌트 구현 ✅
6. **Issue #6**: 백엔드 API 통합 ✅
7. **Issue #7**: 통합 테스트 & 데모 준비 ✅
8. **Issue #8**: 프로젝트 문서화 ✅
9. **Issue #9**: Husky pre-commit hooks 설정 ✅

### 7. 구현 시작 프롬프트

```
이제 계획대로 하나하나 구현해나가. 혹시 문제가 생기면 퍼플렉시티 mcp로 조사해서 해결해.
```

**구현 과정**:
- Issues #1-7 순차적 구현
- TailwindCSS v4 구성 문제 발생 및 MCP로 해결
- 자동화된 품질 검사를 위한 Husky 구현

### 8. 오류 해결 프롬프트

```
에러나는데? mcp로 브라우저 표시내용 확인해봐.
```

**TailwindCSS v4 문제**:
- PostCSS 플러그인 아키텍처 변경으로 인한 CSS 로딩 실패
- Vite 플러그인 방식으로 해결: `@tailwindcss/vite` 사용
- CSS import를 `@import "tailwindcss"`로 변경

### 9. 이슈 관리 프롬프트

```
각각의 이슈들에 대해서 AC확인되면 클로즈 시켜
```

### 10. Husky 설정 프롬프트

```
이슈 #9의 진행 상황이 어떤지 알려줘.
진행해
```

**Husky 구현**:
- 포괄적인 pre-commit hooks 설정
- Go 백엔드: fmt, mod tidy, test, build
- React 프론트엔드: ESLint, Prettier, build

## 구현 접근법

### MVP 범위 (60분 제약)

**백엔드 구조**:
```
backend/
├── main.go           # 모든 기능이 들어간 단일 파일
├── go.mod           
└── todos.db         # SQLite 데이터베이스
```

**프론트엔드 구조**:
```
frontend/
├── src/
│   ├── App.jsx      # 모든 기능이 들어간 단일 컴포넌트
│   ├── main.jsx     
│   └── index.css    # Tailwind CSS
├── package.json
└── index.html
```

### 핵심 구현 기능
- **Core CRUD 작업**: Todo 생성, 읽기, 업데이트, 삭제
- **인증 없음**: 데모 목적상 간소화
- **단일 파일 접근**: 백엔드와 프론트엔드 각각 하나의 메인 파일
- **실시간 업데이트**: 프론트엔드-백엔드 API 통합
- **반응형 디자인**: 기본 Tailwind CSS 스타일링

## 바이브 코딩 핵심 원칙

### 1. MVP 우선 접근
- 완벽한 아키텍처보다 작동하는 기능에 집중
- 최소한의 요구사항으로 시작

### 2. 단일 파일 단순성
- 속도를 위해 복잡한 프로젝트 구조 지양
- 하나의 파일에서 시작해서 필요시 분리

### 3. AI 지원 개발
- Claude Code를 활용한 빠른 구현
- 프롬프트 기반 개발 워크플로우

### 4. Todo 기반 개발
- TodoWrite/TodoRead 도구로 진행상황 추적
- 명확한 작업 단위로 분할

### 5. 라이브 반복
- 실시간 문제 해결과 범위 조정
- 데모 중 유연한 대응

## 사용된 도구와 워크플로우

### Claude Code 도구
- **TodoWrite/TodoRead**: 작업 추적
- **Read/Write**: 파일 조작
- **Bash**: 명령어 실행
- **GitHub CLI**: 저장소 관리

### GitHub 통합
- 적절한 AC와 의존성이 포함된 이슈 생성
- 체계적인 작업 관리

### 문서화 우선
- PRD, 구현 계획, 라이브 데모 스크립트
- 명확한 목표와 제약사항 정의

## 데모 스크립트 구조

1. **설정 (0-5분)**: 프로젝트 소개와 목표 설명
2. **백엔드 개발 (5-25분)**: Go API 구현
3. **프론트엔드 개발 (25-50분)**: React UI 구현  
4. **최종 데모 (50-60분)**: 완성된 앱 시연

## 학습 포인트

### 시간 제약 하에서의 개발
- 엄격한 60분 제약과 대체 계획
- 범위 조정의 중요성

### 프롬프트 엔지니어링
- 명확하고 구체적인 요구사항 작성
- 컨텍스트와 제약사항 포함

### MVP 사고방식
- 완벽함보다 동작하는 제품
- 점진적 개선 접근법

## 실제 구현 결과

### 최종 성과
- ✅ **60분 내 완전한 풀스택 애플리케이션 구현**
- ✅ **9개 GitHub Issues 완료** (계획된 7개 + 추가 2개)
- ✅ **자동화된 코드 품질 관리 시스템 구축**
- ✅ **실시간 오류 해결 및 기술적 문제 극복**
- ✅ **체계적인 프로젝트 관리 및 문서화**

### 구현된 기능
**백엔드 (Go + SQLite)**:
- RESTful API 엔드포인트: `/api/todos`
- CRUD 작업: 생성, 읽기, 업데이트, 삭제, 토글
- CORS 설정으로 프론트엔드 연동
- SQLite 데이터베이스 자동 초기화
- 포트: 8083

**프론트엔드 (React + TailwindCSS)**:
- 반응형 Todo 관리 인터페이스
- 실시간 상태 업데이트
- 에러 핸들링 및 로딩 상태
- TailwindCSS v4 스타일링
- 포트: 5174

**품질 관리 (Husky)**:
- Pre-commit hooks로 자동 코드 검증
- Go: `go fmt`, `go mod tidy`, `go test`, `go build`
- React: ESLint, Prettier, `npm run build`

### Claude Code 설정 (~/.claude/)
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

### 접근 URL
- **백엔드 API**: http://localhost:8083
- **프론트엔드 UI**: http://localhost:5174
- **헬스체크**: http://localhost:8083/health

### 학습된 VibeCoding 원칙
1. **프롬프트 중심 개발**: 명확한 요구사항을 단계별 프롬프트로 구성
2. **MVP 우선 접근**: 완벽함보다 작동하는 기능에 집중
3. **실시간 문제 해결**: MCP를 활용한 즉석 연구 및 해결
4. **자동화된 품질 관리**: 개발 초기부터 품질 게이트 구축
5. **체계적 이슈 관리**: GitHub Issues로 작업 추적 및 AC 검증

이 데모는 현대적인 AI 도구와 실용적인 개발 접근법을 사용하여 엄격한 시간 제약 내에서 풀스택 애플리케이션을 빠르게 구축하는 VibeCoding 방법론의 실제 적용 사례를 성공적으로 보여주었습니다.